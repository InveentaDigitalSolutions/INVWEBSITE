// Emits a real index.html for every route, so GitHub Pages answers 200 with
// the right head instead of falling through to 404.html.
//
// Body markup is still rendered by the client. That is deliberate: the whole
// problem was the status code and the head, and full server rendering would
// mean either a hydration mismatch (the film measures the viewport on mount)
// or a visible re-render flash, for content search engines already execute
// JavaScript to read. Crawlers now get 200 + correct metadata per URL;
// people get exactly what they had.
//
// Run automatically by `npm run build`.
import { build } from "vite";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ORIGIN = "https://inveenta.com";
const tmp = join(root, "node_modules", ".prerender");

/** Compile the TypeScript manifest so plain node can read the real content.
    Uses Vite's own SSR build — no extra toolchain dependency. */
async function loadManifest() {
  await mkdir(tmp, { recursive: true });
  await build({
    configFile: false,
    logLevel: "silent",
    build: {
      ssr: join(root, "src/prerender-manifest.ts"),
      outDir: tmp,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "manifest.mjs", format: "esm" } },
    },
  });
  return import(pathToFileURL(join(tmp, "manifest.mjs")).href + `?t=${Date.now()}`);
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Replace an existing tag's attribute value, matching however it's formatted. */
function setAttr(html, tagMatcher, attr, value) {
  const re = new RegExp(`(<${tagMatcher}[^>]*?${attr}=")([^"]*)(")`, "s");
  return re.test(html) ? html.replace(re, `$1${esc(value)}$3`) : html;
}

function headFor(html, page, allLocales, defaultLocale, localePath) {
  const canonical = ORIGIN + (page.path.replace(/\/+$/, "") || "/");

  // <title> and description
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`);
  html = setAttr(html, 'meta[^>]*name="description"', "content", page.description);

  // Open Graph / Twitter
  html = setAttr(html, 'meta[^>]*property="og:title"', "content", page.title);
  html = setAttr(html, 'meta[^>]*property="og:description"', "content", page.description);
  html = setAttr(html, 'meta[^>]*property="og:url"', "content", canonical);
  html = setAttr(html, 'meta[^>]*name="twitter:title"', "content", page.title);
  html = setAttr(html, 'meta[^>]*name="twitter:description"', "content", page.description);

  // canonical + hreflang set for this route
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`);
  const alts = [
    ...allLocales.map(
      (l) => `<link rel="alternate" hreflang="${l}" href="${ORIGIN}${localePath(l, page.basePath)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN}${localePath(defaultLocale, page.basePath)}" />`,
  ].join("\n    ");
  html = html.replace(/(\n\s*<link rel="alternate"[^>]*>)+/, `\n    ${alts}`);

  // document language
  html = html.replace(/<html([^>]*)\slang="[^"]*"/, `<html$1 lang="${page.lang}"`);

  return html;
}

const { pages, locales, defaultLocale, localePath } = await loadManifest();
const template = await readFile(join(dist, "index.html"), "utf8");
const all = pages();

let written = 0;
for (const page of all) {
  const html = headFor(template, page, locales, defaultLocale, localePath);
  // "/" is dist/index.html; "/de/x" is dist/de/x/index.html
  const target =
    page.path === "/" ? join(dist, "index.html") : join(dist, page.path, "index.html");
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html, "utf8");
  written++;
}

// 404.html stays the SPA fallback for genuinely unknown URLs — it keeps the
// root head, since we cannot know what was asked for.
await writeFile(join(dist, "404.html"), template, "utf8");
await rm(tmp, { recursive: true, force: true });

console.log(`prerendered ${written} routes + 404.html fallback`);

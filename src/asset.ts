// Prefixes a path with Vite's base URL so assets and in-app anchors resolve
// correctly whether the site is served at root (custom domain / local dev) or
// under a GitHub Pages project path (e.g. /INVWEBSITE/).
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, "");

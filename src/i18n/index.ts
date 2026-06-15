import type { Locale } from "./config";
import type { SiteContent } from "./types";
import en from "./en";
import de from "./de";
import es from "./es";

export const content: Record<Locale, SiteContent> = { en, de, es };

export function getContent(locale: Locale): SiteContent {
  return content[locale] ?? en;
}

export * from "./config";
export type { SiteContent } from "./types";

// Supported locales. English is the default and lives at the root path ("/");
// the others are path-prefixed ("/de", "/es", "/it").
export const locales = ["en", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  es: "ES",
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// Build a path for a given locale: "/" stays "/", others get a prefix.
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

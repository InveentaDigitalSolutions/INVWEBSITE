import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { defaultLocale, isLocale, localePath, type Locale } from "./config";
import { getContent } from "./index";
import type { SiteContent } from "./types";

type LocaleCtx = {
  locale: Locale;
  c: SiteContent;
  /** Build a locale-prefixed path (e.g. "/" -> "/de"). */
  lp: (path?: string) => string;
};

const Ctx = createContext<LocaleCtx | null>(null);

// Derives the active locale from the first path segment ("/de/..." -> "de").
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.replace(/^\/+/, "").split("/")[0];
  return isLocale(seg) ? seg : defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const value = useMemo<LocaleCtx>(
    () => ({
      locale,
      c: getContent(locale),
      lp: (path = "/") => localePath(locale, path),
    }),
    [locale],
  );

  // Keep <html lang> in sync for accessibility + SEO.
  if (typeof document !== "undefined") document.documentElement.lang = locale;

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLocaleCtx(): LocaleCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocaleCtx must be used within LocaleProvider");
  return ctx;
}

// Convenience hooks.
export const useC = () => useLocaleCtx().c;
export const useLocale = () => useLocaleCtx().locale;
export const useLp = () => useLocaleCtx().lp;

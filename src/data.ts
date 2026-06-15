// Language-neutral configuration. All translatable content now lives in
// /src/i18n (en.ts, de.ts, es.ts), consumed via the locale context.

export const company = {
  name: "inveenta",
  legalName: "Inveenta S.A.",
  // Web3Forms access key — form submissions are delivered privately to the
  // inbox registered with this key; the email address never appears in code.
  formAccessKey: "06fdea02-a200-4c9e-b7a9-eac653fc169c",
};

// Re-exported so existing component imports keep working.
export type { Offering, Industry, Tech } from "./i18n/types";

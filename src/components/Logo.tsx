type LogoProps = {
  /** "lg" shows the full wordmark + tagline; "sm" shows the compact wordmark */
  size?: "sm" | "lg";
  /** "light" for use on dark/navy backgrounds */
  variant?: "dark" | "light";
  withTagline?: boolean;
  /** compact "inv" mark — used in tight spaces (e.g. mobile header) */
  compact?: boolean;
  className?: string;
};

import { asset } from "../asset";

// Official wordmark, rendered from outlined SVG artwork in /public/brand.
export default function Logo({
  size = "sm",
  variant = "dark",
  withTagline,
  compact,
  className,
}: LogoProps) {
  const base = compact ? "inv" : size === "lg" || withTagline ? "wordmark" : "mark";
  const file = `${base}-${variant}.svg`;
  return (
    <img
      className={`logo logo--${size}${className ? ` ${className}` : ""}`}
      src={asset(`brand/${file}`)}
      alt="inveenta"
    />
  );
}

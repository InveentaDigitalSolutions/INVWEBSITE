type LogoProps = {
  /** "lg" shows the full wordmark + tagline; "sm" shows the compact wordmark */
  size?: "sm" | "lg";
  /** "light" for use on dark/navy backgrounds */
  variant?: "dark" | "light";
  withTagline?: boolean;
};

import { asset } from "../asset";

// Official wordmark, rendered from outlined SVG artwork in /public/brand.
export default function Logo({ size = "sm", variant = "dark", withTagline }: LogoProps) {
  const file = `${size === "lg" || withTagline ? "wordmark" : "mark"}-${variant}.svg`;
  return <img className={`logo logo--${size}`} src={asset(`brand/${file}`)} alt="inveenta" />;
}

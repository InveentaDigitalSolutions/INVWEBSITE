type LogoProps = {
  /** "lg" shows the tagline beneath the wordmark */
  size?: "sm" | "lg";
  /** "light" for use on the dark navy background */
  variant?: "dark" | "light";
  withTagline?: boolean;
};

// The wordmark renders "inveenta" with a dotless first i (U+0131) so the
// green brand dot can sit cleanly as the tittle — matching the identity sheet.
export default function Logo({ size = "sm", variant = "dark", withTagline }: LogoProps) {
  return (
    <span className={`logo logo--${size} logo--${variant}`}>
      <span className="logo__word">
        <span className="logo__i">
          <span className="logo__dot" aria-hidden="true" />
          {"ı"}
        </span>
        nveenta
      </span>
      {withTagline && <span className="logo__tag">engineering intelligent business</span>}
    </span>
  );
}

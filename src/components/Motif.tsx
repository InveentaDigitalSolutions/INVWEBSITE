// Three-square brand motif — fixed order green · navy · white.
export default function Motif({ className }: { className?: string }) {
  return (
    <span className={`motif ${className ?? ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

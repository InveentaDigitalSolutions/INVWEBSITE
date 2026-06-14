import { useEffect, useState } from "react";

// Animates the numeric part of a stat (e.g. "100%", "8", "3") from zero.
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    const m = value.match(/^(\d+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1], 10);

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }

    let raf = 0;
    let start = 0;
    const duration = 1200;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]); // depend only on the stable string prop

  if (!match) return <>{value}</>;
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

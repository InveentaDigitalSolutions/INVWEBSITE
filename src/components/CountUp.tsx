import { useEffect, useState } from "react";

// Animates the numeric part of a stat (e.g. "100%", "8", "3") from zero.
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!match) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    let start = 0;
    const duration = 1100;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, match]);

  if (!match) return <>{value}</>;
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

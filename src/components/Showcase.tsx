import { asset } from "../asset";
import { useC } from "../i18n/LocaleContext";

export default function Showcase() {
  const { showcase } = useC();
  return (
    <section className="showcase on-dark">
      <img className="showcase__img" src={asset("img/showcase.jpg")} alt="" loading="lazy" />
      <div className="showcase__overlay" />
      <div className="container showcase__inner reveal">
        <span className="eyebrow">{showcase.eyebrow}</span>
        <h2>{showcase.h2}</h2>
        <p>{showcase.p}</p>
      </div>
    </section>
  );
}

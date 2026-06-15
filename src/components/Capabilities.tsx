import { useC } from "../i18n/LocaleContext";
import CardGrid from "./CardGrid";

export default function Capabilities() {
  const { capabilitiesSection, capabilities } = useC();
  return (
    <section className="section capabilities" id="expertise">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{capabilitiesSection.eyebrow}</span>
          <h2>{capabilitiesSection.h2}</h2>
          <p>{capabilitiesSection.p}</p>
        </div>
        <CardGrid items={capabilities} idPrefix="cap" />
      </div>
    </section>
  );
}

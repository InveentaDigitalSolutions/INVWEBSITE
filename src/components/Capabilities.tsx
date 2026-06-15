import { capabilities } from "../data";
import CardGrid from "./CardGrid";

export default function Capabilities() {
  return (
    <section className="section capabilities" id="expertise">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Expertise, applied end to end.</h2>
          <p>
            The disciplines we bring to every engagement — from data and BI to automation, AI and
            governance. The how behind everything we build.
          </p>
        </div>
        <CardGrid items={capabilities} idPrefix="cap" />
      </div>
    </section>
  );
}

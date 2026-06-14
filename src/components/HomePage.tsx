import Hero from "./Hero";
import Pillars from "./Pillars";
import Capabilities from "./Capabilities";
import Solutions from "./Solutions";
import Showcase from "./Showcase";
import Industries from "./Industries";
import Technologies from "./Technologies";
import Approach from "./Approach";
import Contact from "./Contact";
import Seo from "./Seo";
import { useReveal } from "../useReveal";

export default function HomePage() {
  useReveal();
  return (
    <main>
      <Seo
        title="Inveenta — engineering intelligent business"
        description="Custom enterprise software that turns complex, manual operations into governed, scalable systems. Run leaner. Scale faster. Perform better."
      />
      <Hero />
      <Pillars />
      <Solutions />
      <Showcase />
      <Industries />
      <Capabilities />
      <Technologies />
      <Approach />
      <Contact />
    </main>
  );
}

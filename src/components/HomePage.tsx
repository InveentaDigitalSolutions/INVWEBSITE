import Hero from "./Hero";
import Capabilities from "./Capabilities";
import Solutions from "./Solutions";
import Industries from "./Industries";
import Layers from "./Layers";
import TheShift from "./TheShift";
import Why from "./Why";
import About from "./About";
import Technologies from "./Technologies";
import Approach from "./Approach";
import Contact from "./Contact";
import Seo from "./Seo";
import { useReveal } from "../useReveal";
import { useC } from "../i18n/LocaleContext";

export default function HomePage() {
  useReveal();
  const { seo } = useC();
  return (
    <main id="main">
      <Seo title={seo.homeTitle} description={seo.homeDescription} />
      <Hero />
      {/* the figures, out of the film and into their own run */}
      <TheShift />
      {/* The hero names Data Autonomy; this defines it. It belongs before
          the capability and the work — what we believe, then what we can
          do, then what we have built. */}
      <Layers />
      <Capabilities />
      <Industries />
      <Solutions />
      <Why />
      <Technologies />
      <About />
      <Approach />
      <Contact />
    </main>
  );
}

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
      {/* Expertise first: what we can do and have done, before the
          use-cases. Industries then narrows it, and Solutions lands last
          as the concrete thing to buy. */}
      <Capabilities />
      <Industries />
      <Solutions />
      {/* the ladder says how far along you are; this says what we build */}
      <Layers />
      <Why />
      <Technologies />
      <About />
      <Approach />
      <Contact />
    </main>
  );
}

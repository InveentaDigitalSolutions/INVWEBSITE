import Hero from "./Hero";
import Pillars from "./Pillars";
import Capabilities from "./Capabilities";
import Solutions from "./Solutions";
import Showcase from "./Showcase";
import Industries from "./Industries";
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
      <Pillars />
      <Solutions />
      <Showcase />
      <Industries />
      <Why />
      <Capabilities />
      <Technologies />
      <About />
      <Approach />
      <Contact />
    </main>
  );
}

import Hero from "./Hero";
import Pillars from "./Pillars";
import Capabilities from "./Capabilities";
import Solutions from "./Solutions";
import Showcase from "./Showcase";
import Industries from "./Industries";
import Technologies from "./Technologies";
import Approach from "./Approach";
import Contact from "./Contact";
import { useReveal } from "../useReveal";

export default function HomePage() {
  useReveal();
  return (
    <main>
      <Hero />
      <Pillars />
      <Capabilities />
      <Solutions />
      <Showcase />
      <Industries />
      <Technologies />
      <Approach />
      <Contact />
    </main>
  );
}

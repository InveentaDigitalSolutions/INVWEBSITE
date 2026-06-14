import Hero from "./Hero";
import Pillars from "./Pillars";
import Capabilities from "./Capabilities";
import Solutions from "./Solutions";
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
      <Industries />
      <Technologies />
      <Approach />
      <Contact />
    </main>
  );
}

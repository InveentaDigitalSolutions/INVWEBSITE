import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./useReveal";
import "./App.css";

function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Solutions />
        <Industries />
        <Technologies />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

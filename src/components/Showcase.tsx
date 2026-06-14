export default function Showcase() {
  return (
    <section className="showcase on-dark">
      <img className="showcase__img" src="/img/showcase.jpg" alt="" loading="lazy" />
      <div className="showcase__overlay" />
      <div className="container showcase__inner reveal">
        <span className="eyebrow">Why inveenta</span>
        <h2>We connect your data, systems and people into one intelligent operation.</h2>
        <p>
          Optimization, scalability and performance — engineered to hold up under real data, real
          scale, and real scrutiny.
        </p>
      </div>
    </section>
  );
}

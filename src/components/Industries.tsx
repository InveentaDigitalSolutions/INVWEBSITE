import { industries } from "../data";

export default function Industries() {
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Industries</span>
          <h2>Built for environments where the details matter.</h2>
          <p>
            Delivery within regulated, enterprise contexts — where data quality, traceability and
            stakeholder governance aren't optional.
          </p>
        </div>

        <div className="industries__grid">
          {industries.map((ind) => (
            <article className="industry-card" key={ind.name}>
              <img
                className="industry-card__img"
                src={`/img/${ind.image}.jpg`}
                alt={ind.name}
                loading="lazy"
              />
              <div className="industry-card__overlay" />
              <div className="industry-card__body">
                <h3>{ind.name}</h3>
                <p>{ind.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

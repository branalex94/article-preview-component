import "./cardDescription.css";

export default function CardDescription({ cardTitle, cardText }) {
  return (
    <section className="section__card-description">
      <h1 className="section__title">{cardTitle}</h1>
      <p className="section__text">{cardText}</p>
    </section>
  );
}

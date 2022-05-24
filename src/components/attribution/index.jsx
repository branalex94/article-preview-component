import "./attribution.css";

export default function Attribution({ coder, coderUrl }) {
  return (
    <div className="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href={coderUrl}>{coder}</a>.
    </div>
  );
}

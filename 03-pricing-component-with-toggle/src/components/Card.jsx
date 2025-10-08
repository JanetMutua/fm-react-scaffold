import { Button } from "./Button";

export function Card({ cardName, cardPrice }) {
  return (
    <div className="card">
      <h2 className="card__name">{cardName}</h2>
      <h3>{cardPrice}</h3>
      <Button color="blue" buttonText="Learn more" />
    </div>
  );
}

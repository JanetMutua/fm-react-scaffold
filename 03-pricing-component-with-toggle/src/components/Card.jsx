import { Button } from "./Button";
import { Feature } from "./Feature";

export function Card({ cardName, cardPrice, cardFeatures }) {
  return (
    <div className="card">
      <h2 className="card__name">{cardName}</h2>
      <h3>{cardPrice}</h3>
      <hr />
      {cardFeatures.map((feature) => {
        return <Feature cardFeature={feature} />;
      })}
      <Button color="blue" buttonText="Learn more" />
    </div>
  );
}

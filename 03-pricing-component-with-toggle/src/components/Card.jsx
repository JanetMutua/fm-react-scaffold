import { Button } from "./Button";

export function Card({ cardName, cardPrice, cardFeatures, cardStyling }) {
  return (
    <div className="card">
      <h2 className="card__name">{cardName}</h2>
      <h3 className="card__price">{cardPrice}</h3>

      {cardFeatures.map((feature) => {
        return (
          <div className={`card__feature card__${cardStyling}`}>
            <p className="card__feature__item">{feature}</p>
          </div>
        );
      })}
      <Button color={cardStyling} buttonText="Learn more" />
    </div>
  );
}

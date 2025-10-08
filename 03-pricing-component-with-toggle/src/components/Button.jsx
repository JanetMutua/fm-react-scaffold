// import "../scss/components/_button.scss";

export function Button({ color, buttonText }) {
  return <button className={`button ${color}`}>{buttonText}</button>;
}

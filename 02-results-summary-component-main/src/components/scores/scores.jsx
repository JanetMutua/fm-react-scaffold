import "./scores.css";

export const Scores = ({ styling, imgSrc, type, score }) => {
  return (
    <>
      <div className={styling}>
        <div className="score__type">
          <img className="icon" src={imgSrc} />
          <span className="type">{type}</span>
        </div>

        <div className="actual__score">
          <span className="bolded">{score}</span>
          <span className="percent"> / 100</span>
        </div>
      </div>
    </>
  );
};

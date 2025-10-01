export const Scores = ({ type, score }) => {
  // split the scores for styling purposes
  const split_scores = score.split(" / ");
  return (
    <>
      <div className="scores">
        <div className="score__type">
          <span className="icon">icon</span>
          <span className="type">{type}</span>
        </div>

        <div className="actual__score">
          <span className="bolded">{split_scores[0]}</span>
          <span> / {split_scores[1]}</span>
        </div>
      </div>
    </>
  );
};

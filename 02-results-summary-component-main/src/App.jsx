import "./App.css";
import jsonData from "./data.json";
import { Scores } from "./components/scores/scores";

function App() {
  return (
    <>
      <main className="component">
        <div className="card">
          {/* right side of the card */}
          <section className="card__right">
            <h2 className="title__right">Your Result</h2>
            <div className="score">
              <span className="big__score">76</span>
              <span className="small__score"> of 100</span>
            </div>
            <h2 className="title__text">Great</h2>
            <p className="summary">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </section>

          {/* left side of the card */}
          <section className="card__left">
            <h2 className="title__left">Summary</h2>

            {jsonData.map((data, index) => {
              let styling = `scores ${data.category.toLowerCase()}`;
              return (
                <Scores
                  key={`${index}-${data.category}`}
                  styling={styling}
                  imgSrc={data.icon}
                  type={data.category}
                  score={data.score}
                />
              );
            })}

            <button type="button" className="card__button">
              Continue
            </button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;

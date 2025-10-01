import "./App.css";
import { Scores } from "./components/scores";

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
            <h2 className="title__right">Summary</h2>
            <Scores type="Reaction" score="80 / 100" />
            <Scores type="Memory" score="92 / 100" />
            <Scores type="Verbal" score="61 / 100" />
            <Scores type="Visual" score="72 / 100" />
          </section>
        </div>
      </main>
      <footer>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Janet Mutua</a>.
        </div>
      </footer>
    </>
  );
}

export default App;

import "./scss/App.scss";

function App() {
  return (
    <>
      <main>
        <div className="pricing">
          <h1 className="pricing__title">Our Pricing</h1>
          <div className="pricing__toggle">
            <span className="pricing__toggle__text">Annually</span>
            <span className="pricing__toggle__text">Monthly</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

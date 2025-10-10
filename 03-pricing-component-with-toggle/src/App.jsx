import "./scss/App.scss";
import { Card } from "./components/Card";
import { useState } from "react";

import { pricingData } from "./data";

// importing font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

function App() {
  // toggle state
  const [isToggled, setIsToggled] = useState(true);

  // toggle functionality
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <main className="pricing">
        <h1 className="pricing__title">Our Pricing</h1>

        <section className="pricing__toggle">
          <span className="pricing__toggle__text">Annually</span>
          <div className="pricing__toggle__icon" onClick={handleToggle}>
            {isToggled ? (
              <FontAwesomeIcon
                className="toggle"
                icon="fa-solid fa-toggle-on"
              />
            ) : (
              <FontAwesomeIcon
                className="toggle-rotate"
                icon="fa-solid fa-toggle-on"
              />
            )}
          </div>
          <span className="pricing__toggle__text">Monthly</span>
        </section>

        <section className="pricing__cards">
          {isToggled
            ? pricingData.annually &&
              pricingData.annually.map((annualData, index) => {
                return (
                  <Card
                    key={`annual-${index}`}
                    cardName={annualData.title}
                    cardPrice={annualData.price}
                    cardFeatures={annualData.features}
                    cardStyling={
                      annualData.title.toLowerCase() === "professional"
                        ? "blue"
                        : ""
                    }
                  />
                );
              })
            : pricingData.monthly &&
              pricingData.monthly.map((monthlyData, index) => {
                return (
                  <Card
                    key={`monthly-${index}`}
                    cardName={monthlyData.title}
                    cardPrice={monthlyData.price}
                    cardFeatures={monthlyData.features}
                    cardStyling={
                      monthlyData.title.toLowerCase() === "professional"
                        ? "blue"
                        : ""
                    }
                  />
                );
              })}
        </section>
      </main>
    </>
  );
}

export default App;

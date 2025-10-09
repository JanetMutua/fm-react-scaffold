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
  // const [cardData, setCardData] = useState({});
  const [isToggled, setIsToggled] = useState(true);

  // useEffect(() => {
  //   setCardData(pricingData);
  // }, []);

  // toggle functionality
  const handleToggle = () => {
    console.log(isToggled);
    setIsToggled(!isToggled);
  };

  return (
    <>
      <main>
        <div className="pricing">
          <h1 className="pricing__title">Our Pricing</h1>
          <div className="pricing__toggle">
            <span className="pricing__toggle__text">Annually</span>
            <div className="pricing__toggle__icon" onClick={handleToggle}>
              {isToggled ? (
                <FontAwesomeIcon icon="fa-solid fa-toggle-off" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
              )}
            </div>
            <span className="pricing__toggle__text">Monthly</span>
          </div>

          {isToggled
            ? pricingData.annually &&
              pricingData.annually.map((annualData, index) => {
                return (
                  <Card
                    key={`annual-${index}`}
                    cardName={annualData.title}
                    cardPrice={annualData.price}
                    cardFeatures={annualData.features}
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
                  />
                );
              })}
        </div>
      </main>
    </>
  );
}

export default App;

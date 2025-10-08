import "./scss/App.scss";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

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
  const [pricingDatas, setPricingData] = useState([]);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    fetch("/pricing-data.json")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setPricingData(data);
      });
  }, []);

  // toggle functionality
  const handleToggle = () => {
    setIsToggled(!isToggled);
    // console.log(pricingData.annually);
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
                <FontAwesomeIcon icon="fa-solid fa-toggle-on" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-toggle-off" />
              )}
            </div>
            <span className="pricing__toggle__text">Monthly</span>
          </div>
          {isToggled
            ? pricingData.annually.map((cardData) => {
                console.log(cardData.title);
                <Card cardName={cardData.title} cardPrice={cardData.price} />;
              })
            : pricingData.monthly.map((cardDataMonthly) => {
                <Card
                  cardName={cardDataMonthly.title}
                  cardPrice={cardDataMonthly.price}
                />;
              })}

          {/* <Card cardName={pricingData[0].title} cardPrice="$19.99" /> */}
          {/* <Card cardName="Professional" cardPrice="$24.99" />
          <Card cardName="Master" cardPrice="$39.99" /> */}
        </div>
      </main>
    </>
  );
}

export default App;

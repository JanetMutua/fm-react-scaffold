import pageLogo from "/images/logo.svg?url";
import arrowDown from "/images/icon-arrow-down.svg?url";
import arrowUp from "/images/icon-arrow-up.svg?url";

export const Navigation = () => {
  return (
    <>
      <header className="nav-section">
        <div className="nav-right">
          <img src={pageLogo} alt="snap logo" />
          <ul className="links">
            <li className="features">
              <span>Features</span>
              {/* insert conditional rendering here */}
              <img className="arrow" src={arrowDown} alt="arrow down" />
              <img className="arrow up" src={arrowUp} alt="arrow up" />
            </li>

            <li className="company">
              <span>Company</span>
              {/* insert conditional rendering or hover functionality here */}
              <img className="arrow" src={arrowDown} alt="arrow down" />
              <img className="arrow up" src={arrowUp} alt="arrow up" />
            </li>

            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className="nav-btns">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </header>
    </>
  );
};

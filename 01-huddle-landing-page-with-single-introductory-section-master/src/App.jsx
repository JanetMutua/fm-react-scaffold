import pageLogo from "../images/logo.svg";
import heroImage from "../images/illustration-mockups.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far, fab);

function App() {
  return (
    <>
      <div className="hero">
        <header>
          <img src={pageLogo} alt="huddle logo" className="logo-img" />
        </header>
        <main className="hero-content">
          <section className="hero-img-section">
            <img className="hero-img" src={heroImage} alt="hero image" />
          </section>
          <section className="hero-text">
            <div className="main-hero-text">
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button>Register</button>
            </div>
            <div className="social-icons">
              <span className="icon">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </span>
              <span className="icon">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

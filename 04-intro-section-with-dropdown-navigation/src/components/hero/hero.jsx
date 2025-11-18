import heroImage from "/images/image-hero-desktop.png?url";
import dataBiz from "/images/client-databiz.svg?url";
import audioPhile from "/images/client-audiophile.svg?url";
import meet from "/images/client-maker.svg?url";
import maker from "/images/client-maker.svg?url";

export const Hero = () => {
  return (
    <>
      <main className="hero-section">
        {/* left hand side of hero section */}
        <section className="left-side">
          <h1 className="cta-header">Make remote work</h1>
          <p className="cta-text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="cta-btn">Learn more</button>
          <div className="companies">
            <img src={dataBiz} alt="databiz" />
            <img src={audioPhile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </section>

        {/* right hand side of hero section */}
        <section className="right-side">
          <img className="hero-img" src={heroImage} alt="main hero image" />
        </section>
      </main>
    </>
  );
};

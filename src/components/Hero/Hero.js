import arrow from "../../assets/images/arrow-right.svg";

export default function HeroOne() {
  return (
    <section className="hero-one">
      <div className="hero-one__textbox">
        <h2 className="hero-one__textmain">
          Modern solution built for your enterprise growth
        </h2>
        <p className="hero-one__textsub">
          Centralize your team in a secure, flexible and managed platform
        </p>
        <button className="hero-one__ctabtn">
          <span className="hero-one__ctabtn-text">Request a demo</span>
          <img
            src={arrow}
            alt="right arrow icon"
            className="hero-one__ctabtn-img"
          />
        </button>
      </div>
    </section>
  );
}

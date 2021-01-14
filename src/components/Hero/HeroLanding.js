import arrow from "../../assets/images/arrow-right.svg";

export default function HeroLanding() {
  return (
    <section className="herolanding">
      <div className="herolanding__inner">
        <div className="herolanding__textbox">
          <h2 className="herolanding__textmain">
            Collaborate with your team and get more done
          </h2>
          <p className="herolanding__textsub">
            Communicate effectively with Oneburner for easy collaboration, team
            work and remote work.
          </p>
          <button className="hero-one__ctabtn herolanding__ctabtn">
            <span className="hero-one__ctabtn-text">Start Free Trail</span>
            <img
              src={arrow}
              alt="right arrow icon"
              className="hero-one__ctabtn-img"
            />
          </button>
        </div>
        <div className="herolanding__imgcont"></div>
      </div>
    </section>
  );
}

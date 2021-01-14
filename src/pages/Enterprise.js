import Clients from "../components/Clients/Clients";
import HeroOne from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import WhyUs from "../components/WhyUs/WhyUs";
import award from "../assets/images/Award.svg";
import line from "../assets/images/Line.svg";
import user from "../assets/images/kemi.svg";
import integration from "../assets/images/integration.svg";
import RegionalPresence from "../components/RegionalPresence/RegionalPresence";
import arrow from "../assets/images/arrow-right.svg";

export default function Enterprise() {
  return (
    <Layout>
      <HeroOne />
      <Clients />
      <WhyUs />
      <section className="award">
        <img
          src={award}
          alt="award of best collaboration software received by oneburner"
          className="award__img"
        />
      </section>
      <section className="integration">
        <img
          src={integration}
          alt="a list of tools that oneburner works with"
          className="integration__toolsimg"
        />
      </section>
      <RegionalPresence />
      <section className="testimonial">
        <div className="width90">
          <p className="testimonial__text">
            Best. Product. Ever! We like Oneburner more and more each day
            because it makes our work a lot easier. It's just amazing. Very easy
            to use, impressed us on multiple levels. Thank you so much for your
            help and is worth much more than we paid. We were treated like
            royalty.
          </p>
          <div className="testimonial__user">
            <img src={line} alt="a straight line icon" className="line" />
            <img
              src={user}
              alt="a straight line icon"
              className="testimonial__user-image"
            />
            <div className="testimonial__user-details">
              <span className="testimonial__user-details-t">Kemi Hassan</span>
              <span className="testimonial__user-details-b">
                CEO, Saharaa Inc.{" "}
              </span>
            </div>
            <img src={line} alt="a straight line icon" className="line" />
          </div>
        </div>
      </section>
      <section className="learnmore">
        <h3 className="learnmore__header">
          Want to learn more on how we can impact your enterprise?
        </h3>
        <button className="hero-one__ctabtn">
          <span className="hero-one__ctabtn-text">Contact Sales</span>
          <img
            src={arrow}
            alt="right arrow icon"
            className="hero-one__ctabtn-img"
          />
        </button>
      </section>
    </Layout>
  );
}

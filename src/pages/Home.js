import HeroLanding from "../components/Hero/HeroLanding";
import Layout from "../components/Layout/Layout";
import Clients from "../components/Clients/Clients";
import Services from "../components/Services/Services";
import Frame2 from "../assets/images/Frame_2.svg";
import frame3 from "../assets/images/frame_3.svg";
import frame4 from "../assets/images/frame_4.svg";
import frame5 from "../assets/images/frame_5.svg";
import frame6 from "../assets/images/frame_6.svg";
import integration from "../assets/images/integration.svg";
import arrow from "../assets/images/arrow-right.svg";

export default function Home() {
  console.log(Frame2);
  return (
    <Layout>
      <HeroLanding />
      <Clients />
      <div className="services__tab">
        <button className="services__tab-btn services__tab-btn--active">
          CRM & Sales
        </button>
        <button className="services__tab-btn">Human Resources</button>
        <button className="services__tab-btn">Marketing</button>
        <button className="services__tab-btn">Human Resources</button>
        <button className="services__tab-btn">Remote Work</button>
        <button className="services__tab-btn">Project Management</button>
        <button className="services__tab-btn">Social Media</button>
      </div>
      <div className="py-10 d-flex-jus width90">
        <div className="text-cont">
          <h3 className="text-main">Manage team activities all in one place</h3>
          <p className="text-sub">
            Keep your team organized and informed with activities that are up to
            date.
          </p>
        </div>
        <div className="img-cont"></div>
      </div>
      <Services
        textMain="Bring your team up to speed"
        textSub="Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner."
        order={1}
        bgImg={Frame2}
      />
      <Services
        textMain="Automated task timeline"
        textSub="View dates, projects, calendar, sprint and more with reliability."
        order={0}
        bgImg={frame3}
      />
      <section className="integration">
        <img
          src={integration}
          alt="a list of tools that oneburner works with"
          className="integration__toolsimg"
        />
      </section>
      <Services
        textMain="Timeless report generator"
        textSub="You can generate quick report of activities of all that has to do with the daily running of your business and teams."
        order={1}
        bgImg={frame4}
      />
      <Services
        textMain="Efficient lead management"
        textSub="Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files."
        order={0}
        bgImg={frame5}
      />
      <Services
        textMain="24/7 customer support"
        textSub="Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there."
        order={1}
        bgImg={frame6}
      />
      <section className="trial-cta width90">
        <h3 className="trial__header">Choose a better way to work</h3>
        <p className="trial__subheader">
          No credit card details | No additional installation | No time wasting
        </p>
        <button className="hero-one__ctabtn trail__ctabtn">
          <span className="hero-one__ctabtn-text">Start my free trial</span>
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

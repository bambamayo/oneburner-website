import checkCircle from "../../assets/images/check-circle.svg";

export default function WhyUs() {
  return (
    <section className="whyus">
      <div className="width90">
        <h3 className="whyus__header">How Oneburner help enterprises grow</h3>

        <div className="whyus__details">
          <div className="whyus__detail">
            Oneburner software solution helps your business by creating an
            enabling environment for easy communication and feedbacks in real
            time. Oneburner brings all your user and teams in a single place
            with 99.99% uptime SLA and Data security
          </div>
          <div className="whyus__list">
            <p>
              <img
                src={checkCircle}
                alt="check circle icon"
                className="whyus__cc"
              />
              <span className="whyus__list__text">
                Data protection and control
              </span>
            </p>
            <p>
              <img
                src={checkCircle}
                alt="check circle icon"
                className="whyus__cc"
              />
              <span className="whyus__list__text">Reporting and analytics</span>
            </p>
            <p>
              <img
                src={checkCircle}
                alt="check circle icon"
                className="whyus__cc"
              />
              <span className="whyus__list__text">
                Use single sign-on and multi-factor authentication to secure
                accounts
              </span>
            </p>
            <p>
              <img
                src={checkCircle}
                alt="check circle icon"
                className="whyus__cc"
              />
              <span className="whyus__list__text">
                Enterprise integration with other tools
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

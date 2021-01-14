import { Link } from "react-router-dom";

import clients from "../../assets/images/clients.svg";
import stores from "../../assets/images/stores.svg";
import integrate from "../../assets/images/integrate.svg";
import whyOB from "../../assets/images/why_ob.svg";

export default function MenuDropDown() {
  return (
    <div className="dropdown">
      <div className="dropdown__inner">
        <div className="dropdown__item">
          <img src={clients} alt="a briefcase icon" className="dropdown__img" />
          <Link to="#" className="dropdown__link">
            <span className="dropdown__link--main">Clients</span>
            <span className="dropdown__link--sub">
              See the amazing team that uses Oneburner.
            </span>
          </Link>
        </div>
        <div className="dropdown__item">
          <img src={stores} alt="a briefcase icon" className="dropdown__img" />
          <Link to="#" className="dropdown__link">
            <span className="dropdown__link--main">Oneburner Stores</span>
            <span className="dropdown__link--sub">
              Explore our ready made solutions to expand your business.
            </span>
          </Link>
        </div>
        <div className="dropdown__item">
          <img
            src={integrate}
            alt="a briefcase icon"
            className="dropdown__img"
          />
          <Link to="#" className="dropdown__link">
            <span className="dropdown__link--main">Integrations</span>
            <span className="dropdown__link--sub">
              Connect different solution to Oneburner and get more done.
            </span>
          </Link>
        </div>
        <div className="dropdown__item">
          <img src={whyOB} alt="a briefcase icon" className="dropdown__img" />
          <Link to="#" className="dropdown__link">
            <span className="dropdown__link--main">Why Oneburner?</span>
            <span className="dropdown__link--sub">
              Learn more about our features, success rates,benefits and demo.
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

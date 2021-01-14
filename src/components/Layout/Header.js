import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/arrow-right.svg";
import MenuDropDown from "../MenuDropDown/MenuDropDown";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <div className="header__logobox">
            <Link to="/">
              <img src={logo} alt="one burner logo" className="reuse__logo" />
            </Link>
          </div>
          <Link to="#" className="header__link header__link--dropdown">
            Product{" "}
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.840088L6 5.42009L10.59 0.840088L12 2.25009L6 8.25009L0 2.25009L1.41 0.840088Z"
                fill="#111111"
              />
            </svg>
            <MenuDropDown />
          </Link>
          <ul className="header__nav">
            <li className="header__listitem">
              <Link className="header__link" to="#">
                Pricing
              </Link>
            </li>
            <li className="header__listitem">
              <Link className="header__link" to="/enterprise">
                Enterprise
              </Link>
            </li>
            <li className="header__listitem m-r-auto">
              <Link className="header__link" to="#">
                Support
              </Link>
            </li>
            <li className="header__listitem">
              <Link className="header__link" to="/contact-sales">
                Contact Sales
              </Link>
            </li>
            <li className="header__listitem">
              <Link className="header__link" to="/login">
                Login
              </Link>
            </li>
          </ul>
          <button className="header__btn">
            <span className="header__btn-text">Try For Free</span>
            <img
              src={arrow}
              className="header__btn-image"
              alt="right arrow icon"
            />
          </button>
        </div>
      </header>
    </>
  );
}

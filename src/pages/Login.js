import Logo from "../components/Logo/Logo";
import eyeIcon from "../assets/images/eye.svg";
import arrowIcon from "../assets/images/arrow-right.svg";
import outlook from "../assets/images/outlook-icon.svg";
import linkedin from "../assets/images/linkedin-icon.svg";
import gmail from "../assets/images/google-icon.svg";
import { Link } from "react-router-dom";
import FooterText from "../components/Layout/FooterText";

export default function Login() {
  return (
    <section className="login">
      <header className="login__header">
        <div className="login__header__inner">
          <Link to="/">
            <Logo classname="reuse__logo" />
          </Link>

          <div className="login__header-r">
            <Link to="#" className="login__header-r-text">
              New Customer?
            </Link>
            <button className="header__btn">
              <span className="header__btn-text">Try For Free</span>
              <img
                className="header__btn-image"
                src={arrowIcon}
                alt="arrow icon"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="login__formcontainer">
        <h2 className="login__formheader">Sign In</h2>
        <p className="login__formheader--sm">Welcome back!</p>
        <form className="login__form">
          <div className="form__group">
            <label htmlFor="email-username" className="form__label">
              Email / Username
            </label>
            <input type="text" id="email-username" className="form__input" />
          </div>
          <div className="form__group form__group-pr">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input type="password" id="email" className="form__input" />
            <img
              src={eyeIcon}
              alt="show password icon"
              className="form__icon-eye"
            />
          </div>
          <div className="form__group">
            <button className="form__submit">Log In</button>
          </div>
          <div className="form__forgotpw">
            <Link to="#">Forgot Password?</Link>
          </div>
          <div className="form__otheroptions">
            <span className="form__othertext">Or sign in with: </span>
            <img src={outlook} alt="outlook logo" className="form__otherimg" />
            <img
              src={linkedin}
              alt="linkedin logo"
              className="form__otherimg"
            />
            <img src={gmail} alt="gmail logo" className="form__otherimg" />
          </div>
        </form>
      </div>

      <div className="login__footer">
        <FooterText align="center" />
      </div>
    </section>
  );
}

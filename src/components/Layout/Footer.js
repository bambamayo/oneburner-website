import logo from "../../assets/images/logo.svg";
import arrowDownp from "../../assets/images/arrow-down-p.svg";
import world from "../../assets/images/world.svg";
import FooterMiddle from "./FooterMiddle";
import FooterText from "./FooterText";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__logobox">
            <img src={logo} alt="one burner logo" className="reuse__logo" />
          </div>
          <button className="footer__top-btn">
            <img src={world} className="footer__top-btn-w" alt="world icon" />
            <span className="footer__top-btn-t">English</span>
            <img
              src={arrowDownp}
              className="footer-top-btn-a"
              alt="arrow down icon"
            />
          </button>
        </div>
        <FooterMiddle />
        <FooterText align="left" />
      </div>
    </footer>
  );
}

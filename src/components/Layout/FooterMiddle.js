import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import youtube from "../../assets/images/youtube.svg";
import linkedin from "../../assets/images/linkedin.svg";

export default function FooterMiddle() {
  return (
    <div className="footer__mid">
      <div className="footer__mid-itemcont m-r-auto">
        <h3 className="footer__mid-header footer__mid-header--l">
          No 1 CRM solution in Africa
        </h3>
        <Link to="#" className="footer__mid-item">
          Terms of Use | Privacy Policy
        </Link>
        <span className="footer__mid-git"> Get in Touch</span>
        <span className="footer__mid-pn">+234-80-000-0000</span>
        <div className="footer__mid-socials">
          <img
            src={facebook}
            alt="facebook icon"
            className="footer__mid-socials-i"
          />
          <img
            src={twitter}
            alt="twitter icon"
            className="footer__mid-socials-i"
          />
          <img
            src={linkedin}
            alt="linkedin icon"
            className="footer__mid-socials-i"
          />
          <img
            src={youtube}
            alt="youtube icon"
            className="footer__mid-socials-i"
          />
        </div>
      </div>
      <div className="footer__mid-itemcont m-r-4">
        <h3 className="footer__mid-header">PRODUCT</h3>
        <Link to="#" className="footer__mid-item">
          Features
        </Link>
        <Link to="#" className="footer__mid-item">
          Enterprise
        </Link>
        <Link to="#" className="footer__mid-item">
          Security
        </Link>
        <Link to="#" className="footer__mid-item">
          Trust
        </Link>
        <Link to="#" className="footer__mid-item">
          Customer Stories
        </Link>
        <Link to="#" className="footer__mid-item">
          Pricing
        </Link>
        <Link to="#" className="footer__mid-item">
          Integrations
        </Link>
        <Link to="#" className="footer__mid-item">
          Oneburner Partners
        </Link>
      </div>
      <div className="footer__mid-itemcont m-r-4">
        <h3 className="footer__mid-header">COMPANY</h3>
        <Link to="#" className="footer__mid-item">
          About Us
        </Link>
        <Link to="#" className="footer__mid-item">
          Contact Us
        </Link>
        <Link to="#" className="footer__mid-item">
          Careers
        </Link>
        <Link to="#" className="footer__mid-item">
          In the News
        </Link>
      </div>
      <div className="footer__mid-itemcont m-r-4">
        <h3 className="footer__mid-header">ONEBURNER FOR TEAMS</h3>
        <Link to="#" className="footer__mid-item">
          Engineering
        </Link>
        <Link to="#" className="footer__mid-item">
          Financial Services
        </Link>
        <Link to="#" className="footer__mid-item">
          CRM and Sales
        </Link>
        <Link to="#" className="footer__mid-item">
          IT
        </Link>
        <Link to="#" className="footer__mid-item">
          Marketing
        </Link>
        <Link to="#" className="footer__mid-item">
          Customer Support
        </Link>
        <Link to="#" className="footer__mid-item">
          Human Resources
        </Link>
        <Link to="#" className="footer__mid-item">
          Project Management
        </Link>
        <Link to="#" className="footer__mid-item">
          Remote Work
        </Link>
      </div>
      <div className="footer__mid-itemcont">
        <h3 className="footer__mid-header">RESOURCES</h3>
        <Link to="#" className="footer__mid-item">
          Community
        </Link>
        <Link to="#" className="footer__mid-item">
          Guides
        </Link>
        <Link to="#" className="footer__mid-item">
          Templates
        </Link>
        <Link to="#" className="footer__mid-item">
          Video Tutorials
        </Link>
        <Link to="#" className="footer__mid-item">
          Professional Services
        </Link>
        <Link to="#" className="footer__mid-item">
          Knowledge Base
        </Link>
        <Link to="#" className="footer__mid-item">
          Blog
        </Link>
        <Link to="#" className="footer__mid-item">
          Webinars
        </Link>
        <Link to="#" className="footer__mid-item">
          Find a Partner
        </Link>
      </div>
    </div>
  );
}

import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const behanceIcon = <FontAwesomeIcon icon={faBehance} />;

const Footer = () => {
  return (
    <footer className="footer__home">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li>
          <Link className="link_icon" to="/linkedin">
            {linkedinIcon}
          </Link>
        </li>
        <li>
          <Link className="link_icon" to="/facebook">
            {facebookIcon}
          </Link>
        </li>
        <li>
          <Link className="link_icon" to="/behance">
            {behanceIcon}
          </Link>
        </li>
      </ul>
      <p>2021 Ecommerce Leeps | Derechos reservados</p>
    </footer>
  );
};

export default Footer;

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

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
          <a
            className="link_icon"
            href="https://www.linkedin.com/in/franco-carrera-desarrollador-web/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a className="link_icon" href="https://github.com/Franco-Carrera">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className="link_icon"
            href="https://www.behance.net/francocarrera1"
          >
            <FontAwesomeIcon icon={faBehance} />
          </a>
        </li>
      </ul>
      <p>2021 Ecommerce Leeps | Derechos reservados</p>
    </footer>
  );
};

export default Footer;

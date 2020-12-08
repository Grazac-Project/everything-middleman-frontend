import Logo from "../assets/logo.jpeg";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Text from "./text";
import Subtitle from "./subtitle";

const Footer = () => {
  return (
    <footer className="footer mt-md">
      <div className="footer-container ma">
        <div className="footer-section-1">
          <div className="footer-img-box">
            <img src={Logo} alt="everythingmiddleman" className="footer-img" />
          </div>
          <Text color="sm-text-light footer-text mt-sm">
            Build a modern and creative website with crealand
          </Text>
          <div className="footer-socials mt-sm">
            <a href="/" target="_blank" className="footer-social-link">
              <img src={Google} alt="google" className="footer-links-img" />
            </a>
            <a href="/" target="_blank" className="footer-socila-links">
              <img src={Twitter} alt="Twitter" className="footer-links-img" />
            </a>
            <a href="/" target="_blank" className="footer-social-links">
              <img src={LinkedIn} alt="linkedin" className="footer-links-img" />
            </a>
            <a href="/" target="_blank" className="footer-social-links">
              <img src={Facebook} alt="Facebook" className="footer-links-img" />
            </a>
          </div>
        </div>
        <div className="footer-section-2">
          <Subtitle size="subtitle-small" extraStyle="mb-sm">
            Product
          </Subtitle>
          <div className="footer-links">
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
          </div>
        </div>
        <div className="footer-section-2">
          <Subtitle size="subtitle-small" extraStyle="mb-sm">
            Product
          </Subtitle>
          <div className="footer-links">
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
          </div>
        </div>
        <div className="footer-section-2">
          <Subtitle size="subtitle-small" extraStyle="mb-sm">
            Product
          </Subtitle>
          <div className="footer-links">
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
          </div>
        </div>
        <div className="footer-section-2">
          <Subtitle size="subtitle-small" extraStyle="mb-sm">
            Product
          </Subtitle>
          <div className="footer-links">
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
            <Text color="sm-text-light">Landing Page</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

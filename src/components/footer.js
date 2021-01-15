// @ts-nocheck
import Logo from "../assets/logo.jpeg";
import Facebook from "../assets/facebook.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.svg";
import Text from "./text";
import Subtitle from "./subtitle";
import { FooterLink } from "./link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-md">
      <div className="container">
        <div className="footer-container ma">
          <div className="footer-section-1">
            <div className="footer-img-box">
              <Link to="/">
                <img
                  src={Logo}
                  alt="everythingmiddleman"
                  className="footer-img"
                />
              </Link>
            </div>
            <Text color="sm-text-light footer-text mt-sm">
              Build a modern and creative website with crealand
            </Text>
            <div className="footer-socials mt-sm">
              <a
                href="instagram.com/emconsults_"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <img
                  src={Instagram}
                  alt="Twitter"
                  className="footer-links-img"
                />
              </a>
              <a
                href="twitter.com/emconsults_"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <img src={Twitter} alt="Twitter" className="footer-links-img" />
              </a>
              <a
                href="http://linkedin.com/in/everything-middleman-284565201"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <img
                  src={LinkedIn}
                  alt="linkedin"
                  className="footer-links-img"
                />
              </a>
              <a
                href="fb.me/theEMconsults"
                target="_blank"
                rel="noreferrer"
                className="footer-social-links"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="footer-links-img"
                />
              </a>
            </div>
          </div>
          <div className="footer-section-2">
            <Subtitle size="subtitle-small" extraStyle="mb-sm">
              Product
            </Subtitle>
            <div className="footer-links">
              <FooterLink extraStyle="footer-link">Landing Page</FooterLink>
              <FooterLink extraStyle="footer-link">Features</FooterLink>
              <FooterLink extraStyle="footer-link">Documentation</FooterLink>
              <FooterLink extraStyle="footer-link">Referral Program</FooterLink>
              <FooterLink extraStyle="footer-link">Pricing</FooterLink>
            </div>
          </div>
          <div className="footer-section-2">
            <Subtitle size="subtitle-small" extraStyle="mb-sm">
              Product
            </Subtitle>
            <div className="footer-links">
              <FooterLink extraStyle="footer-link">Landing Page</FooterLink>
              <FooterLink extraStyle="footer-link">Features</FooterLink>
              <FooterLink extraStyle="footer-link">Documentation</FooterLink>
              <FooterLink extraStyle="footer-link">Referral Program</FooterLink>
              <FooterLink extraStyle="footer-link">Pricing</FooterLink>
            </div>
          </div>
          <div className="footer-section-2">
            <Subtitle size="subtitle-small" extraStyle="mb-sm">
              Product
            </Subtitle>
            <div className="footer-links">
              <FooterLink extraStyle="footer-link">Landing Page</FooterLink>
              <FooterLink extraStyle="footer-link">Features</FooterLink>
              <FooterLink extraStyle="footer-link">Documentation</FooterLink>
              <FooterLink extraStyle="footer-link">Referral Program</FooterLink>
              <FooterLink extraStyle="footer-link">Pricing</FooterLink>
            </div>
          </div>
          <div className="footer-section-2">
            <Subtitle size="subtitle-small" extraStyle="mb-sm">
              Product
            </Subtitle>
            <div className="footer-links">
              <FooterLink extraStyle="footer-link">Landing Page</FooterLink>
              <FooterLink extraStyle="footer-link">Features</FooterLink>
              <FooterLink extraStyle="footer-link">Documentation</FooterLink>
              <FooterLink extraStyle="footer-link">Referral Program</FooterLink>
              <FooterLink extraStyle="footer-link">Pricing</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

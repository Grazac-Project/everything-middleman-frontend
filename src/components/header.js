import Logo from "../assets/logo.jpeg";
import Navigation from "./Navigation/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggle }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="logo" className="header-img" />
        </div>
        <Navigation />
        <div className="header-toggle" onClick={toggle}>
          <GiHamburgerMenu size="3rem" color="white" title="sidebar toggle" />
        </div>
      </div>
    </header>
  );
};

export default Header;

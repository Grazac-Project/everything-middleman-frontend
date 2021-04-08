import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <NavigationItem link={"/"} exact>
          Home
        </NavigationItem>
        <NavigationItem link={"/about"}>About Us</NavigationItem>
        <NavigationItem link={"/faq"}>FAQ</NavigationItem>
        <NavigationItem link={"/contact"}>Contact</NavigationItem>
        <a
          className="navigation-link navigation-link-sayhi"
          href="https://wa.me/+2349132633784"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;

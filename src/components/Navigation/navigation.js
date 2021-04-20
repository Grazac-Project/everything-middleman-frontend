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
        <NavigationItem link={"/contact"}>Hi us</NavigationItem>
        {/* <a
          className="navigation-link navigation-link-sayhi"
          href="mailto:consult@everythingmiddleman.com"
          target="_blank"
          rel="noreferrer"
        >
          Hi us
        </a> */}
      </ul>
    </nav>
  );
};

export default Navigation;

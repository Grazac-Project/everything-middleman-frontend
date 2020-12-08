import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <NavigationItem link={"/"} exact>Home</NavigationItem>
        <NavigationItem link={"/about"}>About Us</NavigationItem>
        <NavigationItem link={"/faq"}>FAQ</NavigationItem>
        <NavigationItem link={"/contact"}>Contact</NavigationItem>
        <NavigationItem link={"/sayhi"}>Say Hi</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;

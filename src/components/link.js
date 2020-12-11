import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link to="/about" className="link">
      {props.children}
    </Link>
  );
};

export const FooterLink = (props) => {
  return (
    <Link to="/about" className={["sm-text sm-text-light", props.extraStyle].join(" ")}>
      {props.children}
    </Link>
  );
};

export default LinkButton;

import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return <Link to="/" className="link">{props.children}</Link>;
};

export default LinkButton;

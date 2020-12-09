import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link to="/about" className="link">
      {props.children}
    </Link>
  );
};

export default LinkButton;

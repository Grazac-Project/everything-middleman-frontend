import { Link } from "react-router-dom";

export const LinkButton = ({ color, extraStyle, children }) => {
  return (
    <Link to={"/about"} className={["button", color, extraStyle].join(" ")}>
      {children}
    </Link>
  );
};

export const WhatsApp = ({ color, extraStyle }) => {
  return (
    <a
      href="https://wa.me/+2349132633784"
      className={["button", color, extraStyle].join(" ")}
      target="_blank"
      rel="noreferrer"
    >
      Book Now
    </a>
  );
};

export const Button = ({ color, extraStyle, children }) => {
  return (
    <button className={["button", color, extraStyle].join(" ")}>
      {children}
    </button>
  );
};

// export default Button;

import { Link } from "react-router-dom";

export const LinkButton = ({ color, extraStyle, children }) => {
  return (
    <Link to={"/about"} className={["button", color, extraStyle].join(" ")}>
      {children}
    </Link>
  );
};

export const WhatsApp = ({ color, extraStyle, children }) => {
  return (
    <a
    href="mailto:consult@everythingmiddleman.com"
      className={["button", color, extraStyle].join(" ")}
      target="_blank"
      rel="noreferrer"
    >
     {children}
    </a>
  );
};

export const Button = ({ color, extraStyle, children, onclick, disabled }) => {
  return (
    <button
      className={["button", color, extraStyle].join(" ")}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// export default Button;

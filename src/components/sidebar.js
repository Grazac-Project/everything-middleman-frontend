import { Link } from "react-router-dom";

const Sidebar = ({ animate, click }) => {
  return (
    <div className={["sidebar animate__animated", animate].join(" ")}>
      <div className="container">
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item" onClick={click}>
              <Link to={"/"} className="sidebar-link">
                Home
              </Link>
            </li>
            <li className="sidebar-item tar" onClick={click}>
              <Link to={"/about"} className="sidebar-link tar">
                About Us
              </Link>
            </li>
            <li className="sidebar-item" onClick={click}>
              <Link to={"/faq"} className="sidebar-link">
                FAQ
              </Link>
            </li>
            <li className="sidebar-item tar" onClick={click}>
              <Link to={"/contact"} className="sidebar-link ">
                Contact
              </Link>
            </li>
            <li className="sidebar-item sidebar-item-say" onClick={click}>
              <a
                className="sidebar-link"
                href="mailto:consult@everythingmiddleman.com"
                target="_blank"
                rel="noreferrer"
              >
                Hi Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

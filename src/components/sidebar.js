import { Link } from "react-router-dom";

const Sidebar = ({ animate }) => {
  return (
    <div className={["sidebar animate__animated", animate].join(" ")}>
      <div className="container">
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to={"/"} className="sidebar-link">
                Home
              </Link>
            </li>
            <li className="sidebar-item tar">
              <Link to={"/about"} className="sidebar-link tar">
                About Us
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to={"/faq"} className="sidebar-link">
                FAQ
              </Link>
            </li>
            <li className="sidebar-item tar">
              <Link to={"/contact"} className="sidebar-link ">
                Contact
              </Link>
            </li>
            <li className="sidebar-item sidebar-item-say">
              <Link to={"/sayhi"} className="sidebar-link">
                Say Hi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

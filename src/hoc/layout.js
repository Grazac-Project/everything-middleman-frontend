import { useState } from "react";
import Book from "../components/book";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Layout = (props) => {
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  const hideSidebar = () => {
    setShow(false);
  };
  return (
    <div className="layout">
      <Header toggle={showSideBar} />
      <Sidebar
        click= {hideSidebar}
        animate={show ? "animate__slideInRight" : "animate__slideOutRight"}
      />
      <main onClick={hideSidebar} className="main">
        {props.children}
      </main>
      <div className="layout-book">
        <Book />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

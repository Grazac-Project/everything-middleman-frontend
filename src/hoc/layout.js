import Book from "../components/book";
import Footer from "../components/footer";
import Header from "../components/header";
// import  from ''

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <main>{props.children}</main>
      <div className="layout-book">
        <Book />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

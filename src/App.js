import { Route, Switch } from "react-router-dom";
// import Contact from "./containers/contact";
import Home from "./containers/home";
// import About from "./containers/about";
import Layout from "./hoc/layout";
// import SayHi from "./containers/sayhi";
import { lazy, Suspense } from "react";

// const Blog = lazy(() => {
//   return import("./containers/Blog/Blog");
// });

// const Register = lazy(() => {
//   return import("./containers/Auth/Register/Register");
// });

const About = lazy(() => {
  return import("./containers/about");
});

const Contact = lazy(() => {
  return import("./containers/contact");
});

const Faq = lazy(() => {
  return import("./containers/faq");
});

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/sayHi" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;

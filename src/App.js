import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import Layout from "./hoc/layout";
import Contact from "./containers/contact";
import About from "./containers/about";
import Faq from "./containers/faq";

// const About = lazy(() => {
//   return import("./containers/about");
// });

// const Contact = lazy(() => {
//   return import("./containers/contact");
// });

// const Faq = lazy(() => {
//   return import("./containers/faq");
// });

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

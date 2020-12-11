import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import Layout from "./hoc/layout";
import { lazy, Suspense } from "react";
// ..

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
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;

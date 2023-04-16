import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import Home from "./pages/home";
import Model from "./pages/model";
//components
import Header from "./components/header";
//Styles
import "./App.scss";

function App() {
  //960x1200 / 2 = 480x600 (4:5 ratio)
  const imageDetails = {
    width: 480,
    height: 600,
  };

  return (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home imageDetails={imageDetails} />}
              />
              <Route
                exact
                path='/model/:id'
                render={() => <Model imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;

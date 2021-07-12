import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import { Header } from "./components";
import {
  AccountPage,
  CheckOutPage,
  ComingSoonPage,
  ComponentsPage,
  FileNotFoundPage,
  HomePage,
  LandingPage,
  LegalsPage,
  SignInPage,
  SignUpPage,
  Test,
} from "./pages";

const App = () => {
  return (
    <div className="min-h-screen w-full">
        <Router>
          <Header />
          <Switch>
            <Route path="/account" exact component={AccountPage} />
            <Route path="/checkout" exact component={CheckOutPage} />
            <Route path="/coming-soon" exact component={ComingSoonPage} />
            <Route path="/components" exact component={ComponentsPage} />
            <Route path="/404" exact component={FileNotFoundPage} />
            <Route path="/welcome" exact component={LandingPage} />
            <Route path="/legals" exact component={LegalsPage} />
            <Route path="/login" exact component={SignInPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/test" exact component={Test} />
            <Route>
              <Route path="/" component={HomePage} />
            </Route>
          </Switch>
        </Router>
    </div>
  );
};

export default App;

import React, { Fragment, useEffect } from "react";

import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavbarTop from "./components/layout/NavbarTop";
import Header from "./components/layout/Header";
import NavbarBottom from "./components/layout/NavbarBottom";
import Landing from "./components/layout/Landing";
import Alert from "./components/layout/Alert";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

import Home from "./components/home/Home";
import Account from "./components/home/Account";
import Dashboard from "./components/home/Dashboard";
import Wcm from "./components/wcm/Wcm";
import Whm from "./components/home/Whm";
import Setting from "./components/home/Setting";
import Profile from "./components/home/Profile";
import Report from "./components/home/Report";

//bring redux to react
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser(), []);
  });
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarTop />

          <NavbarBottom />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/account" component={Account} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/wcm" component={Wcm} />
              <PrivateRoute exact path="/whm" component={Whm} />
              <PrivateRoute exact path="/setting" component={Setting} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/report" component={Report} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

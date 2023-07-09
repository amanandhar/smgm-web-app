import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AboutUs } from "./pages/about-us";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { Membership } from "./pages/membership";
import { ProductCheckout } from "./pages/product-checkout";
import { Service } from "./pages/service";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/membership" component={Membership} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={ProductCheckout} />
          <Route exact path="" component={Home} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

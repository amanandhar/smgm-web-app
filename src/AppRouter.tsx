import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ProductCart } from "./pages/product-cart";

export default function AppRouter() {
  return (
    <></>
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Product} />
    //     <Route path="/checkout" component={ProductCart} />
    //     <Route exact path="" component={Product} />
    //     <Route path="*">
    //       <Redirect to="/" />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

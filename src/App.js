import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.page";
import Checkout from "./Pages/Checkout/Checkout.page";
import NotFound from "./Pages/NotFound/NotFound.page";

const App = () => {
  return (
    <Switch>
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/404" component={NotFound} />
      <Route path="/" component={Homepage} />
    </Switch>
  );
};
export default App;

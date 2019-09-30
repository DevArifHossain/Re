import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.page";
import Checkout from "./Pages/Checkout/Checkout.page";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
};
export default App;

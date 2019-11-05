import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Management from "./pages/Management";
import Confirmation from "./pages/Confirmation";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/management" component={Management} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
}

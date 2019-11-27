import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Disciplines from "./pages/Management/ListDisciplines";
import Students from "./pages/Management/ListStudents";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/management" exact component={Disciplines} />
        <Route path="/management/disciplines" component={Disciplines} />
        <Route path="/management/students" component={Students} />
      </Switch>
    </BrowserRouter>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import landing from "views/landing";
import Start from "Components/Recom/Start";
import Step1 from "Components/Recom/Step1";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={landing} />
      <Route path="/Start" exact component={Start} />
      <Route path="/Step1" exact component={Step1} />

      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import { Switch, Route } from "react-router-dom";
import { Show } from "./pages/Show";
function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>

      <Route exact={true} path="/starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;

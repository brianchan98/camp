import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import Safe from "./pages/safe/safe";
import Shelf from "./pages/shelf/shelf";
import Shelf2 from "./pages/shelf2/shelf2";
import PoliceStation from "./pages/policeStation/policeStation";
import WeaponList from "./pages/weapon/weapon_list";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/safe">
            <Safe />
          </Route>
          <Route path="/shelf">
            <Shelf />
          </Route>
          <Route path="/shelf2">
            <Shelf2 />
          </Route>
          <Route path="/policeStation">
            <PoliceStation />
          </Route>
          <Route path="/weapon">
            <WeaponList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
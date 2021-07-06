import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Messaging from "../Pages/Messaging/Messaging";
import Notes from "../Pages/Notes/Notes";
import Noticeboard from "../Pages/NoticeBoard/Noticeboard";
import Profile from "../Pages/Profile/Profile";

const NavbarRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>ROOT dir</h1>
      </Route>

      <Route path="/Profile" exact>
        <Profile />
      </Route>

      <Route path="/Noticeboard" exact>
        <Noticeboard />
      </Route>

      <Route path="/Messaging">
        <Messaging />
      </Route>

      <Route path="/Notes">
        <Notes />
      </Route>

      <Route path="/Soon">
        <h1>Soon..</h1>
      </Route>

      <Route path="/SignOut">
        <h1>Sign Out</h1>
      </Route>
    </Switch>
  );
};

export default NavbarRoutes;

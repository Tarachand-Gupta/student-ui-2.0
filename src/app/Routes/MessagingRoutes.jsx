import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainChatScreen from "../Pages/Messaging/Components/MainChatScreen";
import Messaging from "../Pages/Messaging/Messaging";
import Noticeboard from "../Pages/NoticeBoard/Noticeboard";
import Profile from "../Pages/Profile/Profile";

const MessagingRoutes = () => {
  let { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <h3>Please select a Chat.</h3>
      </Route>

      <Route path={`${path}/:chatId`}>
        <MainChatScreen />
      </Route>
    </Switch>
  );
};

export default MessagingRoutes;

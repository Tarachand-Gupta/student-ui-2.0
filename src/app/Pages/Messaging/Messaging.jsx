import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import MessagingRoutes from "../../Routes/MessagingRoutes";

function Messaging() {
  let { path, url } = useRouteMatch();

  const users = [
    { name: "Tara" },
    { name: "Rohit" },
    { name: "Amit" },
    { name: "Ashish" },
  ];
  return (
    <div>
      <h1>Messaging</h1>
      <br />
      {users.map((user, index) => (
        <Link to={`${url}/${user.name}`}>
          <h3>{user.name}</h3>
        </Link>
      ))}

      <MessagingRoutes />
    </div>
  );
}

export default Messaging;

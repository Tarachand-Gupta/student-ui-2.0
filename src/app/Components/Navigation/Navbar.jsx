import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle && "body-pd"}`} id="body-pd">
      <Topbar toggle={toggle} setToggle={setToggle} />
      <Sidebar toggle={toggle} setToggle={setToggle} />

      {props.children}
    </div>
  );
};

export default Navbar;

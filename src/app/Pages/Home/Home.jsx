import { React, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import NavbarRoutes from "../../Routes/NavbarRoutes";
function Home() {
  return (
    <Router>
      <Navbar />
      <NavbarRoutes />
    </Router>
  );
}

export default Home;

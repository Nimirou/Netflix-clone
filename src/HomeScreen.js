import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import NavBar from "./NavBar";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar> </NavBar>
      <Banner></Banner>
    </div>
  );
}

export default HomeScreen;

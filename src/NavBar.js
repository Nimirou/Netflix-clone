import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar nav__Black">
      <div className="navBar__contents">
        <img
          className="navBar__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <img
          className="navBar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NavBar;

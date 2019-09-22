import React from "react";
import { NavLink } from "react-router-dom";

const Header = function() {
  const activeStyle = {
    color: "orange"
  };

  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About Us
      </NavLink>
    </nav>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",

  padding: "12px",
  margin: "6px 6px 6px",
  background: "orange",
  border: "2px solid black",
  borderRadius: "5px",
  textDecoration: "none",
  color: "maroon",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/teams"
        exact
        style={linkStyles}
        activeStyle={{
          background: "dark orange",
        }}
      >
        Teams
      </NavLink>
      <NavLink
        to="/standings"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Standings
      </NavLink>
    </div>
  );
}

export default NavBar;
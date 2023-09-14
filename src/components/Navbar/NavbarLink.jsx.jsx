import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ link, path }) => {
  return (
    <li>
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to={path}
      >
        {link}
      </NavLink>
    </li>
  );
};

export default NavbarLink;

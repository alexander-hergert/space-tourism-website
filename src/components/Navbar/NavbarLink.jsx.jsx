import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ link, path, index }) => {
  return (
    <li>
      <NavLink
        className={"max-md:text-4xl"}
        style={({ isActive }) => {
          return { color: isActive ? "red" : "" };
        }}
        to={path}
      >
        <span className="max-lg:hidden">0{index} </span>
        {link}
      </NavLink>
    </li>
  );
};

export default NavbarLink;

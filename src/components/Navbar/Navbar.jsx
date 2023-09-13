import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/destination"
          >
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/crew"
          >
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/technology"
          >
            Technology
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

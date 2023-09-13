import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute flex items-center justify-around left-[50%] transform -translate-x-1/2">
      <img src="/images/shared/logo.svg" alt="logo" />
      <menu className="flex gap-5">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/"
          >
            00 Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/destination"
          >
            01 Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/crew"
          >
            02 Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "red" : "" };
            }}
            to="/technology"
          >
            03 Technology
          </NavLink>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;

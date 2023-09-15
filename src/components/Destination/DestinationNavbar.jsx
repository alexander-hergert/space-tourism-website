import React from "react";
import { NavLink } from "react-router-dom";

const DestinationNavbar = () => {
  return (
    <div className="mt-10">
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/destination/moon"
          >
            Moon
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/destination/mars"
          >
            Mars
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/destination/europa"
          >
            Europa
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/destination/titan"
          >
            Titan
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DestinationNavbar;

import React from "react";
import { NavLink } from "react-router-dom";

const CrewNavbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/crew/commander"
          >
            Commander
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/crew/engineer"
          >
            Engineer
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/crew/pilot"
          >
            Pilot
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/crew/specialist"
          >
            Specialist
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CrewNavbar;

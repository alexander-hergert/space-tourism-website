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
            to="/crew/Mission Specialist"
          >
            Mission Specialist
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
            to="/crew/Flight Engineer"
          >
            Flight Engineer
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CrewNavbar;

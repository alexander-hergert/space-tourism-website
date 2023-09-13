import React from "react";
import { NavLink } from "react-router-dom";

const TechnologyNavbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/technology/launch vehicle"
          >
            Launch vehicle
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/technology/spaceport"
          >
            Spaceport
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "blue" : "" };
            }}
            to="/technology/space capsule"
          >
            Space capsule
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TechnologyNavbar;

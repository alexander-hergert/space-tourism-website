import React from "react";
import { NavLink } from "react-router-dom";
import CrewNavbarLink from "./CrewNavbarLink";

const CrewNavbar = () => {
  const navlinks = [
    { path: "/crew/commander" },
    { path: "/crew/Mission Specialist" },
    { path: "/crew/pilot" },
    { path: "/crew/Flight Engineer" },
  ];

  return (
    <div className="mt-10 md:mb-10">
      <ul className="flex justify-center gap-5">
        {navlinks.map((item) => (
          <CrewNavbarLink key={item.path} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CrewNavbar;

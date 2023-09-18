import React from "react";
import CrewNavbarLink from "./CrewNavbarLink";

const CrewNavbar = ({ styles }) => {
  const navlinks = [
    { path: "commander" },
    { path: "mission Specialist" },
    { path: "pilot" },
    { path: "flight Engineer" },
  ];

  return (
    <div className={`mt-10 mb-10 ${styles}`}>
      <ul className="flex justify-center gap-5">
        {navlinks.map((item) => (
          <CrewNavbarLink key={item.path} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CrewNavbar;

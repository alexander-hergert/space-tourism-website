import React from "react";
import TechnologyNavbarLink from "../../components/Technology/TechnologyNavbarLink";

const TechnologyNavbar = ({ styles, size }) => {
  const navlinks = [
    { link: "1", path: "launch vehicle" },
    { link: "2", path: "spaceport" },
    { link: "3", path: "space capsule" },
  ];

  return (
    <div>
      <ul className={`flex justify-center gap-10 lg:flex-col ${styles}`}>
        {navlinks.map((item) => (
          <TechnologyNavbarLink key={item.link} {...item} size={size} />
        ))}
      </ul>
    </div>
  );
};

export default TechnologyNavbar;

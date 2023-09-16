import React from "react";
import TechnologyNavbarLink from "../../components/Technology/TechnologyNavbarLink";

const TechnologyNavbar = () => {
  const navlinks = [
    { link: "1", path: "/technology/launch vehicle" },
    { link: "2", path: "/technology/spaceport" },
    { link: "3", path: "/technology/space capsule" },
  ];

  return (
    <div>
      <ul className="flex justify-center gap-10">
        {navlinks.map((item) => (
          <TechnologyNavbarLink key={item.link} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default TechnologyNavbar;

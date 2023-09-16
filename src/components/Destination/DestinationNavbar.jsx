import React from "react";
import DestinationNavbarLink from "./DestinationNavbarLink";

const DestinationNavbar = () => {
  const navlinks = [
    { link: "Moon", path: "/destination/moon" },
    { link: "Mars", path: "/destination/mars" },
    { link: "Europa", path: "/destination/europa" },
    { link: "Titan", path: "/destination/titan" },
  ];

  return (
    <div className="mt-10 lg:mt-0">
      <ul className="flex justify-center gap-5 lg:justify-start">
        {navlinks.map((item) => (
          <DestinationNavbarLink key={item.link} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default DestinationNavbar;

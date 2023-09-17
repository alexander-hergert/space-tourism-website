import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navlinks = [
    { link: "Home", path: "/" },
    { link: "Destination", path: "/destination/moon" },
    { link: "Crew", path: "/crew/commander" },
    { link: "Technology", path: "/technology/launch vehicle" },
  ];

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <nav
      className="absolute flex items-center justify-between 
    w-full pl-10 lg:pt-10"
    >
      <img src="/images/shared/logo.svg" alt="logo" />
      <div className="relative left-10 lg:h-[1px] w-full bg-slate-300 ml-10"></div>
      <div className="md:bg-[rgba(255,255,255,0.05)] p-10 lg:pr-0 lg:min-w-[60vw]">
        <menu
          className="flex justify-center gap-10 max-md:hidden 
         xl:mr-20 2xl:mr-40"
        >
          {navlinks.map((item, index) => (
            <NavbarLink key={item.link} {...item} index={index} />
          ))}
        </menu>
        <input
          className="md:hidden"
          type="image"
          src="/images/shared/icon-hamburger.svg"
          alt={"menu-icon"}
          onClick={handleOpenMenu}
        />
      </div>
      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} navlinks={navlinks} />}
    </nav>
  );
};

export default Navbar;

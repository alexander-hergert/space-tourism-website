import React, { useState } from "react";
import NavbarLink from "./NavbarLink.jsx";
import Menu from "./Menu.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navlinks = [
    { link: "Home", path: "/" },
    { link: "Destination", path: "/destination" },
    { link: "Crew", path: "/crew" },
    { link: "Technology", path: "/technology" },
  ];

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <nav className="absolute flex items-center justify-between w-full p-10">
      <img src="/images/shared/logo.svg" alt="logo" />
      <div>
        <menu className="flex gap-5 max-md:hidden">
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

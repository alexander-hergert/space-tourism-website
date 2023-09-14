import React from "react";
import { NavLink } from "react-router-dom";
import NavbarLink from "./NavbarLink.jsx";

const Navbar = () => {
  const navlinks = [
    { link: "00 Home", path: "/" },
    { link: "01 Destination", path: "/destination" },
    { link: "02 Crew", path: "/crew" },
    { link: "03 Technology", path: "/technology" },
  ];
  return (
    <nav className="absolute flex items-center justify-around left-[50%] transform -translate-x-1/2">
      <img src="/images/shared/logo.svg" alt="logo" />
      <menu className="flex gap-5">
        {navlinks.map((item) => (
          <NavbarLink key={item.link} {...item} />
        ))}
      </menu>
    </nav>
  );
};

export default Navbar;

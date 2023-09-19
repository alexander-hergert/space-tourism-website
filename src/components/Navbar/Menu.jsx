import React from "react";
import NavbarLink from "./NavbarLink";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeDown } from "../../animations";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;

  @media screen and (min-width: 768px) {
    visibility: hidden;
  }
`;

const Menu = ({ setIsMenuOpen, navlinks, pathname, activeTopNav }) => {
  return (
    <Overlay className="relative w-full h-full pt-16 backdrop-blur ">
      <motion.div
        initial={fadeDown.hidden}
        animate={fadeDown.visible}
        className="flex items-start justify-around z-[20]"
      >
        <menu>
          {navlinks.map((item) => (
            <NavbarLink
              key={item.link}
              {...item}
              setIsMenuOpen={setIsMenuOpen}
              activeTopNav={activeTopNav}
              pathname={pathname}
            />
          ))}
        </menu>
        <input
          onClick={() => setIsMenuOpen(false)}
          type="image"
          src="/images/shared/icon-close.svg"
          alt="icon-close"
        />
      </motion.div>
    </Overlay>
  );
};

export default Menu;

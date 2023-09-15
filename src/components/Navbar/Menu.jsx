import React from "react";
import NavbarLink from "./NavbarLink";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;

  @media screen and (min-width: 786px) {
    visibility: hidden;
  }
`;

const Menu = ({ setIsMenuOpen, navlinks }) => {
  return (
    <Overlay className="relative w-full h-full pt-16">
      <div className="flex items-start justify-around z-[20]">
        <menu>
          {navlinks.map((item) => (
            <NavbarLink key={item.link} {...item} />
          ))}
        </menu>
        <input
          onClick={() => setIsMenuOpen(false)}
          type="image"
          src="/images/shared/icon-close.svg"
          alt="icon-close"
        />
      </div>
    </Overlay>
  );
};

export default Menu;

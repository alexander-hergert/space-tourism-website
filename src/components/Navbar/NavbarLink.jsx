import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  position: relative;

  @media screen and (min-width: 768px) {
    .active::after {
      content: "";
      width: 100%;
      height: 0.25rem;
      position: absolute;
      background-color: white;
      top: 4rem;
      left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    margin-bottom: 2rem;
    color: gray;
    .active::before,
    .active::after {
      content: "";
      width: 0.5rem;
      height: 100%;
      border-radius: 5px;
      position: absolute;
      background-color: white;
    }
    .active,
    :hover {
      color: white;
    }

    .active::before {
      left: 0;
    }
    .active::after {
      right: 0;
    }
  }
`;

const NavbarLink = ({ setIsMenuOpen, link, path, index }) => {
  return (
    <Li>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className={"max-md:text-4xl uppercase"}
        to={path}
      >
        <span className="max-lg:hidden font-bold">0{index} &nbsp;&nbsp;</span>
        {link}
      </NavLink>
    </Li>
  );
};

export default NavbarLink;

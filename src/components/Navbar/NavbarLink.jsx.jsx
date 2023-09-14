import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  position: relative;

  @media screen and (min-width: 786px) {
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

  @media screen and (max-width: 786px) {
    .active {
      color: red;
    }
  }
`;

const NavbarLink = ({ link, path, index }) => {
  return (
    <Li>
      <NavLink className={"max-md:text-4xl uppercase"} to={path}>
        <span className="max-lg:hidden font-bold">0{index} &nbsp;&nbsp;</span>
        {link}
      </NavLink>
    </Li>
  );
};

export default NavbarLink;

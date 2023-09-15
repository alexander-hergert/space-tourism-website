import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
  position: relative;

  .active {
    color: white;
  }

  .active::after {
    content: "";
    width: 100%;
    height: 0.25rem;
    position: absolute;
    background-color: white;
    top: 2rem;
    left: 0;
  }
`;

const DestinationNavbarLink = ({ link, path }) => {
  return (
    <Li>
      <NavLink className={"uppercase"} to={path}>
        {link}
      </NavLink>
    </Li>
  );
};

export default DestinationNavbarLink;

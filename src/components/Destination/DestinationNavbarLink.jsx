import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
  position: relative;

  .active {
    color: white;
  }

  .active::after,
  ::after {
    content: "";
    width: 100%;
    height: 0.25rem;
    position: absolute;
    background-color: white;
    top: 2rem;
    left: 0;
  }

  ::after {
    content: "";
    width: 0;
    transition: width 0.5s;
  }

  :hover::after {
    width: 100%;
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

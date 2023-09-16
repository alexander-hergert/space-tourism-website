import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
  a {
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    border: solid 1px white;
  }

  .active,
  a:hover {
    color: black;
    background-color: white;
  }
`;

const TechnologyNavbarLink = ({ link, path }) => {
  return (
    <Li>
      <NavLink className={"text-white"} to={path}>
        {link}
      </NavLink>
    </Li>
  );
};

export default TechnologyNavbarLink;

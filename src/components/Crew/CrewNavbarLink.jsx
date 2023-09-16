import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: gray;
  border-radius: 50%;
  display: grid;
  place-items: center;

  :hover {
    background-color: white;
  }

  a {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: gray;
  }

  .active {
    background-color: white;
  }
`;

const CrewNavbarLink = ({ path }) => {
  return (
    <Li>
      <NavLink to={path}></NavLink>
    </Li>
  );
};

export default CrewNavbarLink;

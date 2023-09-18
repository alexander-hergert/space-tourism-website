import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Li = styled.li`
  a {
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: ${(props) => props.size || "3rem"};
    height: ${(props) => props.size || "3rem"};
    border: solid 1px white;
  }

  .active,
  a:hover {
    color: black;
    background-color: white;
  }
`;

const TechnologyNavbarLink = ({ link, path, size }) => {
  return (
    <Li size={size}>
      <NavLink className={"text-white text-2xl font"} to={path}>
        {link}
      </NavLink>
    </Li>
  );
};

export default TechnologyNavbarLink;

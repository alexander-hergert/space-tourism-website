import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
  position: relative;

  @media screen and (min-width: 768px) {
    .active::after,
    ::after {
      content: "";
      width: 100%;
      height: 0.25rem;
      position: absolute;
      background-color: white;
      top: 4rem;
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
  }

  @media screen and (max-width: 767px) {
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

const NavbarLink = ({
  pathname,
  activeTopNav,
  setIsMenuOpen,
  link,
  path,
  index,
}) => {
  const ref = useRef();
  const navPath = path.split("/");

  //helps to keep navbar active styles
  useEffect(() => {
    ref.current.classList.remove("active");

    if (activeTopNav === navPath[1]) {
      ref.current.classList.add("active");
    }
  }, [pathname]);

  return (
    <Li onClick={() => setIsMenuOpen(false)}>
      <NavLink ref={ref} className={"max-md:text-4xl uppercase"} to={path}>
        <span className="max-lg:hidden font-bold">0{index} &nbsp;&nbsp;</span>
        {link}
      </NavLink>
    </Li>
  );
};

export default NavbarLink;

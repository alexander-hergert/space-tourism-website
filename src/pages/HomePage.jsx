import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Style = styled.main`
  min-height: 100vh;
  background: url("/images/home/background-home-mobile.jpg") center / cover
    no-repeat;
  @media screen and (min-width: 768px) {
    background: url("/images/home/background-home-tablet.jpg") center / cover
      no-repeat;
  }
  @media screen and (min-width: 1024px) {
    background: url("/images/home/background-home-desktop.jpg") center / cover
      no-repeat;
  }
`;

const HomePage = () => {
  return (
    <Style>
      <div>
        <h1>
          So, you want to travel to
          <span className="text-4xl">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <div className="grid place-content-center rounded-full w-[10rem] h-[10rem] bg-white text-black">
          <Link to='/destination'>Explore</Link>
        </div>
      </div>
    </Style>
  );
};

export default HomePage;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../animations";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
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
    <Style className="lg:flex justify-around items-center">
      <motion.div
        initial={fadeLeft.hidden}
        animate={fadeLeft.visible}
        className="max-w-[30rem] px-5 m-auto mt-10 text-slate-400
      lg:m-0"
      >
        <h1 className="m-auto text-center uppercase font-light lg:text-left">
          So, you want to travel to
          <span className="text-8xl block mt-10 font md:text-[10rem] text-white lg:text-left">
            SPACE
          </span>
        </h1>
        <p className="m-auto text-center mt-10 font-light lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </motion.div>
      <div>
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="grid font m-auto mt-20 place-content-center rounded-full w-[12rem] h-[12rem]
          lg:w-[14rem] lg:h-[14rem] 
         bg-white text-black text-2xl lg:m-0"
        >
          <Link to="/destination/moon">EXPLORE</Link>
        </motion.div>
      </div>
    </Style>
  );
};

export default HomePage;

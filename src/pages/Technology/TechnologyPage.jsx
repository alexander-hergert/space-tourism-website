import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import TechnologyInnerPage from "./TechnologyInnerPage";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
  background: url("/images/technology/background-technology-mobile.jpg") center /
    cover no-repeat;
  @media screen and (min-width: 768px) {
    background: url("/images/technology/background-technology-tablet.jpg")
      center / cover no-repeat;
  }
  @media screen and (min-width: 1024px) {
    background: url("/images/technology/background-technology-desktop.jpg")
      center / cover no-repeat;
  }
`;

const TechnologyPage = () => {
  const name = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(name).length === 0) {
      navigate("/technology/launch vehicle");
    }
  }, []);
  return (
    <Style>
      <h3
        className="mb-10 text-center text-white uppercase 
      md:text-left md:text-2xl md:pl-[4rem] lg:pl-[11rem]"
      >
        <span className="text-slate-400">03</span> &nbsp;&nbsp;Space launch 101
      </h3>
      <TechnologyInnerPage />
    </Style>
  );
};

export default TechnologyPage;

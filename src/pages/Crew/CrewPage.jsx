import React, { useEffect } from "react";
import styled from "styled-components";
import CrewInnerPage from "./CrewInnerPage";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
  background: url("/images/crew/background-crew-mobile.jpg") center / cover
    no-repeat;
  @media screen and (min-width: 768px) {
    background: url("/images/crew/background-crew-tablet.jpg") center / cover
      no-repeat;
  }
  @media screen and (min-width: 1024px) {
    background: url("/images/crew/background-crew-desktop.jpg") center / cover
      no-repeat;
  }
`;

const CrewPage = () => {
  const name = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(name).length === 0) {
      navigate("/crew/commander");
    }
  }, []);

  return (
    <Style>
      <h2
        className="mb-10 text-center text-white uppercase 
      md:text-left md:text-2xl md:pl-[4rem] lg:pl-[11rem]"
      >
        <span className="text-slate-400">02</span> &nbsp;&nbsp;Meet your crew
      </h2>
      <CrewInnerPage />
    </Style>
  );
};

export default CrewPage;

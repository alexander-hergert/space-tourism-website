import React, { useEffect } from "react";
import styled from "styled-components";
import CrewInnerPage from "./CrewInnerPage";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Style = styled.main`
  min-height: 100vh;
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
      <h3>02 Meet your crew</h3>
      <CrewInnerPage />
    </Style>
  );
};

export default CrewPage;

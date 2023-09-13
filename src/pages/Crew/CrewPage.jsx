import React from "react";
import CrewNavbar from "../../components/Crew/CrewNavbar";
import styled from "styled-components";

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
  return (
    <Style>
      <h3></h3>
      <div>
        <h2></h2>
        <p></p>
        <CrewNavbar />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </Style>
  );
};

export default CrewPage;

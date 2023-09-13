import React from "react";
import TechnologyNavbar from "../../components/Technology/TechnologyNavbar";
import styled from "styled-components";

const Style = styled.main`
  min-height: 100vh;
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
  return (
    <Style>
      <h3></h3>
      <div>
        <TechnologyNavbar />
        <h2></h2>
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </Style>
  );
};

export default TechnologyPage;

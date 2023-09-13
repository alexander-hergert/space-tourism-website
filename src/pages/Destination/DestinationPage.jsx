import React from "react";
import styled from "styled-components";
import DestinationInnerPage from "./DestinationInnerPage";

const Style = styled.main`
  min-height: 100vh;
  background: url("/images/destination/background-destination-mobile.jpg")
    center / cover no-repeat;
  @media screen and (min-width: 768px) {
    background: url("/images/destination/background-destination-tablet.jpg")
      center / cover no-repeat;
  }
  @media screen and (min-width: 1024px) {
    background: url("/images/destination/background-destination-desktop.jpg")
      center / cover no-repeat;
  }
`;

const DestinationPage = () => {
  return (
    <Style>
      <h2>01 Pick your destination</h2>
      <DestinationInnerPage />
    </Style>
  );
};

export default DestinationPage;

import React, { useEffect } from "react";
import styled from "styled-components";
import DestinationInnerPage from "./DestinationInnerPage";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

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
  const name = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(name).length === 0) {
      navigate("/destination/moon");
    }
  }, []);

  return (
    <Style>
      <h2>01 Pick your destination</h2>
      <DestinationInnerPage />
    </Style>
  );
};

export default DestinationPage;

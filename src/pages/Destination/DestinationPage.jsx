import React, { useEffect } from "react";
import styled from "styled-components";
import DestinationInnerPage from "./DestinationInnerPage";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
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
      <h2 className="m-auto mb-20 text-center text-slate-400 uppercase 
      lg:text-left lg:text-2xl lg:pl-[11rem] lg:mt-10">
        01 <span className="text-white">&nbsp;&nbsp;Pick your destination</span>
      </h2>
      <DestinationInnerPage />
    </Style>
  );
};

export default DestinationPage;

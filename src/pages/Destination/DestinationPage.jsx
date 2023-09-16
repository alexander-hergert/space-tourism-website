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
      <h2
        className="mb-10 text-center text-white uppercase 
      md:text-left md:text-2xl md:pl-[4rem] lg:pl-[11rem]"
      >
        <span className="text-slate-400">01</span> &nbsp;&nbsp;Pick your
        destination
      </h2>
      <DestinationInnerPage />
    </Style>
  );
};

export default DestinationPage;

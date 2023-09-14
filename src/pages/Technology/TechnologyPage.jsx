import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import TechnologyInnerPage from "./TechnologyInnerPage";

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

  const name = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(name).length === 0) {
      navigate("/technology/launch vehicle");
    }
  }, []);
  return (
    <Style>
      <h3> 03 Space launch 101</h3>
      <TechnologyInnerPage />
    </Style>
  );
};

export default TechnologyPage;

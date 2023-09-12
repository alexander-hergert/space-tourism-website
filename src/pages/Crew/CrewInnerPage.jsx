import React from "react";
import { useParams } from "react-router";

const CrewInnerPage = () => {
  let { name } = useParams();

  return (
    <div>
      <h1>{`CrewInner ${name}`}</h1>
    </div>
  );
};

export default CrewInnerPage;

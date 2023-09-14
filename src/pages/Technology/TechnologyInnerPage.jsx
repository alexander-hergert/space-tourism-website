import React from "react";
import TechnologyNavbar from "../../components/Technology/TechnologyNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";

const TechnologyInnerPage = () => {
  const { data } = useGlobalContext();
  let { name } = useParams();
  if (name) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  const techArray = data?.technology?.filter((item) => item.name === name);

  if (techArray !== undefined) {
    const tech = techArray[0];

    return (
      <>
        <div>
          <h2>{tech?.name}</h2>
          <p>{tech?.description}</p>
        </div>
        <div>
          <img src={tech?.image.portrait} alt={tech?.name} />
        </div>
        <TechnologyNavbar />
      </>
    );
  }
};

export default TechnologyInnerPage;

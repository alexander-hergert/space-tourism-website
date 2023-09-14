import React from "react";
import CrewNavbar from "../../components/Crew/CrewNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";

const CrewInnerPage = () => {
  const { data } = useGlobalContext();
  let { name } = useParams();

  if (name) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  const crewArray = data?.crew?.filter((item) => item.role === name);

  if (crewArray !== undefined) {
    const crew = crewArray[0];

    return (
      <>
        <div>
          <h2>{crew?.role}</h2>
          <h3>{crew?.name}</h3>
          <p>{crew?.bio}</p>
          <CrewNavbar />
        </div>
        <div>
          <img src={crew?.image} alt={crew?.name} />
        </div>
      </>
    );
  }
};

export default CrewInnerPage;

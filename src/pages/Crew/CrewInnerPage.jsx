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
      <div
        className="flex flex-col md:flex-col-reverse 
      lg:flex-row-reverse justify-center items-center lg:gap-[10rem]"
      >
        <div className="flex flex-col md:flex-col-reverse">
          <div className="m-auto w-[50vw] max-w-[30rem] lg:max-w-[40rem]">
            <img className="w-full" src={crew?.image} alt={crew?.name} />
          </div>
          <CrewNavbar styles={"lg:hidden"} />
        </div>
        <div
          className="text-center m-auto max-w-[40rem]
         lg:m-0 lg:text-left flex flex-col"
        >
          <h3 className="text-slate-400 uppercase font lg:text-2xl">{crew?.role}</h3>
          <h3 className="mt-4 text-2xl uppercase font lg:text-6xl">{crew?.name}</h3>
          <p className="mt-10 text-slate-400 text-center px-5 lg:text-left lg:px-0">
            {crew?.bio}
          </p>
          <CrewNavbar styles={"max-lg:hidden self-start mt-28"} />
        </div>
      </div>
    );
  }
};

export default CrewInnerPage;

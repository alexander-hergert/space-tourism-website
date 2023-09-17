import React from "react";
import DestinationNavbar from "../../components/Destination/DestinationNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";
import ErrorPage from "../ErrorPage";

const DestinationInnerPage = () => {
  const { data } = useGlobalContext();
  let { name } = useParams();
  if (name) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  const factsArray = data?.destinations?.filter((item) => item.name === name);

  if (factsArray !== undefined) {
    const facts = factsArray[0];

    if (facts === undefined) {
      return <ErrorPage />;
    }

    return (
      <div className="lg:flex items-center justify-center lg:px-[10rem]">
        <div className="m-auto w-[50vw] max-w-[30rem] mt-10">
          <img className="w-full" src={facts?.image} alt={facts?.name} />
        </div>
        <div className="mt-10 text-slate-400 max-w-[30rem] px-5 m-auto">
          <DestinationNavbar />
          <h3 className="font text-8xl text-center mt-10 text-white uppercase lg:text-left">
            {facts?.name}
          </h3>
          <p className="mt-10 text-center px-5 lg:text-left lg:px-0">
            {facts?.description}
          </p>
          <div
            className="text-center uppercase mt-10 py-10 
          lg:flex items-center gap-10 lg:text-left lg:mt-0"
          >
            <div>
              <h4> Avg. distance</h4>
              <p className="text-white text-4xl">{facts?.distance}</p>
            </div>
            <div className="my-10">
              <h4>Est. travel time</h4>
              <p className="text-white text-4xl">{facts?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DestinationInnerPage;

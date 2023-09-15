import React from "react";
import DestinationNavbar from "../../components/Destination/DestinationNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";

const DestinationInnerPage = () => {
  const { data } = useGlobalContext();
  let { name } = useParams();
  if (name) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  const factsArray = data?.destinations?.filter((item) => item.name === name);

  if (factsArray !== undefined) {
    const facts = factsArray[0];

    return (
      <>
        <div className="m-auto w-[50vw] max-w-[30rem] mt-10">
          <img className="w-full" src={facts?.image} alt={facts?.name} />
        </div>
        <div className="mt-10 text-slate-400">
          <DestinationNavbar />
          <h3 className="font text-8xl text-center mt-10 text-white uppercase">
            {facts?.name}
          </h3>
          <p className="mt-10 text-center px-5">{facts?.description}</p>
          <div className="text-center uppercase mt-10 py-10">
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
      </>
    );
  }
};

export default DestinationInnerPage;

import React from "react";
import DestinationNavbar from "../../components/Destination/DestinationNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";
import ErrorPage from "../ErrorPage";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../animations";

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
        <div
          className="m-auto w-[50vw] lg:min-w-[30rem] max-w-[30rem] mt-10
         lg:mr-10 xl:mr-0"
        >
          <motion.img
            key={facts?.name}
            className="w-full"
            src={facts?.image}
            alt={facts?.name}
            initial={fadeLeft.hidden}
            animate={fadeLeft.visible}
          />
        </div>
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          className="mt-10 text-slate-400 max-w-[30rem] px-5 m-auto 
        lg:text-base xl:text-xl"
        >
          <DestinationNavbar />
          <h3
            className="font text-8xl text-center mt-10 text-white uppercase
           lg:text-left lg:text-4xl xl:text-8xl"
          >
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
              <p className="text-white text-4xl lg:text-base xl:text-4xl">
                {facts?.distance}
              </p>
            </div>
            <div className="my-10">
              <h4>Est. travel time</h4>
              <p className="text-white text-4xl lg:text-base xl:text-4xl">
                {facts?.travel}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
};

export default DestinationInnerPage;

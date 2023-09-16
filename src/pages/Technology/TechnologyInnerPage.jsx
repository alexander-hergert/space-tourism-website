import React, { useState, useEffect } from "react";
import TechnologyNavbar from "../../components/Technology/TechnologyNavbar";
import { useParams } from "react-router";
import { useGlobalContext } from "../../context";

const TechnologyInnerPage = () => {
  const { data } = useGlobalContext();
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  let { name } = useParams();
  if (name) {
    name = name[0].toUpperCase() + name.slice(1);
  }

  const techArray = data?.technology?.filter((item) => item.name === name);

  if (techArray !== undefined) {
    const tech = techArray[0];

    return (
      <>
        <div className="text-center">
          <TechnologyNavbar />
          <div className="m-auto max-w-[60rem] mt-10">
            {size < 1024 ? (
              <img
                className="w-full"
                src={tech?.image.landscape}
                alt={tech?.name}
              />
            ) : (
              <img
                className="w-full"
                src={tech?.image.portrait}
                alt={tech?.name}
              />
            )}
          </div>
          <h2 className="uppercase mt-10">The terminology...</h2>
          <h3 className="mt-4 mb-8 uppercase font text-2xl">{tech?.name}</h3>
          <p className="text-slate-400">{tech?.description}</p>
        </div>
      </>
    );
  }
};

export default TechnologyInnerPage;

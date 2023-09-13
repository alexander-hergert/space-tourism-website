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
    console.log(facts);
  }

  if (factsArray !== undefined) {
    const facts = factsArray[0];

    return (
      <>
        <div><img src={facts?.image} alt={facts?.name} /></div>
        <div>
          <DestinationNavbar />
          <h3>{facts?.name}</h3>
          <p>{facts?.description}</p>
          <div>
            <div>
              <h4>Some Fact</h4>
              <p>{facts?.someFact}</p>
            </div>
            <div>
              <h4>Another Fact</h4>
              <p>{facts?.anotherFact}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>Destination not found. {/* You can add error handling here */}</div>
    );
  }
};

export default DestinationInnerPage;

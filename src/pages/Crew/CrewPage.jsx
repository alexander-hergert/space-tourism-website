import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CrewPage = () => {
  return (
    <div>
      <div>
        <Link to={`crew1`}>To Crew Inner</Link>
      </div>
      <div>
        <Link to={`crew2`}>To Crew Inner</Link>
      </div>
      <div>
        <Link to={`crew3`}>To Crew Inner</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default CrewPage;

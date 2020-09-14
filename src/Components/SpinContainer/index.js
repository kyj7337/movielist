import React from "react";
import { loading } from "../../util/api";
import "./index.css";

const index = () => {
  return (
    <div className="spincontainer">
      <img className="spin-img" src={loading} alt="spin" />
    </div>
  );
};

export default index;

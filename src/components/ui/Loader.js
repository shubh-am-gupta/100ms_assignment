import React from "react";
import load from "../../assets/load.gif";

const Loader = () => {
  return (
    <img
      src={load}
      style={{ width: "150px", margin: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Loader;

import React from "react";
import "./style.css";

const Loader = ({ progress = true }) => {
  return (
    progress && (
      <div className="loading-container">
        <div className="loading"></div>
      </div>
    )
  );
};

export default Loader;

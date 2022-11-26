import React from "react";

const Loading = () => {
  return (
    <div className="loading-animation">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
      <p>Loading.....</p>
    </div>
  );
};

export default Loading;

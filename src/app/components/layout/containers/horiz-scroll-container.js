import React from "react";

const HorizScrollContainer = ({ children }) => {
  return <div className="no-scrollbar flex overflow-x-scroll">{children}</div>;
};

export default HorizScrollContainer;

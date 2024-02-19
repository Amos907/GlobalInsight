import React from "react";
import TopNav from "../page-header/top-nav";

const MainWrapper = ({ children }) => {
  return (
    <div className="lg:mx-40">
      <TopNav />
      <div>{children}</div>
    </div>
  );
};

export default MainWrapper;

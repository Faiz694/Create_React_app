import React from "react";
import Menu from "../components/Menu";
import CardContainer from "../components/CardContainer";
import GroupContainer from "./GroupContainer";

const Body = () => {
  return (
    <div className="container mx-auto xl:max-w-[1300px] sm:px-2">
      <Menu />
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] gap-10 lg:gap-20 justify-center">
        <CardContainer />
        <GroupContainer />
      </div>
    </div>
  );
};

export default Body;

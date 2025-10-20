import React from "react";
import Dashboard from "../components/Dashboard";
import clsx from "clsx";

const Dictionary = () => {
  return (
    <div
      className={clsx(
        "px-4 pb-[48px] pt-8",
        "md:px-8 md:pt-[80px]",
        "xl:px-[100px]",
      )}
    >
      <Dashboard />
    </div>
  );
};

export default Dictionary;

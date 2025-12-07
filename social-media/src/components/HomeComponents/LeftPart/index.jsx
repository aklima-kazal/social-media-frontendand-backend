import React from "react";
import LeftProfile from "./LeftProfile";
import LeftHomeData from "./LeftHomeData";
import { LeftData } from "./Data";

const LeftPart = () => {
  return (
    <>
      <div className=" hidden lg:block ">
        <LeftProfile />
        <div className="mt-10 w-4/5 mx-auto mb-10">
          {LeftData.map((data, index) => (
            <LeftHomeData key={index} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftPart;

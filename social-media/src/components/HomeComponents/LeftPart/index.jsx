import React from "react";
import LeftProfile from "./LeftProfile";
import { Friends } from "../../../svg/Friends";
import LeftHomeData from "./LeftHomeData";

const LeftPart = () => {
  return (
    <>
      <div className="">
        <LeftProfile />
        <div>
          <LeftHomeData />
        </div>
      </div>
    </>
  );
};

export default LeftPart;

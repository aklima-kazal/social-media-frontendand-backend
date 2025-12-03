import React from "react";
import { Outlet } from "react-router-dom";
import LeftPart from "../HomeComponents/LeftPart";
import Header from "../HomeComponents/HomePost/Header";
import RightHome from "../HomeComponents/RightPart";

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[1fr_3fr_1fr] mx-20 mt-8 gap-x-11">
        <div className="mb-40  p-3 ">
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div>
          <RightHome />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

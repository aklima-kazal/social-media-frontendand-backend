import React from "react";
import { Outlet } from "react-router-dom";
import LeftPart from "../HomeComponents/LeftPart";
import Header from "../HomeComponents/HomePost/Header";
import RightHome from "../HomeComponents/RightPart";

const RootLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[70px_1fr] xl:grid-cols-[1fr_3fr_1fr] mx-1 xl:mx-10 2xl:mx-20 mt-2 lg:mt-8 gap-x-0 lg:gap-x-11">
        <div className="mb-0 lg:mb-2 p-0 lg:p-3 ">
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div className="hidden xl:block">
          <RightHome />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

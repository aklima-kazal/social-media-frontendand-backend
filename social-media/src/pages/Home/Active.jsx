import React from "react";
import { PuffLoader } from "react-spinners";

const Active = ({ type, head, text, loading }) => {
  return (
    <>
      <div className="bg-blur h-screen w-full fixed top-0 left-0 z-20 flex items-center justify-center">
        <div className="bg-white_color w-[400px] p-4 text-center rounded-md shadow-lg">
          <h4
            className={`${
              type === "success" ? "text-green" : "text-red"
            }font-blinker font-semibold text-xl `}
          >
            {head}
          </h4>
          <h3 className="font-blinker font-normal text-base">{text}</h3>
          <PuffLoader
            className="m-auto mt-2"
            color="#21D997"
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default Active;

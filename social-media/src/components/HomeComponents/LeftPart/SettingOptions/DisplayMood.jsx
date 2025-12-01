import React from "react";
import { Moon } from "../../../../svg/Moon";

const DisplayMood = () => {
  return (
    <>
      <div className="">
        <h1 className="text-center text-lg font-blinker font-semibold">
          Display & Accessibility Settings
        </h1>
        <div className="flex gap-x-4 mb-4  cursor-pointer group mt-5">
          <div className="bg-hover_color rounded-full p-2 h-10 w-10 flex items-center justify-center ">
            <Moon />
          </div>

          <div className=" ">
            <h4 className="font-blinker font-semibold text-lg text-text_color">
              Dark Mood
            </h4>
            <p className="font-blinker font-normal text-base text-text_color ">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="font-blinker font-semibold text-base">on</label>
            <input type="radio" className="cursor-pointer" />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-blinker font-semibold text-base">off</label>
            <input type="radio" className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMood;

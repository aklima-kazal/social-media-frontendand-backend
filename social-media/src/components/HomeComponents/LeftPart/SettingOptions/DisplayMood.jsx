import React from "react";
import { Moon } from "../../../../svg/Moon";
import { BackIcon } from "../../../../svg/backIcon";

const DisplayMood = ({ setVisible }) => {
  return (
    <>
      <div className="w-[300px] rounded-md shadow-lg bg-page_color p-3">
        <div className="flex items-center gap-x-2 ">
          <div
            onClick={() => setVisible(false)}
            className=" cursor-pointer bg-hover_color rounded-full p-2 h-9 w-9 flex items-center justify-center "
          >
            <BackIcon />
          </div>
          <h1 className="text-center text-base lg:text-lg font-blinker font-semibold">
            Display & Accessibility Settings
          </h1>
        </div>
        <div className="flex gap-x-4 mb-4  cursor-pointer group mt-5">
          <div className="bg-hover_color rounded-full p-2 h-10 w-10 flex items-center justify-center ">
            <Moon />
          </div>

          <div className=" ">
            <h4 className="font-blinker font-semibold text-base lg:text-lg text-text_color">
              Dark Mood
            </h4>
            <p className="font-blinker font-normal text-sm lg:text-base text-text_color ">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="mt-4  ">
              <div className="flex items-center justify-between mb-3">
                <label
                  htmlFor="white"
                  className="font-blinker font-semibold text-base"
                >
                  on
                </label>
                <input
                  id="white"
                  type="radio"
                  name="darkMood"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="dark"
                  className="font-blinker font-semibold text-base"
                >
                  off
                </label>
                <input
                  id="dark"
                  name="darkMood"
                  type="radio"
                  className=" cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMood;

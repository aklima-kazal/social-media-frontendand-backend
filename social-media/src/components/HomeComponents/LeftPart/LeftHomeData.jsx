import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOptions";
import clickOutside from "../../../feature/function/click";

const LeftHomeData = ({ data }) => {
  const [showSettings, setShowSettings] = useState(false);
  const ClickOutside = useRef(null);
  const ItemIcon = data.icon;
  clickOutside(ClickOutside, () => {
    setShowSettings(false);
  });
  const SettingsSeperation = data.title === "Settings" && (
    <>
      <div className="relative mb-0 lg:mb-8">
        <div
          to={data.to}
          onClick={() => setShowSettings(true)}
          className={`flex mb-6 2xl:gap-x-4 items-center hover:bg-hover_color xl:px-2 2xl:px-3 2xl:py-4 rounded-xl group cursor-pointer ${
            showSettings && "bg-hover_color"
          }`}
        >
          <div className="group-hover:text-primary_color p-1 lg:p-2 xl:p-2 2xl:p-0">
            <ItemIcon />
          </div>
          <div className=" xl:block hidden">
            <h1 className="text-base 2xl:text-lg font-blinker font-semibold group-hover:text-primary_color text-text_color">
              {data.title}
            </h1>
          </div>
        </div>
        <div
          className="absolute top-16 xl:top-20 left-[-94px] -translate-x-2/4 lg:translate-x-0 lg:left-[20px] w-[240px] xl:w-[260px] shadow-lg bg-page_color rounded-lg mb-11"
          ref={ClickOutside}
        >
          {showSettings && <SettingOptions />}
        </div>
      </div>
    </>
  );
  return (
    <>
      {SettingsSeperation ? (
        SettingsSeperation
      ) : (
        <NavLink
          to={data.to}
          className="flex mb-6 2xl:mb-6 xl:mb-10 2xl:gap-x-4 items-center hover:bg-hover_color xl:px-2 2xl:px-3 2xl:py-4 rounded-xl group cursor-pointer"
        >
          <div className="group-hover:text-primary_color p-1 lg:p-2 xl:p-2 2xl:p-0">
            <ItemIcon />
          </div>
          <div className="xl:block hidden">
            <h1 className="text-base 2xl:text-lg font-blinker font-semibold group-hover:text-primary_color text-text_color">
              {data.title}
            </h1>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;

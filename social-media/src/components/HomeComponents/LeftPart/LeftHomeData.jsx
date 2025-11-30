import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOptions";

const LeftHomeData = ({ data }) => {
  const [showSettings, setShowSettings] = useState(false);
  const ItemIcon = data.icon;
  const SettingsSeperation = data.title === "Settings" && (
    <>
      <div className="relative mb-40">
        <div
          to={data.to}
          onClick={() => setShowSettings(true)}
          className="flex mb-6 gap-x-4 items-center hover:bg-hover_color px-6 py-4 rounded-xl group cursor-pointer"
        >
          <div className="group-hover:text-primary_color">
            <ItemIcon />
          </div>
          <div>
            <h1 className="text-lg font-blinker font-semibold group-hover:text-primary_color text-text_color">
              {data.title}
            </h1>
          </div>
        </div>
        <div className="absolute top-20 left-[20px] w-[200px] shadow-lg bg-page_color rounded-lg p-4 mb-11">
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
          className="flex mb-6 gap-x-4 items-center hover:bg-hover_color px-6 py-4 rounded-xl group cursor-pointer"
        >
          <div className="group-hover:text-primary_color">
            <ItemIcon />
          </div>
          <div>
            <h1 className="text-lg font-blinker font-semibold group-hover:text-primary_color text-text_color">
              {data.title}
            </h1>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;

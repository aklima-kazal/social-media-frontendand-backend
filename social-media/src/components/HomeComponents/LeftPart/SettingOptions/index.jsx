import React from "react";

const SettingOptions = () => {
  return (
    <>
      <div>
        <ul>
          <li className="flex gap-x-3 ">
            <div>icon</div>

            <div>
              <p className="font-blinker font-semibold text-base">Display</p>
            </div>
          </li>
          <li className="flex gap-x-3 ">
            <div>icon</div>
            <div>
              <p className="font-blinker font-semibold text-base">Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingOptions;

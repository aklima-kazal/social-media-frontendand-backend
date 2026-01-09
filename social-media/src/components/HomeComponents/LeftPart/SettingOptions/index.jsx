import React, { useState } from "react";
import { Logout } from "../../../../svg/Logout";
import { Moon } from "../../../../svg/Moon";
import DisplayMood from "./DisplayMood";
import { useDispatch } from "react-redux";
import { loggedOutUsers } from "../../../../feature/users/authSlice";
import { useNavigate } from "react-router-dom";

const SettingOptions = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (visible) {
    return <DisplayMood setVisible={setVisible} />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(loggedOutUsers());
    navigate("/login");
  };
  return (
    <>
      <div className="p-3">
        <ul>
          <li
            className="flex gap-x-2 mb-4 items-center cursor-pointer group"
            onClick={() => setVisible(true)}
          >
            <div className="bg-hover_color rounded-full p-2 h-10 w-10 flex items-center justify-center ">
              <Moon />
            </div>

            <div>
              <p className="font-blinker font-semibold text-sm lg:text-base group-hover:text-primary_bg px-2 py-1 rounded-md">
                Display & Accessability
              </p>
            </div>
          </li>
          <li
            onClick={handleLogout}
            className="flex gap-x-2 items-center cursor-pointer group"
          >
            <div className="bg-hover_color rounded-full p-2 h-10 w-10 flex items-center justify-center">
              <Logout />
            </div>
            <div>
              <p className="font-blinker font-semibold text-sm lg:text-base group-hover:text-primary_bg px-2 py-1 rounded-md">
                Logout
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SettingOptions;

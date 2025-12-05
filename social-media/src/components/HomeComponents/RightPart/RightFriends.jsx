import React from "react";
import { Link } from "react-router-dom";

const RightFriends = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-x-14">
          <h4 className="font-blinker font-medium">Friend Request</h4>
          <button>
            <Link
              to="/friends"
              rel="stylesheet"
              href=""
              className="font-blinker font-medium border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 hover:bg-black_color transition-all duration-300 hover:text-white_color"
            >
              See All
            </Link>
          </button>
        </div>
        <div className="flex mt-8 gap-x-1">
          <div className=" w-[48%]">
            <div className="flex items-center gap-x-1 mb-6">
              <div className="h-11 w-11 bg-primary_bg rounded-full flex items-center"></div>
              <div className="w-[68%]">
                <h4 className="font-blinker font-semibold text-sm text-text_color">
                  abdul
                </h4>
                <p className="font-blinker font-medium text-sm text-title_color">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
          <div className=" gap-x-2 flex w-[43%] items-center">
            <button className="px-3 py-1 bg-green rounded-full font-blinker font-medium text-sm">
              Accept
            </button>
            <button className="px-3 py-1 bg-red rounded-full font-blinker font-medium text-sm">
              Delete
            </button>
          </div>
        </div>
        {/* demo line */}
        <div className="flex mt-2 gap-x-1">
          <div className=" w-[48%]">
            <div className="flex items-center  gap-x-1 mb-6">
              <div className="h-11 w-11 bg-primary_bg rounded-full flex items-center"></div>
              <div className="w-[68%]">
                <h4 className="font-blinker font-semibold text-sm text-text_color">
                  abdul khan
                </h4>
                <p className="font-blinker font-medium text-sm text-title_color">
                  2 hours ago
                </p>
              </div>
            </div>
          </div>
          <div className=" gap-x-2 flex w-[43%] items-center ">
            <button className="px-3 py-1 bg-green rounded-full font-blinker font-medium text-sm">
              Accept
            </button>
            <button className="px-3 py-1 bg-red rounded-full font-blinker font-medium text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFriends;

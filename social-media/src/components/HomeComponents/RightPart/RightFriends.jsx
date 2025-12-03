import React from "react";
import { Link } from "react-router-dom";

const RightFriends = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-x-14">
          <h4>Friend Request</h4>
          <button>
            <Link
              to="/friends"
              rel="stylesheet"
              href=""
              className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 hover:bg-black_color transition-all duration-300 hover:text-white_color"
            >
              See All
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default RightFriends;

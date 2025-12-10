import React from "react";
import { Media } from "../../../../svg/Media";
import { LiveIcon } from "../../../../svg/Live";
import { CircleProfileIcon } from "../../../../svg/Circleprofile";

const AddPost = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-4 border border-hover_color py-2 px-4 rounded-md ">
        <span className="text-base text-text_color font-blinker font-semibold">
          Add Your Post
        </span>
        <div className="flex justify-center items-center gap-x-3">
          <div className="hover:bg-hover_color h-9 w-9 rounded-full  cursor-pointer">
            <Media className="" />
          </div>{" "}
          <div className="hover:bg-hover_color h-9 w-9 rounded-full  cursor-pointer">
            <LiveIcon className="" />
          </div>{" "}
          <div className="hover:bg-hover_color h-9 w-9 rounded-full  cursor-pointer">
            <CircleProfileIcon className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

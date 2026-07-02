import React, { use, useRef } from "react";
import Header from "./Header";
import { LiveIcon } from "../../../svg/Live";
import { Media } from "../../../svg/Media";
import ShowPost from "./showPost";

const HomePost = ({ setVisible, posts }) => {
  const removeFocus = useRef(null);
  removeFocus.current?.blur();
  const handleVisible = () => {
    setVisible(true);
  };
  return (
    <>
      <div className="bg-blur px-6 py-12 rounded-lg gap-x-2 shadow-lg">
        <div
          className="w-full rounded-full p-2 bg-white_color flex gap-x-4 items-center"
          onClick={handleVisible}
        >
          <div className="h-11 w-11 rounded-full bg-hover_color"></div>
          <input
            ref={removeFocus}
            type="text"
            className="p-2 outline-none rounded-lg w-[90%] "
            placeholder="Hello World"
          />
        </div>
        <div className="border-t-2 border-hover_color mt-4">
          <div className="flex gap-x-7 justify-around items-center mt-4">
            <div className="w-[33%] flex items-center justify-center gap-x-4">
              <LiveIcon />
              <p className="font-blinker font-medium text-base">Live Video</p>
            </div>
            <div className="w-[33%] flex items-center justify-center gap-x-4">
              <Media />
              <p className="font-blinker font-medium text-base">Images</p>
            </div>{" "}
            <div className="w-[33%] flex items-center justify-center gap-x-4">
              <LiveIcon />
              <p className="font-blinker font-medium text-base">Activities</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white_color rounded-lg shadow-lg">
        {posts?.map((item) => (
          <ShowPost key={item._id} post={item} />
        ))}
      </div>
    </>
  );
};

export default HomePost;

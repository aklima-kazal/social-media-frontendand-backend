import React, { useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPicker from "emoji-picker-react";
import Feeling from "../../../../svg/Feeling";

const CreatPostPopUp = () => {
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <>
      <div className="absolute bg-blur top-0 w-full h-screen z-50 flex justify-center items-center">
        <div className="w-2/5 bg-white_color p-5 rounded-md shadow-md ">
          <div className="relative border-b-2 border-hover_color mb-2">
            <h4 className=" text-center mb-2 font-bold font-blinker text-text_color text-lg ">
              Creat Post
            </h4>
            <div className="absolute -top-2 right-0 text-title_color cursor-pointer p-1 hover:bg-hover_color rounded-full">
              <CircleCloseIcon />
            </div>
          </div>
          <div className="flex gap-x-2 items-center mb-4">
            <div className="flex items-center gap-3  h-10 w-10 rounded-full overflow-hidden bg-title_color"></div>
            <h4 className="font-blinker font-light text-text_color text-lg ">
              what's on your mind,{" "}
              <span className="font-medium text-pink-100">User</span>?
            </h4>
          </div>
          <div>
            <textarea
              className="w-full min-h-24 font-blinker font-medium text-base text-secondary_bg  rounded-md p-2 resize-none outline-none"
              placeholder="Write something here..."
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-gradient-to-r from-cyan-100 to-purple-100 h-10 w-10 rounded-lg"></div>
            <div className="relative ">
              <div
                className="cursor-pointer"
                onClick={() => setPickerVisible((prev) => !prev)}
              >
                <Feeling />
              </div>
              {pickerVisible && (
                <div className="mt-2 absolute bottom-[30px] left-[-307px] cursor-pointer">
                  <EmojiPicker />
                </div>
              )}
            </div>
          </div>
          <div>
            <AddPost />
          </div>
          <div>
            <button className="w-full bg-hover_color text-black_color font-blinker font-semibold text-base px-4 py-2 rounded-md mt-4 hover:bg-black_color hover:text-white_color transition-all ease-linear duration-200">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatPostPopUp;

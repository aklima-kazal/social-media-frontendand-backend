import React, { useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImageViewer from "./ImageViewer";

const CreatPostPopUp = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);
  const [image, setImage] = useState([]);

  const textRef = useRef(null);

  return (
    <>
      <div className="absolute bg-blur top-0 w-full h-fit p-5 z-50 flex justify-center items-center ">
        <div className="w-[32%] h-fit bg-white_color p-3 rounded-md shadow-md ">
          <div className="relative border-b-2 border-hover_color mb-2">
            <h4 className=" text-center mb-2 font-bold font-blinker text-text_color text-lg ">
              Creat Post
            </h4>
            <div className="absolute -top-2 right-0 text-title_color cursor-pointer p-1 hover:bg-hover_color rounded-full">
              <CircleCloseIcon />
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="flex items-center gap-3  h-10 w-10 rounded-full overflow-hidden bg-title_color"></div>
            <h4 className="font-blinker font-light text-text_color text-lg ">
              what's on your mind,{" "}
              <span className="font-medium text-pink-100">User</span>?
            </h4>
          </div>
          {!show ? (
            <>
              <EmojiPickers text={text} setText={setText} textRef={textRef} />
              <div>
                <AddPost />
              </div>
            </>
          ) : (
            <>
              <ImageViewer
                text={text}
                setText={setText}
                textRef={textRef}
                image={image}
                setImage={setImage}
              />
              <div>
                <AddPost />
              </div>
            </>
          )}

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

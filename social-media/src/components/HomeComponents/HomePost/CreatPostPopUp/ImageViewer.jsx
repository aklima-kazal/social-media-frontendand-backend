import React, { use, useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { Media } from "../../../../svg/Media";

const ImageViewer = ({ text, setText, textRef, image }) => {
  const chooseFile = useRef(null);
  const handleImageUpload = () => {
    // Handle the uploaded files as needed
  };
  return (
    <>
      <EmojiPickers
        text={text}
        setText={setText}
        textRef={textRef}
        changePart
      />
      <div className="p-4 border border-hover_color rounded-md mt-4">
        <div className="bg-input_color p-2 h-[280px] w-full rounded-md  text-secondary_bg font-blinker font-medium text-base">
          <input
            type="file"
            multiple
            accept="image/jpeg, image/png, image.webp, image/gif"
            ref={chooseFile}
            onChange={handleImageUpload}
            className="hidden"
          />
          {image && image.length ? (
            ""
          ) : (
            <div className="flex relative items-center justify-center h-full ">
              <div className="absolute right-2 top-2 text-secondary_bg">
                <CircleCloseIcon />
              </div>
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => chooseFile.current.click()}
              >
                <div className="flex items-center text-white justify-center bg-primary_bg h-10 w-10 rounded-full">
                  <Media />
                </div>
                <span className="mt-2 font-blinker font-semibold text-base">
                  Add Your Photos
                </span>
                <p className="font-blinker font-semibold text-base">
                  or Drag and drop photos here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageViewer;

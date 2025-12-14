import React, { use, useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { Media } from "../../../../svg/Media";

const ImageViewer = ({ text, setText, textRef, image, setImage }) => {
  const chooseFile = useRef(null);
  const handleImageUpload = (e) => {
    const file = Array.from(e.target.files);
    file.forEach((img) => {
      if (
        img.type !== "image/jpeg" &&
        img.type !== "image/png" &&
        img.type !== "image/webp" &&
        img.type !== "image/gif"
      ) {
        console.log("s");
      }
      const readerFiles = new FileReader();
      readerFiles.readAsDataURL(img);
      readerFiles.onload = (renderImage) => {
        setImage(() => [...image, renderImage.target.result]);
      };
    });
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
            accept="image/jpeg, image/png, image/webp, image/gif"
            ref={chooseFile}
            onChange={handleImageUpload}
            className="hidden"
          />
          {image && image.length ? (
            <div className="overflow-hidden w-full h-full">
              {image.map((img, index) => (
                <div key={index} className="">
                  <img
                    src={img}
                    alt={`upload-${index}`}
                    className="w-full h-full object-cover overflow-hidden rounded-md"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex relative items-center justify-center h-full ">
              <div className="absolute right-2 top-2 text-secondary_bg cursor-pointer">
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
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageViewer;

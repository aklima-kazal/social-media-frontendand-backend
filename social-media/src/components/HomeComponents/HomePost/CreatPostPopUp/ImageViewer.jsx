import React, { use, useRef } from "react";
import EmojiPickers from "./EmojiPickers";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import { Media } from "../../../../svg/Media";
import { CrossIcon } from "../../../../svg/Cross";

const ImageViewer = ({ text, setText, textRef, image, setImage, setShow }) => {
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
        setImage((images) => [...images, renderImage.target.result]);
      };
    });
  };
  console.log(image);
  return (
    <>
      <EmojiPickers
        text={text}
        setText={setText}
        textRef={textRef}
        changePart
      />
      <div className="p-4 border border-hover_color rounded-md mt-4 ">
        <div className="bg-hover_color p-2 h-full w-full  rounded-md text-secondary_bg font-blinker font-medium text-base">
          <input
            type="file"
            multiple
            accept="image/jpeg, image/png, image/webp, image/gif"
            ref={chooseFile}
            onChange={handleImageUpload}
            className="hidden"
          />
          {image && image.length ? (
            <div className="relative">
              <div
                onClick={() => chooseFile.current.click()}
                className="absolute flex p-2 bg-main_bg rounded-md top-2 left-2 cursor-pointer hover:bg-hover_color gap-x-2"
              >
                <Media className="bg-main_bg" />
                <span>Add Image Or Videos</span>
              </div>
              <div
                onClick={() => setImage([])}
                className="absolute right-2 top-2 text-secondary_bg cursor-pointer z-50 bg-main_bg h-8 w-8 p-1 rounded-full hover:bg-hover_color flex items-center justify-center"
              >
                <CrossIcon />
              </div>
              <div
                className={`${
                  image.length === 1
                    ? "overflow-hidden w-full h-full "
                    : image.length === 2
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : image.length === 3
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2"
                    : image.length === 4
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2 "
                    : image.length >= 5
                    ? "overflow-hidden w-full h-full grid grid-cols-2 gap-2 "
                    : ""
                }`}
              >
                {image?.slice(0, 4).map((img, index) => (
                  <img
                    src={img}
                    alt="img"
                    className={`w-full h-full object-cover rounded-md ${
                      image.length === 3
                        ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3"
                        : image.length === 4 &&
                          "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"
                    }`}
                  />
                ))}
                {image.length >= 5 && (
                  <div className="absolute bottom-[60px] right-[85px] -translate-x-[50%] -translate-y-[50%] bg-main_bg h-8 w-8 rounded-full flex items-center justify-center">
                    <span className="font-blinker font-medium text-base">
                      +{image.length - 4}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex relative items-center justify-center h-[400px] z-50 ">
              <div
                onClick={() => setShow(false)}
                className="absolute right-2 top-2 text-secondary_bg cursor-pointer z-50"
              >
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

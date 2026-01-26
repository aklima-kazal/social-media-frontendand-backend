import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Feeling from "../../../../svg/Feeling";
import { postBackground } from "./postbackground";

const EmojiPickers = ({
  text,
  setText,
  textRef,
  changePart,
  background,
  setBackground,
}) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState("");
  const [showbg, setShowBg] = useState(false);
  const bgRef = useRef();

  const handleEmoji = ({ emoji }, e) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleBackground = (index) => {
    bgRef.current.style.backgroundImage = `url(${postBackground[index]})`;
    setBackground(postBackground[index]);
    bgRef.current.classList.add("bgPost");
    textRef.current.focus();
  };
  const removeBackground = () => {
    bgRef.current.style.backgroundImage = "";
    setBackground("");
    bgRef.current.classList.remove("bgPost");
    textRef.current.focus();
  };
  return (
    <div className={`${changePart ? "flex  justify-between " : "mt-2 "} `}>
      <div
        ref={bgRef}
        className={`${changePart ? "min-h-24 mb-4 w-full" : "h-48 mb-4"} `}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textRef}
          maxLength={100}
          className={` ${
            changePart
              ? "w-4/5 min-h-16 font-blinker font-medium text-base text-secondary_bg rounded-md p-2 resize-none outline-none"
              : "w-full font-blinker font-medium text-base text-secondary_bg  rounded-md p-2 resize-none outline-none  bg-transparent "
          } `}
          style={{
            paddingTop: `${
              background
                ? Math.abs(textRef.current.value.length * 0.1 - 25)
                : "0"
            }%`,
          }}
          placeholder="Write something here..."
        />
      </div>
      <div>
        {changePart && (
          <div className="relative ">
            <div
              className="cursor-pointer"
              onClick={() => setPickerVisible((prev) => !prev)}
            >
              <Feeling />
            </div>
            {pickerVisible && (
              <div className="flex items-center justify-between">
                <div className="absolute top-[35px] left-[-307px] cursor-pointer z-50">
                  <EmojiPicker onEmojiClick={handleEmoji} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {!changePart && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <div
              className="bg-gradient-to-r from-cyan-100 to-purple-100 h-10 w-10 rounded-lg cursor-pointer"
              onClick={() => setShowBg((prev) => !prev)}
            ></div>
            {showbg && (
              <>
                <div
                  onClick={() => removeBackground()}
                  className="bg-page_color border border-hover_color h-10 w-10 rounded-lg cursor-pointer"
                ></div>
                {postBackground.map((item, index) => (
                  <img
                    onClick={() => handleBackground(index)}
                    key={index}
                    src={item}
                    alt="postbg"
                    className="h-10 w-10 rounded-lg cursor-pointer"
                  />
                ))}
              </>
            )}
          </div>

          <div className="relative ">
            <div
              className="cursor-pointer"
              onClick={() => setPickerVisible((prev) => !prev)}
            >
              <Feeling />
            </div>
            {pickerVisible && (
              <div className="flex items-center justify-between">
                <div className="mt-2 absolute bottom-[30px] left-[-307px] cursor-pointer">
                  <EmojiPicker onEmojiClick={handleEmoji} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickers;

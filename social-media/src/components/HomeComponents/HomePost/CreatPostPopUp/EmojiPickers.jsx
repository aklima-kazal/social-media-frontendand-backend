import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Feeling from "../../../../svg/Feeling";

const EmojiPickers = ({ text, setText, textRef, changePart }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState("");

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
  return (
    <div className={`${changePart ? "flex  justify-between " : " "}`}>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textRef}
          className={`${
            changePart
              ? "w-[220%] min-h-16 font-blinker font-medium text-base text-secondary_bg  rounded-md p-2 resize-none outline-none"
              : "w-full min-h-24 font-blinker font-medium text-base text-secondary_bg  rounded-md p-2 resize-none outline-none"
          }`}
          placeholder="Write something here..."
        ></textarea>
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
          <div className="bg-gradient-to-r from-cyan-100 to-purple-100 h-10 w-10 rounded-lg"></div>
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

import React, { useEffect, useRef, useState } from "react";
import { SearchBar } from "../../../../svg/SearchBar";

const SearchBox = () => {
  const [showIcon, setShowIcon] = useState(true);
  const inputBox = useRef(null);

  useEffect(() => {
    inputBox.current.focus();
  }, []);
  return (
    <>
      <div className="max-w-[100vh] min-h-[70vh] shadow-lg bg-white_color p-7 rounded-lg ">
        <div className="flex items-center rounded-full border-primary_bg border px-6 py-3 shadow-lg gap-x-4">
          <div
            className="text-primary_bg"
            onClick={() => inputBox.current.focus()}
          >
            {showIcon && <SearchBar />}
          </div>
          <div className="flex items-center gap-x-2  ">
            <input
              ref={inputBox}
              type="text"
              placeholder="Search"
              className=" bg-white_color w-[130px] outline-none  "
              onFocus={() => setShowIcon(false)}
              onBlur={() => setShowIcon(true)}
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base font-blinker ">Recent Searches</p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;

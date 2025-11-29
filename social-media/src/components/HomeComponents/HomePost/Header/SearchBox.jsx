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
      <div className=" max-w-[100vh] min-h-[70vh] shadow-lg bg-page_color p-7 rounded-lg ">
        <div className="flex items-center  rounded-full border-input_color border px-6 py-3 shadow-lg gap-x-4">
          <div className="text-input_color">{showIcon && <SearchBar />}</div>
          <div className="flex items-center gap-x-2  ">
            <input
              ref={inputBox}
              type="text"
              placeholder="Search"
              className=" bg-page_color  outline-none  "
              onFocus={() => setShowIcon(false)}
              onBlur={() => setShowIcon(true)}
            />
            <div>d</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;

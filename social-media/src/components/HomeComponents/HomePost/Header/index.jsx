import React, { useState } from "react";
import { SearchBar } from "../../../../svg/SearchBar";
import SearchBox from "./SearchBox";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div>
          <h4 className="font-blinkerBold text-2xl text-black_color">Feeds</h4>
        </div>
        <div className="w-1/3 relative ">
          <div
            className="flex items-center  rounded-full border-input_color border px-8 py-3 shadow-lg gap-x-4"
            onClick={() => setShow(true)}
          >
            <div className="text-input_color">
              <SearchBar />
            </div>
            <div className="flex items-center gap-x-2  ">
              <input
                type="text"
                placeholder="Search"
                className="   outline-none  "
              />
            </div>
          </div>
          <div className="absolute top-[-30px] left-[-26px] ">
            {show && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

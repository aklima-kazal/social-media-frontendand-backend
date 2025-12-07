import React, { useRef, useState } from "react";
import { SearchBar } from "../../../../svg/SearchBar";
import SearchBox from "./SearchBox";
import clickOutside from "../../../../feature/function/click";
import { LeftData } from "../../LeftPart/Data";
import { Link } from "react-router-dom";
import LeftHomeData from "../../LeftPart/LeftHomeData";

const Header = () => {
  const [show, setShow] = useState(false);
  const OutSideClick = useRef(null);

  clickOutside(OutSideClick, () => {
    setShow(false);
  });
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div className="hidden lg:block">
          <h4 className="font-blinker text-2xl text-black_color">Feeds</h4>
        </div>
        <div className=" bg-cyan-100 rounded-full h-16 w-16 mx-0 lg:mx-auto block lg:hidden"></div>
        <div className="lg:hidden flex gap-x-1">
          {LeftData.map((data, index) => (
            <LeftHomeData key={index} data={data} />
          ))}
        </div>
        <div className="w-[16%] lg:w-[253px] relative ">
          <div
            className="ml-auto lg:ml-0 flex items-center justify-center h-11 w-11 lg:w-[235px] lg:h-auto rounded-full border-primary_bg border  lg:px-8 lg:py-3 shadow-lg gap-x-2 lg:gap-x-4"
            onClick={() => setShow(true)}
          >
            <div className="text-primary_bg" ref={OutSideClick}>
              <SearchBar />
            </div>
            <div className="hidden lg:block gap-x-2  ">
              <input
                type="text"
                placeholder="Search"
                className="w-[135px] outline-none  "
              />
            </div>
          </div>
          <div
            className="absolute top-[-30px] left-[-262px] lg:left-[-26px] right-0 z-50"
            ref={OutSideClick}
          >
            {show && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

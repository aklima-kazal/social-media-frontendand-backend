import React from "react";
import RightFriends from "./RightFriends";
import Stories from "./Stories";

const RightHome = () => {
  return (
    <>
      <div className=" hidden lg:block ">
        <div>
          <RightFriends />
        </div>
        <div>
          <Stories />
        </div>
      </div>
    </>
  );
};

export default RightHome;

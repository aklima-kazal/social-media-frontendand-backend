import React from "react";

const LeftProfile = () => {
  return (
    <>
      <div className=" bg-cyan-100 rounded-full h-20 xl:h-32 w-20 xl:w-32 mx-auto "></div>
      <div className="text-center mt-4">
        <h1 className="hidden xl:block font-blinker font-bold text-xl 2xl:text-2xl text-text_color">
          Aklima Akter Kazal
        </h1>
        <p className="hidden xl:block text-sm text-primary_bg font-blinker font-medium">
          example@gmail.com
        </p>
      </div>
    </>
  );
};

export default LeftProfile;

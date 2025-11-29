import React from "react";

const LeftHomeData = ({ data }) => {
  const ItemIcon = data.icon;
  return (
    <>
      <div className="flex mb-6 gap-x-4 items-center hover:bg-hover_color px-6 py-4 rounded-xl group cursor-pointer">
        <div className="group-hover:text-primary_color">
          <ItemIcon />
        </div>
        <div>
          <h1 className="text-lg font-blinkerMedium group-hover:text-primary_color text-text_color">
            {data.title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default LeftHomeData;

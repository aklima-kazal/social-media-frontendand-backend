import React from "react";

const LeftAuth = ({ title, description, icon }) => {
  return (
    <div>
      <div className="mt-14">{icon}</div>
      <h1 className="font-blinkerBold text-5xl 2xl:text-6xl 3xl:text-7xl text-primary_color mb-4">
        {title}
      </h1>
      <p className="font-blinkerMedium text-base xl:text-xl text-text_color">
        {description}
      </p>
    </div>
  );
};

export default LeftAuth;

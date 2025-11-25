import React from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr_3fr_1fr] mx-20">
        <div className="mt-9 bg-pink-100 p-2">
          <LeftPart />
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </>
  );
};

export default Home;

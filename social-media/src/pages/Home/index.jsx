import React from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";
import HomePost from "../../components/HomeComponents/HomePost";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr_3fr_1fr] mx-20 mt-8 gap-x-8">
        <div className="mb-40  p-3 ">
          <LeftPart />
        </div>
        <div>
          <HomePost />
        </div>
        <div>3</div>
      </div>
    </>
  );
};

export default Home;

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

      <div className=" mt-8 ">
        <div>
          <HomePost />
        </div>
      </div>
    </>
  );
};

export default Home;

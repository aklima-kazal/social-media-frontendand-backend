import React from "react";
import { Helmet } from "react-helmet-async";
import HomePost from "../../components/HomeComponents/HomePost";
import ReAuth from "../../components/reauth";
import { useSelector } from "react-redux";

const Home = () => {
  const { userinfo } = useSelector((state) => state.registration);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className=" mt-8 ">
        {userinfo.verified === false && <ReAuth userinfo={userinfo} />}
        <HomePost />
      </div>
    </>
  );
};

export default Home;

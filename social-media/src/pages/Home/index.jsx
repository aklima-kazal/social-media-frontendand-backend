import React from "react";
import { Helmet } from "react-helmet-async";
import HomePost from "../../components/HomeComponents/HomePost";
import ReAuth from "../../components/reauth";
import { useSelector } from "react-redux";

const Home = ({ setVisible, posts }) => {
  const { userinfo } = useSelector((state) => state.registration);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className=" mt-8 ">
        {userinfo.verified === false && <ReAuth userinfo={userinfo} />}
        <HomePost setVisible={setVisible} posts={posts} />
      </div>
    </>
  );
};

export default Home;

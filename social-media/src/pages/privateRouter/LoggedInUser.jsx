import React from "react";
import { useSelector } from "react-redux";
import Login from "../Login";
import { Outlet } from "react-router-dom";

const LoggedInUser = () => {
  const { userinfo } = useSelector((state) => state.registration);
  return userinfo ? <Outlet /> : <Login />;
};

export default LoggedInUser;

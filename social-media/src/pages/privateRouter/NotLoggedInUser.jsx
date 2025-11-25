import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotLoggedInUser = () => {
  const { userinfo } = useSelector((state) => state.registration);
  return userinfo ? <Navigate to="/" /> : <Outlet />;
};

export default NotLoggedInUser;

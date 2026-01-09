import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import HomePost from "../../components/HomeComponents/HomePost";
import Active from "./Active";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVerifiedUserMutation } from "../../feature/api/authApi";
import { loggedInUsers } from "../../feature/users/authSlice";

const ActivatePage = () => {
  const [verifiedUser] = useVerifiedUserMutation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { userinfo } = useSelector((state) => state.registration);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    activateUser();
  }, []);

  const activateUser = async () => {
    try {
      setLoading(true);
      const result = await verifiedUser({
        token,
        userToken: userinfo.token,
      }).unwrap("");
      setSuccess(result.message);
      setError("");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...userinfo, verified: true })
      );
      dispatch(loggedInUsers({ ...userinfo, verified: true }));
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      setError(error?.data?.message);
      setLoading(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {success && (
        <Active
          type="success"
          head="account activate succesfully"
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <Active
          type="error"
          head="account activate failed"
          text={error}
          loading={loading}
        />
      )}

      <HomePost />
    </>
  );
};

export default ActivatePage;

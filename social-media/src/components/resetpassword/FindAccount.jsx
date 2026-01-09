import React from "react";
import { Link } from "react-router-dom";
import { findUser } from "../../validation";
import { useFormik } from "formik";
import { useMatchUserMutation } from "../../feature/api/authApi";

const FindAccount = ({ setLoading, setError, setUser, error, setVisible }) => {
  const [matchUser] = useMatchUserMutation();
  const initialState = {
    email: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: findUser,
    onSubmit: () => {
      findUserResult();
    },
  });
  const findUserResult = async () => {
    try {
      setLoading(true);

      let result = await matchUser(formik.values.email).unwrap();
      setUser(result);
      setError("");
      setLoading(false);
      setVisible(1);
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  let { errors, touched } = formik;
  return (
    <>
      <div className="bg-white_color min-w-[400px] w-[500px] px-8 py-6 rounded-lg shadow-lg">
        <h1 className="border-b border-hover_color mb-2 pb-2 text-xl font-blinker font-bold text-center text-text_color">
          Find Your Account
        </h1>
        <p className="text-base mb-2 font-blinker font-medium text-center text-text_color">
          Please enter your email address to search for your account.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="email"
            type="email"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Enter email or phone number"
            className="w-full px-4 py-2 border border-hover_color rounded-md outline-none focus:outline-none "
          />
          {errors.email && touched.email && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {errors.email}
            </p>
          )}{" "}
          {error && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {error}
            </p>
          )}
          <div className="border-t border-hover_color mt-4 mb-4">
            <Link to="/login">
              <button
                type="button"
                className=" mt-4 px-6 py-2 bg-line_color text-primary_bg rounded-md font-blinker font-medium text-lg"
              >
                Cancle
              </button>
            </Link>
            <button
              onClick={findUserResult}
              type="submit"
              className="ml-4 mt-4 px-6 py-2 bg-purple-100 text-primary_bg rounded-md font-blinker font-medium text-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FindAccount;

import { useFormik } from "formik";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { newPassword } from "../../validation";
import { useChangePasswordMutation } from "../../feature/api/authApi";

const ChangePassword = ({
  user,
  error,
  setError,
  setSuccess,
  success,
  setLoading,
}) => {
  const Navigate = useNavigate();
  const [changePassword] = useChangePasswordMutation();
  const initialState = {
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: newPassword,
    onSubmit: () => {
      changePreviousPassword();
    },
  });

  const changePreviousPassword = async () => {
    try {
      setLoading(true);
      let result = await changePassword({
        email: user.email,
        password: formik.values.password,
      }).unwrap();
      setSuccess(result);
      setError("");
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  let { errors, touched } = formik;
  return (
    <>
      <div className="bg-white_color min-w-[400px] w-[500px] px-8 py-6 rounded-lg shadow-lg">
        <h1 className="border-b border-hover_color mb-2 pb-2 text-xl font-blinker font-bold text-center text-text_color">
          Change Password
        </h1>
        <p className="text-base mb-2 font-blinker font-medium text-center text-text_color">
          Change your password securely.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="password"
            type="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="enter your password"
            className="w-full px-4 py-2 border border-hover_color rounded-md outline-none focus:outline-none "
          />
          {errors.password && touched.password && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {errors.password}
            </p>
          )}
          {error && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green text-base mb-2 font-blinkerMedium ">
              {success}
            </p>
          )}
          <div className="border-t border-hover_color mt-4 mb-4">
            <Link to="/login">
              <button className=" mt-4 px-6 py-2 bg-line_color text-primary_bg rounded-md font-blinker font-medium text-lg">
                Cancle
              </button>
            </Link>
            <button
              type="submit"
              className="ml-4 mt-4 px-6 py-2 bg-purple-100 text-primary_bg rounded-md font-blinker font-medium text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;

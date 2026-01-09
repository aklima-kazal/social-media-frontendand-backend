import React from "react";
import { Link } from "react-router-dom";
import { userCode } from "../../validation";
import { useFormik } from "formik";
import { useVerifyCodeMutation } from "../../feature/api/authApi";

const SecretPassword = ({
  user,
  error,
  setError,
  setSuccess,
  success,
  setVisible,
  setLoading,
}) => {
  const [verifyCode] = useVerifyCodeMutation();

  const initialState = {
    code: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: userCode,
    onSubmit: () => {
      verifySecretCode();
    },
  });

  const verifySecretCode = async () => {
    try {
      setLoading(true);
      let result = await verifyCode({
        email: user.email,
        code: formik.values.code,
      }).unwrap();
      setSuccess(result?.message);
      setError("");
      setTimeout(() => {
        setVisible(3);
        setSuccess("");
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
          Code Verification
        </h1>
        <p className="text-base mb-2 font-blinker font-medium text-center text-text_color">
          Enter Your Code
        </p>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="code"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.code}
            onBlur={formik.handleBlur}
            placeholder="Enter Your Code"
            className="w-full px-4 py-2 border border-hover_color rounded-md outline-none focus:outline-none "
          />
          {errors.code && touched.code && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {errors.code}
            </p>
          )}

          {error && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 text-base mb-2 font-blinkerMedium ">
              {success}
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
              type="Submit"
              className="ml-4 mt-4 px-6 py-2 bg-purple-100 text-primary_bg rounded-md font-blinker font-medium text-lg"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecretPassword;

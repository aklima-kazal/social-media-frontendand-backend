import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../validation";
import { use, useState } from "react";
import DateOfBirth from "./DateOfBirth";
import Gender from "./Gender";
import { useAddUserMutation } from "../../feature/api/authApi";

const initialState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  bYear: new Date().getFullYear(),
  bMonth: new Date().getMonth() + 1,
  bDay: new Date().getDate(),
  gender: "",
};
const RegistrationForm = ({ toast }) => {
  const [ageError, setAgeError] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const registration = async () => {
    const signUpMutation = await addUser({
      fName: formik.values.fName,
      lName: formik.values.lName,
      email: formik.values.email,
      password: formik.values.password,
      bYear: formik.values.bYear,
      bMonth: formik.values.bMonth,
      bDay: formik.values.bDay,
      gender: formik.values.gender,
    });

    if (signUpMutation?.data) {
      toast.success(signUpMutation?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (signUpMutation?.error) {
      toast.error(signUpMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
      });
    }
    console.log();
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      const currentDate = new Date();
      const pickedDate = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      );
      const adult = new Date(1970 + 18, 0, 1);
      const tooOld = new Date(1970 + 70, 0, 1);

      if (currentDate - pickedDate < adult) {
        return setAgeError("Your age must be  18 years old");
      } else if (currentDate - pickedDate > tooOld) {
        return setAgeError("Your age must be less than 70 years old");
      }
      registration();
      formik.resetForm();
      setAgeError("");
    },
  });

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);
  const month = Array.from(new Array(12), (val, index) => 1 + index);
  const day = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };
  const getDates = Array.from(new Array(day()), (val, index) => 1 + index);

  const { errors, touched } = formik;

  return (
    <div className="sm:w-[80%] mx-auto lg:mx-0 md:w-[65%] lg:w-full rounded-md shadow-md p-4 md:px-10 md:py-11 border border-line_color">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formik.values.fName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="fName"
          className={
            errors.fName
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.fName && touched.fName && (
          <p className="text-red text-base mb-2 font-blinker font-medium">
            {errors.fName}
          </p>
        )}

        <input
          type="text"
          placeholder="Last Name"
          value={formik.values.lName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="lName"
          className={
            errors.lName
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.lName && touched.lName && (
          <p className="text-red text-base mb-2 font-blinker font-medium ">
            {errors.lName}
          </p>
        )}
        <input
          type="email"
          placeholder="Example@gmail.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="email"
          className={
            errors.email
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.email && touched.email && (
          <p className="text-red text-base mb-2 font-blinker font-medium">
            {errors.email}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          name="password"
          className={
            errors.password
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.password && touched.password && (
          <p className="text-red text-base mb-2 font-blinker font-medium">
            {errors.password}
          </p>
        )}

        <div className="mt-3 mb-4 ">
          <Gender formik={formik} errors={errors} touched={touched} />
          <DateOfBirth
            ageError={ageError}
            formik={formik}
            years={years}
            month={month}
            getDates={getDates}
          />
        </div>

        <div className="sm:flex items-center justify-between text-center mt-6 ">
          <button
            type="submit"
            className="px-6 py-2 bg-secondary_bg text-white_color rounded-full lg:mt-6 sm:mb-0 mb-6 font-blinker font-bold text-lg"
          >
            Submit
          </button>
          <p className="font-blinker font-medium text-text_color ">
            Already have an account?
            <Link
              to="/login"
              className="text-primary_color underline font-blinker font-normal"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

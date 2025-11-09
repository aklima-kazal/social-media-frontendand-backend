import { useFormik } from "formik";
import React, { use } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../validation";

const RegistrationForm = () => {
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

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signUp,
    onSubmit: () => {
      console.log("form data");
    },
  });

  const tempYears = new Date().getFullYear();
  const years = Array.from(new Array(105), (val, index) => tempYears - index);
  const month = Array.from(new Array(12), (val, index) => index + 1);
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
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.fName && touched.fName && (
          <p className="text-red text-base mb-2 font-blinkerMedium ">
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
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.lName && touched.lName && (
          <p className="text-red text-base mb-2 font-blinkerMedium ">
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
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.email && touched.email && (
          <p className="text-red text-base mb-2 font-blinkerMedium ">
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
              ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
              : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinkerMedium text-text_color bg-input_color focus:outline-none focus:border-line_color"
          }
        />
        {errors.password && touched.password && (
          <p className="text-red text-base mb-2 font-blinkerMedium ">
            {errors.password}
          </p>
        )}

        <div className="mt-3 mb-4 ">
          <input
            id="Male"
            type="radio"
            name="gender"
            value="male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          />
          <label htmlFor="Male" className="text-lg font-blinkerMedium ml-2">
            Male
          </label>

          <input
            id="Female"
            type="radio"
            name="gender"
            value="female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            className="ml-4"
          />
          <label htmlFor="Female" className="text-lg font-blinkerMedium ml-2">
            Female
          </label>
          {errors.gender && touched.gender && (
            <p className="text-red text-base mb-2 font-blinkerMedium ">
              {errors.gender}
            </p>
          )}
          <div className="flex gap-x-6 mt-4 ">
            <select className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinkerMedium text-lg w-[33%]">
              <option> Year</option>

              {years.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
            <select className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinkerMedium text-lg w-[33%]">
              <option> Month</option>

              {month?.map((month, index) => (
                <option key={index}>{month}</option>
              ))}
            </select>

            <select className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinkerMedium text-lg w-[33%]">
              <option> Day</option>
              {getDates?.map((date, index) => (
                <option key={index}>{date}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:flex items-center justify-between text-center mt-6 ">
          <button
            type="submit"
            className="px-6 py-2 bg-secondary_bg text-white_color rounded-full lg:mt-6 sm:mb-0 mb-6 font-blinkerBold text-lg"
          >
            Submit
          </button>
          <p className="font-blinkerMedium text-text_color ">
            Already have an account?
            <Link
              to="/login"
              className="text-primary_color underline font-blinkerNormal"
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

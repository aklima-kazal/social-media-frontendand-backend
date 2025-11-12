import React from "react";

const Gender = ({ formik, errors, touched }) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Gender;

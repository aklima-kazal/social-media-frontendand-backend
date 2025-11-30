import React from "react";

const DateOfBirth = ({ years, month, getDates, formik, ageError }) => {
  return (
    <>
      <div className="flex gap-x-6 mt-4 ">
        <select
          name="bYear"
          value={formik.values.bYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinker font-medium text-lg w-[33%]"
        >
          <option> Year</option>

          {years.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <select
          name="bMonth"
          value={formik.values.bMonth}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinker font-medium text-lg w-[33%]"
        >
          <option> Month</option>

          {month?.map((month, index) => (
            <option key={index}>{month}</option>
          ))}
        </select>

        <select
          name="bDay"
          value={formik.values.bDay}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          className="border border-line_color rounded-md p-2 bg-input_color text-text_color font-blinker font-medium text-lg w-[33%]"
        >
          <option> Day </option>
          {getDates?.map((date, index) => (
            <option key={index}>{date}</option>
          ))}
        </select>
      </div>
      {ageError && (
        <p className="text-red text-base mb-2 font-blinker font-medium mt-2 ">
          {ageError}
        </p>
      )}
    </>
  );
};

export default DateOfBirth;

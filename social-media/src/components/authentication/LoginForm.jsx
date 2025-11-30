import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../validation";
import { useLoggedInUserMutation } from "../../feature/api/authApi";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { loggedInUsers } from "../../feature/users/authSlice";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = ({ toast }) => {
  const [loggedInUser, { isLoading }] = useLoggedInUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = async () => {
    const loginMutation = await loggedInUser({
      email: formik.values.email,
      password: formik.values.password,
    });
    if (loginMutation?.error) {
      toast.error(loginMutation?.error?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "light",
      });
      return;
    }
    const { message, ...rest } = loginMutation?.data;
    localStorage.setItem("user", JSON.stringify(rest));
    dispatch(loggedInUsers(rest));

    navigate("/");
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signIn,
    onSubmit: () => {
      loginUser();
      formik.resetForm();
    },
  });

  const { errors, touched } = formik;
  return (
    <>
      <div className="sm:w-[80%] mx-auto lg:mx-0 md:w-[65%] lg:w-full rounded-md shadow-md p-4 md:px-10 md:py-11 border border-line_color">
        <form onSubmit={formik.handleSubmit}>
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
                ? "w-full  px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
                : "w-full mb-4 px-4 py-3 rounded-md border border-line_color font-blinker font-medium text-text_color bg-input_color focus:outline-none focus:border-line_color"
            }
          />
          {errors.password && touched.password && (
            <p className="text-red text-base mb-2 font-blinker font-medium">
              {errors.password}
            </p>
          )}

          <div className="sm:flex items-center justify-between text-center mt-6 ">
            {isLoading ? (
              <button
                disabled
                type="submit"
                className="px-6 py-2 bg-secondary_bg text-white_color rounded-full lg:mt-6 sm:mb-0 mb-6 font-blinker font-bold text-lg"
              >
                <BeatLoader color="#36d7b7" size={10} />
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-secondary_bg text-white_color rounded-full lg:mt-6 sm:mb-0 mb-6 font-blinker font-bold text-lg"
              >
                Login
              </button>
            )}

            <p className="font-blinker font-medium text-text_color ">
              Don't have an account?
              <Link
                to="/registration"
                className="text-primary_color underline font-blinker font-normal ml-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

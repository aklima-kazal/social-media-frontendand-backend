import React from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import LoginForm from "../../components/authentication/LoginForm";
import LeftAuth from "../../components/authentication/LeftAuth";
import { LoginIcon } from "../../svg/LoginIcon";

const Login = () => {
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative z-0">
        <div className="z-[-1] hidden lg:block absolute h-[500px] w-[500px] rounded-full bg-purple-100 top-[-230px] left-[-230px] "></div>
        <div className="flex justify-center items-center h-screen container gap-x-6 xl:gap-x-10">
          <div className="hidden lg:block w-[40%] xl:w-[45%]">
            <LeftAuth
              icon={<LoginIcon />}
              title="Login To Your Account"
              description="Welcome to the login page. Sign in to your account and start your journey with us. We are committed to making your experience easier, smoother, and more enjoyable. You can rely on us every step of the way. Become a valued member of our growing family."
            />
          </div>
          <div className="w-full lg:w-[45%] xl:w-[35%]">
            <LoginForm toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

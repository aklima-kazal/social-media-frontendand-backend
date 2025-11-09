import React from "react";
import LeftAuth from "../../components/authentication/LeftAuth";
import { RegistrationIcon } from "../../svg/RegistrationIcon";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="relative z-0">
        <div className="z-[-1] hidden lg:block absolute h-[500px] w-[500px] rounded-full bg-purple-100 top-[-230px] left-[-230px] "></div>
        <div className="flex justify-center items-center h-screen container gap-x-6 xl:gap-x-10">
          <div className="hidden lg:block w-[40%] xl:w-[45%]">
            <LeftAuth
              icon={<RegistrationIcon />}
              title="Start Your Journey"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet."
            />
          </div>
          <div className="w-full lg:w-[45%] xl:w-[35%]">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

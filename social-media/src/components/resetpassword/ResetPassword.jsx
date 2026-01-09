import React from "react";
import { Link } from "react-router-dom";
import { useSendCodeMutation } from "../../feature/api/authApi";

const ResetPassword = ({
  user,
  success,
  setSuccess,
  setError,
  error,
  setVisible,
  setLoading,
}) => {
  const [sendCode] = useSendCodeMutation();

  const handleSendCode = async () => {
    try {
      setLoading(false);
      let result = await sendCode(user.email).unwrap();
      setSuccess(result?.message);
      setError("");
      setTimeout(() => {
        setVisible(2);
        setSuccess("");
      }, 3000);
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <>
      <div className="bg-white_color min-w-[400px] w-[500px] px-8 py-6 rounded-lg shadow-lg">
        <h1 className="border-b border-hover_color mb-2 pb-2 text-xl font-blinker font-bold text-center text-text_color">
          Reset Your Password
        </h1>
        <p className="text-base mb-2 font-blinker font-medium text-center text-text_color">
          Please choose a method to reset your password.
        </p>
        <div className="flex items-center justify-center mt-4"></div>
        <div className="text-center">
          <div className=" mt-2 mb-4 bg-title_color p-2 rounded-full h-16 w-16 mx-auto">
            <img
              src={user?.profilePicture}
              alt="img"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <input type="radio" defaultChecked={true} />
          <span className=" ml-2 font-blinker font-medium text-text_color">
            {user?.email}
          </span>
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="mt-4 flex justify-center gap-4">
            <button className="shadow-md  px-6 py-2 bg-line_color text-primary_bg rounded-md font-blinker font-medium text-md">
              <Link to="/login" rel="stylesheet" href="">
                Not you?
              </Link>
            </button>{" "}
            <button
              onClick={handleSendCode}
              className="shadow-lg px-6 py-2 bg-single_color text-white rounded-md font-blinker font-medium text-md"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

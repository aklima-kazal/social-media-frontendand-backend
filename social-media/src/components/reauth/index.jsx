import React from "react";
import { useState } from "react";
import { useReVerificationMutation } from "../../feature/api/authApi";

const ReAuth = ({ userinfo }) => {
  const [reVerification] = useReVerificationMutation();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const resendCode = async () => {
    try {
      let result = await reVerification(userinfo.token);
      setSuccess(result.message);
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <>
      <div className="bg-white_color w-full mb-8 p-4 text-center rounded-md shadow-lg">
        <h4 className="font-blinker font-medium text-lg text-text_color">
          Please Re-Authenticate your account before accessing this page
        </h4>
        <button
          onClick={resendCode}
          className="font-blinker text-base font-bold text-blue hover:underline"
        >
          Click Here to Re-send your verification email
        </button>
        {success && (
          <p className="font-blinker text-sm text-green-600 mt-2">{success}</p>
        )}
        {error && (
          <p className="font-blinker text-sm text-red-600 mt-2">{error}</p>
        )}
      </div>
    </>
  );
};

export default ReAuth;

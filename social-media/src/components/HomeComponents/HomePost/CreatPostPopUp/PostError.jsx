import React from "react";

const PostError = ({ error, setError }) => {
  return (
    <div className="bg-blur postError h-full absolute top-0 left-0 z-20 flex justify-center items-center ">
      <div className="text-center">
        <p className="bg-red-500 text-red px-4 py-2 rounded-md mb-4 font-blinker text-lg font-medium">
          {error}
        </p>
        <button
          onClick={() => setError("")}
          className="bg-primary_bg text-white px-4 py-2 rounded-md font-blinker font-semibold"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default PostError;

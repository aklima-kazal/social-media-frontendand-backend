import React, { useRef } from "react";
import { Link } from "react-router-dom";
import avaterImage from "../../../../assets/defaultImage/avatar.png";
import { formatDistance } from "date-fns";
import { Dot } from "../../../../svg/Dots";

const ShowPost = ({ posts, post }) => {
  const removeFocus = useRef(null);
  removeFocus.current?.blur();
  const getTimeAgo = (value) => {
    try {
      if (!value) return "No date";

      const d = new Date(value);
      if (isNaN(d.getTime())) return "No date";

      const diffSeconds = (Date.now() - d.getTime()) / 1000;

      if (diffSeconds < 60) return "Just now";

      return formatDistance(d, new Date(), { addSuffix: true });
    } catch {
      return "No date";
    }
  };

  return (
    <>
      <div className="p-4 w-full mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3 w-2/4">
            <div>
              <Link to={`/profile/${post?.user?.username}`}>
                <img
                  src={post?.user?.profilePicture || avaterImage}
                  alt="user-pic"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </Link>
            </div>
            <div>
              <Link to={`/profile/${post?.user?.username}`}>
                <h1 className="font-blinker font-semibold text-base">
                  {post?.user?.username}
                </h1>
              </Link>
              <p className="font-blinker font-normal text-sm text-gray-500">
                {getTimeAgo(post?.createdAt, new Date(), { addSuffix: true })}
              </p>
            </div>
          </div>
          <div className="cursor-pointer text-blue hover:bg-hover_color rounded-full p-2">
            <Dot />
          </div>
        </div>
        {post?.background ? (
          <div
            className="h-72 w-full rounded-lg mt-4 flex items-center justify-center text-white_color font-blinker font-bold text-2xl"
            style={{
              backgroundImage: `url(${post?.background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ) : null}
      </div>
    </>
  );
};

export default ShowPost;

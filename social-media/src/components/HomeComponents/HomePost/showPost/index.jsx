import React from "react";
import { Link } from "react-router-dom";
import avaterImage from "../../../../assets/defaultImage/avatar.png";
import { formatDistance } from "date-fns";

const ShowPost = ({ post }) => {
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
                {formatDistance(new Date(post.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
          <div>ddddddd</div>
        </div>
      </div>
    </>
  );
};

export default ShowPost;

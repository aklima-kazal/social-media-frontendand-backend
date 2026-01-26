import React, { useRef, useState } from "react";
import { CircleCloseIcon } from "../../../../svg/CircleClose";
import AddPost from "./AddPost";
import EmojiPickers from "./EmojiPickers";
import ImageViewer from "./ImageViewer";
import clickOutside from "../../../../feature/function/click";
import { useCreatePostMutation } from "../../../../feature/api/authApi";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import PostError from "./PostError";
import dataURItoBlob from "../../../../../helpers/dataURItoBlob";

const CreatPostPopUp = ({ setVisible }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);
  const [background, setBackground] = useState("");
  const { userinfo } = useSelector((state) => state.registration);
  const [loading, setLoading] = useState(false);
  const [uploadImage] = useCreatePostMutation();

  const [error, setError] = useState("");
  const [createPost] = useCreatePostMutation();

  const textRef = useRef(null);
  const postPopup = useRef(null);

  clickOutside(postPopup, () => setVisible(false));

  const handlePostSubmission = async () => {
    try {
      let response;
      setLoading(true);
      if (background) {
        response = await createPost({
          type: null,
          images: null,
          text,
          background,
          user: userinfo.id,
          token: userinfo.token,
        }).unwrap();
      } else if (image && image.length) {
        const postImages = image.map((item) => dataURItoBlob(item));
        const path = `${userinfo.username}/post_images`;
        let formData = new FormData();
        formData.append("path", path);
        postImages.forEach((img) => {
          formData.append("file", img);
        });
        const responseImage = await uploadImage({
          formData,
          path,
          token: userinfo.token,
        }).unwrap();

        response = await createPost({
          type: null,
          images: responseImage,
          text,
          background: null,
          user: userinfo.id,
          token: userinfo.token,
        }).unwrap();
      } else if (text) {
        response = await createPost({
          type: null,
          images: responseImage,
          text,
          background: null,
          user: userinfo.id,
          token: userinfo.token,
        }).unwrap();
      } else {
        setError("Post cannot be empty");
        setLoading("");
        return;
      }
      if (response?.status === "success") {
        setLoading("");
        setText("");
        setBackground("");
        setVisible(false);
      }
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <>
      <div className="absolute bg-blur left-0 top-0 w-full min-h-screen z-20 flex justify-center items-center ">
        <div
          ref={postPopup}
          className="w-[35%] mb-6 bg-white_color mt-20 p-3 rounded-md shadow-md relative"
        >
          {error && <PostError error={error} setError={setError} />}
          <div className="relative border-b-2 border-hover_color mb-2">
            <h4 className=" text-center mb-2 font-bold font-blinker text-text_color text-lg ">
              Creat Post
            </h4>
            <div
              onClick={() => setVisible(false)}
              className="absolute -top-2 right-0 text-title_color cursor-pointer p-1 hover:bg-hover_color rounded-full"
            >
              <CircleCloseIcon />
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="flex items-center gap-3  h-10 w-10 rounded-full overflow-hidden bg-title_color"></div>
            <h4 className="font-blinker font-light text-text_color text-lg ">
              what's on your mind,{" "}
              <span className="font-medium text-pink-100">User</span>?
            </h4>
          </div>
          {!show ? (
            <>
              <EmojiPickers
                text={text}
                setText={setText}
                textRef={textRef}
                background={background}
                setBackground={setBackground}
              />
            </>
          ) : (
            <>
              <ImageViewer
                text={text}
                setText={setText}
                textRef={textRef}
                image={image}
                setImage={setImage}
                setShow={setShow}
                setError={setError}
              />
            </>
          )}
          <div>
            <AddPost setShow={setShow} show={show} />
          </div>

          <div>
            {text == "" && image.length == 0 ? (
              <button
                disabled
                className="w-full bg-hover_color text-black_color font-blinker font-semibold text-base px-4 py-2 rounded-md mt-4 "
              >
                Post
              </button>
            ) : loading ? (
              <button
                disabled={loading}
                className="w-full bg-hover_color text-black_color font-blinker font-semibold text-base px-4 py-2 rounded-md mt-4 hover:bg-black_color hover:text-white_color transition-all ease-linear duration-200"
              >
                <PulseLoader color="#5093f3" size={8} />
              </button>
            ) : (
              <button
                onClick={handlePostSubmission}
                className="w-full bg-hover_color text-black_color font-blinker font-semibold text-base px-4 py-2 rounded-md mt-4 hover:bg-black_color hover:text-white_color transition-all ease-linear duration-200"
              >
                Post
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatPostPopUp;

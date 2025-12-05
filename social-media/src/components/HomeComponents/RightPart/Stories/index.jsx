import React from "react";
import { StoriesData } from "./StoriesData";
import { Swiper, SwiperSlide } from "swiper/react";

const Stories = () => {
  return (
    <>
      <div>
        <h4 className="font-blinker font-semibold text-lg text-text_color">
          Stories
        </h4>
      </div>
      <div className="mt-4 w-[290px]">
        <Swiper spaceBetween={4} slidesPerView={3}>
          {StoriesData?.map((data, index) => (
            <SwiperSlide>
              <div
                key={index}
                style={{
                  backgroundImage: `url(${data.bgPicture})`,
                }}
                className="bg-cover bg-no-repeat bg-center w-[90px] h-[200px] rounded-md overflow-hidden"
              >
                <div>
                  <img
                    src={data.picture}
                    alt="profile"
                    className="h-10 w-10 rounded-full border-2 border-white_color m-2 overflow-hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Stories;

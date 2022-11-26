import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const AdvertiseItem = () => {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>

        -------------------------------------------------------------------------------
        <SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-100">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AdvertiseItem;

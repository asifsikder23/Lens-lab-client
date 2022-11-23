import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <div>
            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className="w-full" src="https://in.canon/media/image/2022/11/02/1da9f2e0cb6e412db4a276ea7b26a055_R6_Web_1920x750_Underwater_corporate.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="w-full" src="https://in.canon/media/image/2022/02/24/6863633815a0445ea1afd40fedcd7fe6_1920x750+%281%29.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src="https://asia.canon/media/image/2022/11/15/375831ddfcbe47a686ed1dd2e55fbbfb_R6Mark+II+-+corpsite+1920x750.jpg+%28v2%29.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src="https://in.canon/media/image/2022/06/16/a77cacb05a114bab95313ad5ba4ce467_R10-Web_1920x750.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-full" src="https://asia.canon/media/image/2022/05/27/28c6281c827d4557bb032dab0784dc69_R7-website-banner2.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
    );
};

export default Banner;
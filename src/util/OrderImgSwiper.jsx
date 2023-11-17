import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { styled } from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OrderImgSwiper = ({ imgListUrl }) => {
  console.log(imgListUrl);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        autoplay={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="swiper"
      >
        {imgListUrl &&
          imgListUrl.map((imgUrl) => (
            <SwiperSlide key={imgUrl.type}>
              <img
                src={imgUrl.imgUrl}
                alt="이미지"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default OrderImgSwiper;

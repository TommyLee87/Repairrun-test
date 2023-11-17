import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";

const LogoSlideStyle = styled.div`
  padding: 100px 0;
  .rrPtns {
    text-align: center;
    padding-bottom: 80px;
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .logo-slider {
    .swiper-wrapper {
      // 4. 부드러운 이동
      transition-timing-function: linear;
    }

    .slide {
      width: 100%;

      img {
        border: 1px solid var(--GREY);
        border-radius: 100%;
        width: 60%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
    .rrPtns {
      text-align: center;
      padding: 0;
      font-size: 1.5em;
    }
    .logo-slider {
      padding: 30px 0;
      .slide {
        width: 100%;

        img {
          border: 1px solid var(--GREY);
          border-radius: 100%;
          width: 70%;
        }
      }
    }
  }
`;

const LogoSlide = () => {
  const [urlList, setUrlList] = useState([]);
  useEffect(() => {
    const loadLogoData = async () => {
      try {
        const partnerLogoData = await PartnerApi.loadLogos();
        setUrlList(partnerLogoData);
      } catch (error) {
        console.error("Data Loading Error:", error);
      }
    };

    loadLogoData();
  }, []);

  return (
    <LogoSlideStyle>
      <div>
        <p className="rrPtns">리페어런과 함께하는 파트너들</p>
      </div>
      <Swiper
        className="logo-slider"
        // 1. Autoplay
        modules={[Autoplay]}
        loop={true} // loop : true 이면 무한롤링(지나간 부분이 뒤에 다시 붙음)
        autoplay={{
          delay: 0,
        }}
        // 2. 슬라이드당 로고 수 설정, 이동 속도 조절
        slidesPerView={7}
        speed={3000}
        // 3. 마우스 클릭 이벤트 방지
        allowTouchMove={false}
      >
        {urlList &&
          urlList.map((url, index) => (
            <SwiperSlide className="slide" key={index}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </LogoSlideStyle>
  );
};

export default LogoSlide;

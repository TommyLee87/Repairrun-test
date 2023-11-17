import React, { useState, useEffect } from "react";
import { SlideTitleComp } from "../style/SlideTitleStyle";
import LogoSlide from "../component/Slide";
import PartnerSelect from "../component/PartnerSelect";

export const SlideTitle = ({ onNext }) => {
  const [partnerMatching, setPartnerMatching] = useState(true);

  useEffect(() => {
    // 파트너 매칭 프로세스를 모의로 진행
    const matchingInterval = setInterval(() => {
      // 상태를 토글하여 true와 false 간 전환
      setPartnerMatching((prevMatching) => !prevMatching);
    }, 2000); // 간격을 밀리초로 설정

    // 3초 후에 PartnerSelect로 전환
    const timeout = setTimeout(() => {
      onNext(); // onNext 함수를 호출하여 다음 페이지로 전환
      clearInterval(matchingInterval); // Interval 해제
    }, 5000);

    // 컴포넌트가 언마운트되면 타이머 해제하여 메모리 누수 방지
    return () => {
      clearInterval(matchingInterval);
      clearTimeout(timeout);
    };
  }, [onNext]); // onNext가 변경될 때마다 useEffect가 다시 실행

  return (
    <SlideTitleComp>
      <div className="container">
        <div className="title">
          <h3>
            <span>파트너</span>를<span>매칭 중</span>입니다.
          </h3>
          <h3>잠시만 기다려 주세요.</h3>
        </div>
      </div>
      <LogoSlide />
    </SlideTitleComp>
  );
};

export default SlideTitle;

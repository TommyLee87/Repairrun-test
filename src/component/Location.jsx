import React, { useState, useEffect } from "react";
import { LocationComp } from "../style/LocationStyle";
import mapimg from "../images/metropolitan-area.jpg";
import OrderApi from "../api/OrderApi";

const Location = ({ onNext }) => {
  // 선택된 항목을 저장할 상태 추가
  const [selectedOption, setSelectedOption] = useState(null);

  // 버튼 클릭 시 선택된 항목 업데이트
  const handleItemClick = (item) => {
    setSelectedOption(item);
  };

  useEffect(() => {
    window.localStorage.setItem("selectedOption", selectedOption);
    window.localStorage.setItem("additionalText", "빠른 수선 부탁드립니다!");
  }, [selectedOption]);

  const fetchItem = async () => {
    try {
      const res = await OrderApi.getRepairItem(selectedOption);
      if (res.data !== null) {
        window.localStorage.setItem("selectedItem", res.data);
      }
      console.log("db에서 가져온 아이템:" + res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 다음 버튼 클릭 시 이동 및 선택된 항목 정보 전달
  const handleNextClick = (item) => {
    setSelectedOption(item);
    if (selectedOption) {
      onNext(selectedOption);
    }
    fetchItem();
  };

  return (
    <>
      <LocationComp>
        <div className="container">
          <div className="fastselect">
            <h3>빠른 수선 가능항목</h3>
            <div className="btnBox">
              <button
                className={selectedOption === "기장 수선" ? "selected" : ""}
                onClick={() => handleItemClick("기장 수선")}
              >
                <p>기장 수선</p>
              </button>
              <button
                className={selectedOption === "지퍼 수선" ? "selected" : ""}
                onClick={() => handleItemClick("지퍼 수선")}
              >
                <p>지퍼 수선</p>
              </button>
              <button
                className={selectedOption === "가방 클리닝" ? "selected" : ""}
                onClick={() => handleItemClick("가방 클리닝")}
              >
                <p>가방 클리닝</p>
              </button>
              <button
                className={selectedOption === "신발 클리닝" ? "selected" : ""}
                onClick={() => handleItemClick("신발 클리닝")}
              >
                <p>신발 클리닝</p>
              </button>
            </div>
            <h3>이용 가능한 지역</h3>
            <img src={mapimg} alt="서비스 가능한 지역" />
          </div>

          <div className="buttonContainer">
            <button disabled={!selectedOption} onClick={handleNextClick}>
              다음
            </button>
          </div>
        </div>
      </LocationComp>
    </>
  );
};

export default Location;

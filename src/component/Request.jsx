import React, { useState, useEffect } from "react";
import { RequestComp, RadioBox } from "../style/BasicStyle";
import { useNavigate } from "react-router-dom";
import OrderApi from "../api/OrderApi";

export const ItemSelect = ({ onNext }) => {
  const navigate = useNavigate();
  const [detailList, setDetailList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); // 선택된 라디오 버튼 값
  const [additionalText, setAdditionalText] = useState(""); // textarea의 입력값

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTextChange = (e) => {
    setAdditionalText(e.target.value);
  };
  const handleNextClick = () => {
    // 로컬 스토리지에 선택된 라디오 버튼 값과 텍스트 영역의 내용 저장
    window.localStorage.setItem("selectedOption", selectedOption);
    window.localStorage.setItem("additionalText", additionalText);

    //페이지 이동
    navigate("/neworder/generalstep");
  };
  // 라디오버튼과 textarea의 값이 들어가야 버튼이 들어감
  const isNextButtonEnabled = selectedOption !== "" && additionalText !== "";

  // 세부수선항목 받아오기 위한 부분
  const getDetail = async () => {
    const item = window.localStorage.getItem("selectedItem");
    try {
      const res = await OrderApi.getDetailItem(item);
      if (res.data !== null) setDetailList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <RequestComp>
        <div className="container">
          <div className="request">
            <div className="requestType">
              <h3>
                <span>요청사항</span>을 작성해주세요
              </h3>
              <div className="detailItem">
                <h3>수선 유형</h3>
                <RadioBox>
                  {detailList &&
                    detailList.map((item, index) => (
                      <div className="radioBtn" key={index}>
                        <label htmlFor={`item${index}`}>
                          <input
                            type="radio"
                            name="수선종류"
                            id={`item${index}`}
                            value={item}
                            checked={selectedOption === item}
                            onChange={handleOptionChange}
                          />
                          {item}
                        </label>
                      </div>
                    ))}
                </RadioBox>
              </div>
            </div>
            <div className="extraExplain">
              <h3>추가 설명</h3>
              <div className="example">
                <h4>이렇게 작성하면 좋아요!</h4>
                <p>가방 가죽에 스크래치가 났어요.</p>
              </div>
              <textarea
                type="text"
                placeholder="정확한 견적 확인을 위해 요청 사항을 자세하게 작성해 주세요."
                value={additionalText}
                onChange={handleTextChange}
              ></textarea>
            </div>
            <div className="buttonContainer">
              <button onClick={handleNextClick} disabled={!isNextButtonEnabled}>
                다음
              </button>
            </div>
          </div>
        </div>
      </RequestComp>
    </>
  );
};

export default ItemSelect;

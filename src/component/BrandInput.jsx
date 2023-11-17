import React, { useState } from "react";
import { BrandInputComp } from "../style/LocationStyle";
import { useNavigate } from "react-router-dom";

const Brandinput = ({ onNext }) => {
  const navigate = useNavigate();

  const nextPageClick = () => {
    navigate("/neworder/generalstep");
  };
  // 입력된 브랜드 값을 저장할 상태 추가
  const [brandInput, setBrandInput] = useState("");

  // const handleInputChange = (event) => {
  //   // input 값이 변경될 때마다 상태 업데이트
  //   setBrandInput(event.target.value);
  // };
  const handleInputChange = (event) => {
    // input 값이 변경될 때마다 상태 업데이트
    const inputValue = event.target.value;
    setBrandInput(inputValue);

    // 로컬 스토리지에 입력된 브랜드 값 저장
    localStorage.setItem("brandInput", inputValue);
  };

  return (
    <>
      <BrandInputComp>
        <div className="container">
          <div className="brandInput">
            <h3>
              <span>브랜드</span>를 입력해주세요.
            </h3>
            <input
              type="text"
              value={brandInput}
              onChange={handleInputChange}
            />
            <div className="buttonContainer">
              <button
                onClick={() => {
                  onNext ? onNext() : nextPageClick();
                }}
                disabled={!brandInput.trim()}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </BrandInputComp>
    </>
  );
};

export default Brandinput;

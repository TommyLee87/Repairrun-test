import React, { useState, useEffect } from "react";
import { PartnerSelectComp } from "../style/PartnerSelectStyle";
import OrderApi from "../api/OrderApi";

export const PartnerSelect = ({ onNext }) => {
  const [partnerData, setPartnerData] = useState([]);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const fetchPartnerData = async () => {
      const selDetail = window.localStorage.getItem("selectedOption");
      try {
        const response = await OrderApi.getPartnerList(selDetail);
        if (response.data !== null) setPartnerData(response.data);
      } catch (error) {
        console.error("파트너 데이터를 불러오는 동안 오류 발생:", error);
      }
    };

    fetchPartnerData();
  }, []); // 빈 의존성 배열은 효과가 한 번만 마운트될 때 실행되도록합니다.

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
    window.localStorage.setItem("ptnName", partner.ptnName);
    window.localStorage.setItem("repairPrice", partner.repairPrice);
    window.localStorage.setItem("repairDays", partner.repairDays);
    window.localStorage.setItem("ptnNum", partner.ptnNum);
    window.localStorage.setItem("ptnId", partner.ptnId);
  };

  return (
    <>
      <PartnerSelectComp>
        <div className="container">
          <div className="background">
            <div className="title">
              <h3>
                <span>파트너</span>를 선택해 보세요!
              </h3>
              <p>후기가 증명하는 최고의 파트너를 소개합니다.</p>
            </div>
            {/* partnerData && : 데이터가 있으면 실행, 없으면 오류가 남 null값은 오류남*/}
            {partnerData &&
              partnerData.map((partner) => (
                <div
                  className={`ptninfo ${
                    selectedPartner === partner ? "selected" : ""
                  }`}
                  key={partner.ptnName}
                  onClick={() => handlePartnerClick(partner)}
                >
                  <div className="selectPtn">
                    <img src={partner.ptnLogo} alt="logo" />
                  </div>
                  <div className="ratingBox">
                    <div className="ratingPtn">
                      <p>별점</p>
                      <div className="num">{partner.rating}</div>
                    </div>
                  </div>
                  <div className="itemBox">
                    <div className="info">
                      <p>파트너 : {partner.ptnName}</p>
                      <p>수선 항목 : {partner.repairItem}</p>
                    </div>
                  </div>
                  <div className="cost">
                    <div className="costArea">
                      <p>{partner.repairPrice}</p>
                    </div>
                  </div>
                </div>
              ))}

            <div className="buttonContainer">
              <button onClick={onNext}>결제하기</button>
            </div>
          </div>
        </div>
      </PartnerSelectComp>
    </>
  );
};

export default PartnerSelect;

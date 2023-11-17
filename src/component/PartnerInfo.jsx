import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";
import PartnerInfoComp from "../style/PartnerInfoStyle";
import { useNavigate } from "react-router-dom";

const PartnerInfo = ({ selPtn, loginType }) => {
  const navigate = useNavigate();
  console.log(loginType);
  const currId = window.localStorage.getItem("userId");
  const ptnId = loginType === "partner" ? currId : selPtn;
  // console.log("ptnId" + ptnId);
  // console.log("ptnId" + selPtn);
  const [ptnInfo, setPtnInfo] = useState(null);

  const getPartnerInfo = async () => {
    console.log("파트너 정보 불러와!");
    try {
      const res = await PartnerApi.partnerInfo(ptnId);
      if (res.data !== null) {
        setPtnInfo(res.data);
        window.localStorage.setItem("ptnName", res.data.userName);
        window.localStorage.setItem("ptnEmail", res.data.userEmail);
        window.localStorage.setItem("ptnPhone", res.data.userPhone);
        window.localStorage.setItem("ptnAddr", res.data.userAddr);
        window.localStorage.setItem("ptnImg", res.data.userImg);
        loginType === "partner" &&
          window.localStorage.setItem("ptnDesc", res.data.ptnDesc);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPartnerInfo();
    console.log(ptnInfo);
    console.log("로그인 타입!" + loginType);
    console.log("ptnId" + ptnId);
  }, []);
  return (
    <>
      <PartnerInfoComp>
        <div className="container">
          <div className="infoHeader">
            <h2>{ptnInfo && ptnInfo.userName}</h2>
            <div className="logo">
              <img src={ptnInfo && ptnInfo.userImg} alt="로고" />
            </div>
          </div>
          <div className="ptninfo">
            <div className="info-box">
              <p className="title">전화번호</p>
              <p>{ptnInfo && ptnInfo.userPhone}</p>
            </div>
            <div className="info-box">
              <p className="title">EMAIL</p>
              <p>{ptnInfo && ptnInfo.userEmail}</p>
            </div>
            <div className="info-box">
              <p className="title">소재지</p>
              <p>{ptnInfo && ptnInfo.userAddr}</p>
            </div>
            <div className="info-box">
              <p className="title">소개글</p>
              <p className="desc">{ptnInfo && ptnInfo.ptnDesc}</p>
            </div>
          </div>
          <div className="btnBox">
            {loginType === "partner" && (
              <button
                onClick={() => {
                  navigate(`/partnermain/updateInfo/${ptnId}`);
                }}
              >
                수정하기
              </button>
            )}
          </div>
        </div>
      </PartnerInfoComp>
    </>
  );
};
export default PartnerInfo;

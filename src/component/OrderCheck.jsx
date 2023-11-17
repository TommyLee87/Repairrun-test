import { OrderCheckComp } from "../style/OrderCheckStyle";

export const OrderCheck = ({ onNext }) => {
  const tempData = {
    item: window.localStorage.getItem("selectedItem"),
    brand: window.localStorage.getItem("brandInput"),
    request: window.localStorage.getItem("selectedOption"),
    extra: window.localStorage.getItem("additionalText"),
    fullImg: window.localStorage.getItem("fullImg"),
    detailImg1: window.localStorage.getItem("insideImg"),
    detailImg2: window.localStorage.getItem("sideImg"),
    detailImg3: window.localStorage.getItem("spotImg"),
  };
  return (
    <>
      <OrderCheckComp>
        <div className="container">
          <h3>
            <span>견적 요청서를</span> 확인해 주세요.
          </h3>
          <div className="orderContainer">
            <div className="itemBox">
              <p className="repairItem">품목</p>
              <p>{tempData.item}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">브랜드</p>
              <p>{tempData.brand}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">요청 사항</p>
              <p>{tempData.request}</p>
            </div>
            <div className="itemBox">
              <p className="repairItem">추가 설명</p>
              <p>{tempData.extra}</p>
            </div>
            <div className="itemBox">
              <div className="repairItemImg">
                <p>전체 사진</p>
                <div className="fullImg">
                  <img src={tempData.fullImg} alt="전체 이미지" />
                </div>
              </div>
            </div>
            <div className="itemBox">
              <div className="repairItemImg">
                <p>상세 사진</p>
                <div className="detailImgBox">
                  <div className="detailImg">
                    <img src={tempData.detailImg1} alt="상세 이미지1" />
                  </div>
                  <div className="detailImg">
                    {tempData.detailImg2 && (
                      <img src={tempData.detailImg2} alt="상세 이미지2" />
                    )}
                  </div>
                  <div className="detailImg">
                    {tempData.detailImg3 && (
                      <img src={tempData.detailImg3} alt="상세 이미지3" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={onNext}>견적요청서 보내기</button>
          </div>
        </div>
      </OrderCheckComp>
    </>
  );
};

export default OrderCheck;

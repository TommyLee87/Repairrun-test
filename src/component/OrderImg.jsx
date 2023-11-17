import OrderImgComp from "../style/OrderImgStyle";
import OrderImgSwiper from "../util/OrderImgSwiper";
import { useState } from "react";
import OrderApi from "../api/OrderApi";

const OrderImg = ({ orderInfo, setInfo }) => {
  const loginType = window.localStorage.getItem("loginStatus");
  const [selPrg, setSelPrg] = useState(orderInfo.orderPrg);
  const [isDisabled, setIsDisabled] = useState(true);

  const updatePrg = async () => {
    try {
      const res = await OrderApi.updateOrder(orderInfo.orderNum, selPrg);
      if (res.data === true) {
        setIsDisabled(true);
        setInfo();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <OrderImgComp>
        <div className="container">
          <div className="orderDetailBoder">
            <div className="orderDetailBox1">
              <h2>주문번호 : {orderInfo.orderNum}</h2>
              <div className="orderImgBorder">
                <div className="swiperWrapper">
                  <OrderImgSwiper imgListUrl={orderInfo.imgListUrl} />
                </div>
              </div>
            </div>
            <div className="orderDetailBox2">
              <div className="orderDetailComp">
                <p className="orderDetailTitle">회원 ID :</p>
                <p>{orderInfo.orderId}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">수선 품목 : </p>
                <p>{orderInfo.item}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">브랜드 : </p>
                <p>{orderInfo.brand}</p>
              </div>
              <div className="orderDetailComp">
                <p className="orderDetailTitle">요청 사항 : </p>
                <p>{orderInfo.detail}</p>
              </div>
              <div className="orderRequestComp">
                <p className="orderRequestTitle">추가 요청 사항 : </p>
              </div>
              <div className="orderRequestComp">
                <p className="requestText">{orderInfo.request}</p>
              </div>
              <div className="orderMoney">
                <p>{orderInfo.dDay}</p>
                <p>수선 금액 : {orderInfo.totalPrice}</p>
              </div>
            </div>
          </div>

          <div className="orderDetailBtn">
            <div className="orderRepair">
              <div className="repairProcess">
                <p>진행상황</p>
              </div>
              <div className="repairing">
                <select
                  defaultValue={selPrg}
                  disabled={isDisabled}
                  onChange={(e) => {
                    setSelPrg(e.target.value);
                  }}
                >
                  <option value="주문완료">주문완료</option>
                  <option value="거절">거절</option>
                  <option value="매칭">매칭</option>
                  <option value="수선중">수선중</option>
                  <option value="수선완료">수선완료</option>
                  <option value="배달중">배달중</option>
                  <option value="완료">완료</option>
                </select>
              </div>
              {loginType === "partner" &&
              isDisabled &&
              orderInfo.orderPrg !== "완료" ? (
                <button
                  onClick={() => {
                    setIsDisabled(false);
                  }}
                >
                  수정
                </button>
              ) : (
                loginType === "partner" &&
                orderInfo.orderPrg !== "완료" && (
                  <button
                    onClick={() => {
                      setIsDisabled(true);
                      updatePrg();
                    }}
                  >
                    완료
                  </button>
                )
              )}
            </div>
            <div className="chattingBtn">
              <button>주문채팅</button>
            </div>
          </div>
        </div>
      </OrderImgComp>
    </>
  );
};

export default OrderImg;

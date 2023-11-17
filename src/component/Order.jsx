import OrderImgSwiper from "../util/OrderImgSwiper";
import { useNavigate } from "react-router-dom";

const Order = ({ orderData }) => {
  const navigate = useNavigate();
  const loginType = window.localStorage.getItem("loginStatus");
  return (
    <>
      <div className="orderContainer">
        <div className="orderBoder">
          <div className="ordersecBorder1">
            <h3>주문번호 : {orderData.orderNumber}</h3>
            <div className="orderImgBorder">
              <div className="swiperWrapper">
                <OrderImgSwiper imgListUrl={orderData.imgListUrl} />
              </div>
            </div>
          </div>
          <div className="ordersecBorder2">
            <div className="orderComp">
              <p className="orderTitle">
                {loginType === "member" ? "파트너명" : "회원아이디"} :
              </p>
              <p>{orderData.name}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">수선품목 : </p>
              <p>{orderData.repairItem}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">요청사항 : </p>
              <p>{orderData.repairDetail}</p>
            </div>
            <div className="orderComp">
              <p className="orderTitle">수선요청날짜 : </p>
              <p>{orderData.requestDate}</p>
            </div>
          </div>
          <div className="orderBtn">
            <button
              onClick={() => {
                navigate(`/partnermain/orderinfo/${orderData.orderNumber}`);
              }}
            >
              자세히
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;

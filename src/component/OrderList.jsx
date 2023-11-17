import OrderListComp from "../style/OrderListStyle";
import Order from "./Order";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const OrderList = ({ loginType }) => {
  const [orderDataList, setOrderData] = useState([]);

  const bringOrderDataList = async () => {
    try {
      const id = window.localStorage.getItem("userId");
      const res = await PartnerApi.orderStatusList(loginType, id);
      if (res.data !== null) setOrderData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    bringOrderDataList();
  }, []);

  return (
    <>
      <OrderListComp>
        <div className="container">
          <div className="orderHeader">
            <h2>주문현황</h2>
            <div className="orderBox">
              <Swiper
                modules={[Navigation, Grid]}
                grid={{ rows: 3, fill: "row" }}
                navigation={true}
                className="outerSwiper"
              >
                {orderDataList &&
                  orderDataList.map((orderData) => (
                    <SwiperSlide key={orderData.orderNumber}>
                      <Order orderData={orderData} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </OrderListComp>
    </>
  );
};

export default OrderList;

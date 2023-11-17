// 주문 단계 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const OrderApi = {
  // 상세 항목 가져오기
  getDetailItem: async (item) => {
    const selectItem = {
      repairItem: item, //리액트와 연동
    };
    return await axios.post(BACKEND + "/order/detail", selectItem);
  },

  // 품목 가져오기
  getRepairItem: async (detail) => {
    const selectDetail = {
      detail: detail, //리액트와 연동
    };
    return await axios.post(BACKEND + "/order/item", selectDetail);
  },

  // 파트너 리스트 선택
  getPartnerList: async (detail) => {
    const selectPtn = {
      detail: detail,
    };
    return await axios.post(BACKEND + "/order/ptnlist", selectPtn);
  },

  // 결제 과정
  processPayment: async (id) => {
    const payment = {
      userId: id,
    };
    return await axios.post(BACKEND + "/order/payment", payment);
  },

  // 새 주문
  newOrder: async (
    orderNum,
    userId,
    ptnId,
    brand,
    repairDetail,
    request,
    priceTotal,
    days,
    imgFull,
    imgDet01,
    imgDet02,
    imgDet03
  ) => {
    const orderData = {
      orderNum: orderNum,
      userId: userId,
      ptnId: ptnId,
      brand: brand,
      repairDetail: repairDetail,
      request: request,
      priceTotal: priceTotal,
      days: days,
      imgFull: imgFull,
      imgDet01: imgDet01,
      imgDet02: imgDet02,
      imgDet03: imgDet03,
    };
    return await axios.post(BACKEND + "/order/neworder", orderData);
  },

  updateOrder: async (orderNum, selPrg) => {
    const updateInfo = {
      orderNum: orderNum,
      selPrg: selPrg,
    };
    return await axios.post(BACKEND + "/orderss/updateprg", updateInfo);
  },
};
export default OrderApi;

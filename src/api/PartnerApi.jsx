// 파트너 정보 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const PartnerApi = {
  //로그인
  partnerLogin: async (id, pw) => {
    console.log(BACKEND + "/partners/login");
    const login = {
      id: id,
      pw: pw,
    };
    return await axios.post(BACKEND + "/partners/login", login);
  },

  //파트너정보
  partnerInfo: async (ptnId) => {
    const ptnData = {
      ptnId: ptnId,
    };
    return await axios.post(BACKEND + "/partners/ptninfo", ptnData);
  },

  //로고 슬라이드 연결
  loadLogos: async () => {
    try {
      const response = await axios.post(BACKEND + "/partners/logolist");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  // 수선 항목
  itemlist: async (id) => {
    const ptnId = {
      id: id,
    };
    return await axios.post(BACKEND + "/partners/itemlist", ptnId);
  },

  //중복체크
  uniqueCheck: async (type, inputVal) => {
    const checkData = {
      type: type,
      inputVal: inputVal,
    };
    return await axios.post(BACKEND + "/partners/uniquecheck", checkData);
  },

  //파트너가입
  newPartner: async (
    id,
    pw,
    name,
    ptnEmail,
    ptnPhone,
    ptnAddr,
    ptnDesc,
    ptnLogo
  ) => {
    const newPtnData = {
      id: id,
      pw: pw,
      name: name,
      ptnEmail: ptnEmail,
      ptnPhone: ptnPhone,
      ptnAddr: ptnAddr,
      ptnDesc: ptnDesc,
      ptnLogo: ptnLogo,
    };
    return await axios.post(BACKEND + "/partners/new", newPtnData);
  },
  // 파트너 가입 시 수선 정보 입려
  newDetail: async (ptnId) => {
    const newPtn = {
      ptnId: ptnId,
    };
    return await axios.post(BACKEND + "/partners/insertitems", newPtn);
  },

  updateDetail: async (ptnId, repairDetail, days, price) => {
    const updateInfo = {
      ptnId: ptnId,
      repairDetail: repairDetail,
      days: days,
      price: price,
    };
    return await axios.post(BACKEND + "/partners/updatedetail", updateInfo);
  },

  // 파트너 정보 수정
  updateInfo: async (
    ptnId,
    ptnPw,
    ptnEmail,
    ptnPhone,
    ptnAddr,
    ptnImg,
    ptnDesc
  ) => {
    const updateList = {
      ptnId: ptnId,
      ptnPw: ptnPw,
      ptnEmail: ptnEmail,
      ptnPhone: ptnPhone,
      ptnAddr: ptnAddr,
      ptnImg: ptnImg,
      ptnDesc: ptnDesc,
    };
    return await axios.post(BACKEND + "/partners/updateinfo", updateList);
  },

  partnerList: async () => {
    return await axios.post(BACKEND + "/partners/ptnlist");
  },

  //임시 이동 예정
  orderStatusList: async (type, id) => {
    const userData = {
      type: type,
      id: id,
    };
    return await axios.post(BACKEND + "/orderss/orderlist", userData);
  },

  orderStatus: async (orderNum) => {
    const orderNumber = {
      orderNum: orderNum,
    };
    return await axios.post(BACKEND + "/orderss/order", orderNumber);
  },
};

export default PartnerApi;

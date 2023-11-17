// 회원 정보 관련 API
import axios from "axios";
const BACKEND = "http://localhost:8111";

const MemberApi = {
  //로그인
  memberLogin: async (id, pw) => {
    console.log(BACKEND + "/members/login");
    const login = {
      id: id,
      pw: pw,
    };
    return await axios.post(BACKEND + "/members/login", login);
  },

  //회원정보
  memberInfo: async (memberId) => {
    const memberData = {
      memberId: memberId,
    };
    return await axios.post(BACKEND + "/members/memberinfo", memberData);
  },

  //중복체크
  uniqueCheck: async (type, inputVal) => {
    const checkData = {
      type: type,
      inputVal: inputVal,
    };
    return await axios.post(BACKEND + "/members/uniquecheck", checkData);
  },

  //회원가입
  newMember: async (id, pw, name, userEmail, userPhone, userAddr, userImg) => {
    const newMemData = {
      id: id,
      pw: pw,
      name: name,
      userEmail: userEmail,
      userPhone: userPhone,
      userAddr: userAddr,
      userImg: userImg,
    };
    return await axios.post(BACKEND + "/members/new", newMemData);
  },

  updateInfo: async (
    userId,
    userPw,
    userEmail,
    userPhone,
    userAddr,
    userImg
  ) => {
    const updateList = {
      userId: userId,
      userPw: userPw,
      userEmail: userEmail,
      userPhone: userPhone,
      userAddr: userAddr,
      userImg: userImg,
    };
    return await axios.post(BACKEND + "/members/updateinfo", updateList);
  },
};
export default MemberApi;

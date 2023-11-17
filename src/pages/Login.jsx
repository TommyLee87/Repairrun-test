import LoginStyle from "../style/LoginStyle";
import Modal from "../util/Modal";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MemberApi from "../api/MemberApi";
import PartnerApi from "../api/PartnerApi";
import { UserContext } from "../context/UserStore";

const Login = () => {
  const context = useContext(UserContext);
  const { setLoginStatus, loginStatus } = context;
  const navigate = useNavigate();
  const isLogin = window.localStorage.getItem("loginStatus");

  const [loginType, setLoginType] = useState("member");
  const [memberActive, setMemberActive] = useState("active");
  const [partnerActive, setPartnerActive] = useState("");

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  //팝업 처리
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");

  useEffect(() => {
    console.log(isLogin);
    if (isLogin !== "") navigate(-1);
    console.log(loginType);
    console.log("id:" + inputId);
    console.log("pw:" + inputPw);
  }, [loginType, inputId, inputPw, loginStatus, modalMsg]);

  const onTypeClick = (type) => {
    switch (type) {
      case 1:
        //일반 회원 클릭
        setLoginType("member");
        setMemberActive("active");
        setPartnerActive("");
        resetInput();
        break;
      case 2:
        // 파트너 회원 클릭
        setLoginType("partner");
        setMemberActive("");
        setPartnerActive("active");
        resetInput();
        break;
      default:
    }
  };

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };
  const resetInput = () => {
    setInputId("");
    setInputPw("");
  };

  const onClickLogin = async () => {
    try {
      const res =
        loginType === "member"
          ? await MemberApi.memberLogin(inputId, inputPw)
          : await PartnerApi.partnerLogin(inputId, inputPw);
      console.log("res" + res);
      if (res.data === true) {
        window.localStorage.setItem("userId", inputId);
        window.localStorage.setItem("userPw", inputPw);
        loginType === "member"
          ? setLoginStatus("member")
          : setLoginStatus("partner");

        loginInfo();
        loginType === "partner" ? navigate("/partnermain") : navigate(-1);
      } else {
        setModalMsg("잘못된 아이디 또는 비밀번호 입니다.");
        setModalOpen(true);
      }
    } catch (err) {
      console.log("err");
      setModalOpen(true);
      setModalMsg("서버와의 연결이 끊어졌습니다!");
    }
  };

  const loginInfo = async () => {
    const res =
      loginType === "partner"
        ? await PartnerApi.partnerInfo(inputId)
        : await MemberApi.memberInfo(inputId);

    if (res.data !== null) {
      window.localStorage.setItem("userName", res.data.userName);
      window.localStorage.setItem("userEmail", res.data.userEmail);
      window.localStorage.setItem("userPhone", res.data.userPhone);
      window.localStorage.setItem("userAddr", res.data.userAddr);
      window.localStorage.setItem("userImg", res.data.userImg);
      loginType === "partner" &&
        window.localStorage.setItem("ptnDesc", res.data.ptnDesc);
    }
  };

  return (
    <>
      <LoginStyle>
        <div className="container">
          <div className="loginText">
            <h2>로그인</h2>
          </div>
          <div className="loginProcess">
            <div className="loginType">
              <button
                className={memberActive}
                onClick={(e) => {
                  e.preventDefault();
                  onTypeClick(1);
                }}
              >
                개인 회원 로그인
              </button>
              <button
                className={partnerActive}
                onClick={(e) => {
                  e.preventDefault();
                  onTypeClick(2);
                }}
              >
                파트너 로그인
              </button>
            </div>
            <div className="loginInput">
              <div className="idInput">
                <label htmlFor="userId">아이디</label>
                <input type="text" value={inputId} onChange={onChangeId} />
              </div>
              <div className="pwInput">
                <label htmlFor="userPw">비밀번호</label>
                <input type="password" value={inputPw} onChange={onChangePw} />
              </div>
            </div>
            <div>
              <button className="loginButton" onClick={onClickLogin}>
                로그인
              </button>
            </div>
            <div className="forgotbox">
              <div className="findId">
                아이디를 잊으셨나요?
                <button>아이디 찾기</button>
              </div>
              <div className="findPw">
                비밀번호를 잊으셨나요?
                <button>비밀번호 찾기</button>
              </div>
            </div>
          </div>
          <div className="noJoin">
            <div className="noMember">
              아직 리페어런의 회원이 아니신가요?
              <button
                onClick={() => {
                  navigate("/join/member");
                }}
              >
                일반회원 가입
              </button>
            </div>
            <div className="noPartner">
              리페어런의 파트너가 되길 원하시나요?
              <button
                onClick={() => {
                  navigate("/join/partner");
                }}
              >
                파트너 가입
              </button>
            </div>
          </div>
        </div>
      </LoginStyle>
      <Modal
        open={openModal}
        close={closeModal}
        header="로그인 실패"
        children={modalMsg}
      >
        {/* 잘못된 아이디 또는 비밀번호 입니다. */}
      </Modal>
    </>
  );
};

export default Login;

import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../api/firebase";
import DaumPostPopup from "../api/DaumPost";
import basicProfile from "../images/기본프로필.jpg";
import Modal from "../util/Modal";
import MemberApi from "../api/MemberApi";
import PartnerApi from "../api/PartnerApi";
import { UserContext } from "../context/UserStore";
import UpdateInfoStyle from "../style/UpdateInfoStyle";

const UpdateInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;
  const status = loginStatus;
  const userId = window.localStorage.getItem("userId");
  const userName = window.localStorage.getItem("userName");
  const userImg = window.localStorage.getItem("userImg");
  const userPhone = window.localStorage.getItem("userPhone");
  const userEmail = window.localStorage.getItem("userEmail");
  const userAddr = window.localStorage.getItem("userAddr");
  const originImg = userImg !== null ? userImg : basicProfile;
  console.log(status);

  const userPw = window.localStorage.getItem("userPw");

  //프로필이미지
  const [imgSrc, setImgSrc] = useState(originImg);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(originImg);

  //키보드 입력
  const [inputPhone, setInputPhone] = useState(userPhone);
  const [inputEmail, setInputEmail] = useState(userEmail);
  const [inputAddr, setInputAddr] = useState(userAddr);
  //파트너만
  const [inputDesc, setInputDesc] = useState(
    window.localStorage.getItem("ptnDesc")
  );

  // 오류 메세
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  // 파트너만
  const [descMessage, setDescMessage] = useState("");

  // 유효성 검사
  const [isPw, setIsPw] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isAddr, setIsAddr] = useState(true);
  const [isDesc, setIsDesc] = useState(true);

  // 비밀번호 관련 useState
  //키보드 입력
  const [inputOriginPw, setInputOriginPw] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPw2, setInputPw2] = useState("");
  // 기존 비밀번호가 확인이 되어야 false
  const [isDisable, setIsDisable] = useState(true);

  // 오류메세지 관리
  const [pwMessage, setPwMessage] = useState("");
  const [pwMessage2, setPwMessage2] = useState("");
  const [pwMessage3, setPwMessage3] = useState("");

  //팝업 처리
  const [openModal, setModalOpen] = useState(false);
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  //주소 팝업
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const openPostCode = () => {
    setIsPopUpOpen(true);
  };
  const closePostCode = () => {
    setIsPopUpOpen(false);
  };

  const setAddr = (addr) => {
    setInputAddr(addr);
    setIsAddr(true);
  };

  //입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    // 파이어베이스에 보내기위해 변수에 저장
    setFile(e.target.files[0]);
    console.log(imgSrc);
  };

  const regexList = [
    //pw
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_#^*?])[A-Za-z\d@$!%_#^*?]{12,15}$/,
    //phone
    /^\d{3}-\d{4}-\d{4}$/,
    //email
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    //ptnPhone
    /^\d{2,3}-\d{3,4}-\d{4}$/,
  ];

  useEffect(() => {
    if (loginStatus === "") navigate("/login");

    console.log(inputPw);
    console.log();
    // 비밀번호 입력을 다 지우면
    if (inputOriginPw.length === 0) {
      setPwMessage("");
      setIsPw(true);
    } else if (inputOriginPw !== userPw && inputOriginPw.length > 0) {
      setPwMessage("기존 비밀번호와 일치 하지 않습니다");
    } else if (inputOriginPw === userPw) {
      setPwMessage("기존 비밀번호와 일치 합니다");
      setIsDisable(false);
      setIsPw(false);
    }
    // 다시 입력한 비밀번호와 일치 하지 않는 경우
    console.log(inputPw2);
    if (inputPw2 !== userPw && inputPw2.length > 0) {
      setPwMessage3("입력한 비밀번호와 일치 하지 않습니다");
      console.log("입력된 pw" + inputPw);
      setIsPw(false);
    }

    // 다시 입력한 비밀번호와 일치 하는 경우
    console.log(inputPw === inputPw2);
    if (inputPw === inputPw2) {
      setPwMessage3("일치합니다");
      setIsPw(true);
    }

    if (inputPw2.length === 0) {
      setPwMessage3("다시 한 번 입력 하세요");
      setIsPw(false);
    }

    // 새 비밀번호 입력 다 지우면
    if (inputPw.length === 0) {
      setPwMessage2("");
      setPwMessage3("");
      setIsPw(true);
    }

    if (inputPhone.length === 0) {
      setPhoneMessage("");
      setIsPhone(true);
    }

    if (inputEmail.length === 0) {
      setEmailMessage("");
      setIsEmail(true);
    }

    console.log("isPw" + isPw);
    console.log("isDesc" + isDesc);
  }, [
    inputOriginPw,
    inputPw,
    isDisable,
    inputPw2,
    inputDesc,
    inputPhone,
    inputEmail,
    inputAddr,
    isPw,
    isDesc,
    isPhone,
    isEmail,
    isAddr,
    url,
  ]);
  const onChangeInput = (e, num) => {
    switch (num) {
      case 1:
        const currOriginPw = e.target.value;
        setInputOriginPw(currOriginPw);
        break;
      case 2:
        const currPw = e.target.value;
        setInputPw(currPw);
        if (!regexList[0].test(currPw)) {
          setPwMessage2(
            "대소문자, 숫자, 특수기호 포함 12자 이상 15자 이하로 입력 하세요"
          );
          setPwMessage3("");
        } else {
          setPwMessage2("사용 가능합니다");
          setPwMessage3("다시 한 번 입력하세요");
        }
        setIsPw(false);
        break;
      case 3:
        const currPw2 = e.target.value;
        setInputPw2(currPw2);
        break;
      case 4:
        const currPhone = e.target.value;
        setInputPhone(currPhone);
        const regex = status === "member" ? regexList[1] : regexList[3];
        if (!regex.test(currPhone)) {
          setPhoneMessage("잘못 입력 하셨습니다.");
          setIsPhone(false);
        } else {
          setPhoneMessage("중복확인을 해주세요");
          setIsPhone(false);
        }
        break;
      case 5:
        const currEmail = e.target.value;
        setInputEmail(currEmail);
        if (!regexList[2].test(currEmail)) {
          setEmailMessage("잘못 된 형식입니다.");
          setIsEmail(false);
        } else {
          setEmailMessage("중복확인을 해주세요");
          setIsEmail(false);
        }
        break;
      case 6:
        const currDesc = e.target.value;
        setInputDesc(currDesc);
        console.log(currDesc);
        if (currDesc.length > 100) {
          setDescMessage("100자 이하로 입력해주세요");
          setIsDesc(false);
        } else {
          setIsDesc(true);
          setDescMessage("");
        }
        break;
      default:
    }
  };

  // 중복확인 필요
  const checkUnique = async (num) => {
    const checkVal = ["", inputPhone, inputEmail];
    const msgList = ["", setPhoneMessage, setEmailMessage];
    const validList = ["", setIsPhone, setIsEmail];
    try {
      const res =
        status === "member"
          ? await MemberApi.uniqueCheck(num, checkVal[num])
          : await PartnerApi.uniqueCheck(num, checkVal[num]);
      console.log("res" + res);
      if (res.data === false) {
        msgList[num]("사용 가능합니다");
        validList[num](true);
      } else {
        msgList[num]("이미 사용중입니다");
        validList[num](false);
      }
    } catch (err) {
      console.log("err");
      setModalOpen(true);
      setModalHeader("오류");
      setModalType("");
      setModalMsg("서버와의 연결이 끊어졌습니다!");
    }
  };
  const onSubmit = () => {
    if (imgSrc !== originImg) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setUrl(url);
          updateInfo();
        });
      });
    } else {
      imgSrc === originImg && setUrl(originImg);
      updateInfo();
    }
  };
  const updateInfo = async () => {
    const chPw = inputPw.length === 0 ? userPw : inputPw;
    const chPhone = inputPhone.length === 0 ? userPhone : inputPhone;
    const chEmail = inputEmail.length === 0 ? userEmail : inputEmail;
    const chAddr = inputAddr.length === 0 ? userAddr : inputAddr;

    try {
      const res =
        status === "member"
          ? await MemberApi.updateInfo(
              userId,
              chPw,
              chEmail,
              chPhone,
              chAddr,
              url
            )
          : await PartnerApi.updateInfo(
              userId,
              chPw,
              chEmail,
              chPhone,
              chAddr,
              url,
              inputDesc
            );
      if (res.data === true) {
        console.log("수정 성공!");
        setModalOpen(true);
        setModalHeader("정보 수정 성공");
        setModalMsg("정보수정에 성공했습니다!");
        setModalType("성공");
      }
    } catch (err) {
      console.log(err);
      setModalOpen(true);
      setModalHeader("오류");
      setModalMsg("서버와의 연결이 끊어졌습니다!");
      setModalType("");
    }
  };

  return (
    <>
      <UpdateInfoStyle>
        <div className="container">
          <h2>{status === "member" ? "회원" : "파트너"}정보 수정</h2>
          <div className="profile">
            <div className="imgBox">
              <img src={imgSrc} alt="프로필이미지" />
            </div>
            <input type="file" onChange={(e) => handleFileInputChange(e)} />
          </div>
          <div className="wrapper">
            <div className="inputArea">
              <label className="name">
                <span>{status === "member" ? "이름" : "파트너명"}</span>
                <div className="box">
                  <input
                    className="fixed"
                    type="text"
                    disabled
                    value={userName}
                  />
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="userId">
                <span>아이디</span>
                <div className="box">
                  <input
                    className="fixed"
                    type="text"
                    disabled
                    value={userId}
                  />
                </div>
              </label>
            </div>
            <div className="inputArea pwArea">
              <label name="userPw">
                <span>비밀번호</span>
                <div className="box">
                  <input
                    type="password"
                    placeholder="기존 비밀번호 입력"
                    defaultValue={inputOriginPw}
                    disabled={isDisable ? false : true}
                    onChange={(e) => onChangeInput(e, 1)}
                  />
                  <p className={`check ${isDisable ? "fail" : "pass"}`}>
                    {pwMessage}
                  </p>
                </div>
              </label>
              <div className="inputbox">
                <div className="pwWrap">
                  <input
                    type="password"
                    disabled={isDisable}
                    onChange={(e) => onChangeInput(e, 2)}
                  />
                  <p
                    className={`check ${
                      !regexList[0].test(inputPw) ? "fail" : "pass"
                    }`}
                  >
                    {pwMessage2}
                  </p>
                </div>
                <div className="pwWrap">
                  <input
                    type="password"
                    disabled={isDisable}
                    onChange={(e) => onChangeInput(e, 3)}
                  />
                  <p className={`check ${isPw ? "pass" : "fail"}`}>
                    {pwMessage3}
                  </p>
                </div>
              </div>
            </div>
            <div className="inputArea">
              <label name="phone">
                <span>전화번호</span>
                <div className="box">
                  <input
                    type="text"
                    placeholder="'-' 포함 입력하세요"
                    onChange={(e) => onChangeInput(e, 4)}
                    defaultValue={inputPhone}
                  />
                  {inputPhone.length > 0 && (
                    <p className={`check ${isPhone ? "pass" : "fail"}`}>
                      {phoneMessage}
                    </p>
                  )}
                </div>
                {regexList[1].test(inputPhone) ||
                (status === "partner" && regexList[3].test(inputPhone)) ? (
                  <button className="active" onClick={() => checkUnique(1)}>
                    중복확인
                  </button>
                ) : (
                  <button>중복확인</button>
                )}
              </label>
            </div>
            <div className="inputArea">
              <label name="email">
                <span>EMAIL</span>
                <div className="box">
                  <input
                    type="email"
                    onChange={(e) => onChangeInput(e, 5)}
                    defaultValue={inputEmail}
                  />
                  {inputEmail.length > 0 && (
                    <p className={`check ${isEmail ? "pass" : "fail"}`}>
                      {emailMessage}
                    </p>
                  )}
                </div>
                {regexList[2].test(inputEmail) ? (
                  <button className="active" onClick={() => checkUnique(2)}>
                    중복확인
                  </button>
                ) : (
                  <button>중복확인</button>
                )}
              </label>
            </div>
            <div className="inputArea">
              <label name="addr">
                <span>주소</span>
                <input type="text" value={inputAddr} readOnly={true} />
                <button className="active" onClick={openPostCode}>
                  주소찾기
                </button>
              </label>
              {isPopUpOpen && (
                <DaumPostPopup onClose={closePostCode} setAddr={setAddr} />
              )}
            </div>
            {status === "partner" && (
              <div className="inputArea">
                <label name="desc">
                  <span>소개글</span>
                  <div className="box">
                    <textarea
                      cols="34"
                      rows="5"
                      defaultValue={inputDesc}
                      onChange={(e) => onChangeInput(e, 6)}
                    ></textarea>
                    {inputDesc.length > 0 && (
                      <p className={`check ${isDesc ? "pass" : "fail"}`}>
                        {descMessage}
                      </p>
                    )}
                  </div>
                </label>
              </div>
            )}
          </div>
          <div className="btnBox">
            {isPw && isPhone && isEmail && isAddr && isDesc ? (
              <button className="active" onClick={onSubmit}>
                제출하기
              </button>
            ) : (
              <button>제출하기</button>
            )}
            <button
              className="active"
              onClick={() => {
                navigate(-1);
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </UpdateInfoStyle>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate(-1);
        }}
      ></Modal>
    </>
  );
};
export default UpdateInfo;

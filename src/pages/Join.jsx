import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../api/firebase";
import DaumPostPopup from "../api/DaumPost";
import Joinstyle from "../style/Joinstyle";
import basicProfile from "../images/기본프로필.jpg";
import Modal from "../util/Modal";
import MemberApi from "../api/MemberApi";
import PartnerApi from "../api/PartnerApi";

const Join = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  //프로필이미지
  const [imgSrc, setImgSrc] = useState(basicProfile);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  //키보드 입력
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddr, setInputAddr] = useState("");

  const [inputDesc, setInputDesc] = useState("");

  // 오류 메세지
  const [nameMessage, setNameMessage] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [descMessage, setDescMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isAddr, setIsAddr] = useState(false);
  const [isDesc, setIsDesc] = useState(true);

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

  // 입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    // 파이어베이스에 보내기위해 변수에 저장
    setFile(e.target.files[0]);
    console.log(imgSrc);
  };

  const regexList = [
    // id
    /^[a-zA-Z0-9]{8,15}$/,
    //pw
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_#^*?])[A-Za-z\d@$!%_#^*?]{12,15}$/,
    //phone
    /^\d{3}-\d{4}-\d{4}$/,
    //email
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
    //ptnPhone
    /^\d{2,3}-\d{3,4}-\d{4}$/,
  ];
  const onChangeInput = (e, num) => {
    switch (num) {
      case 1:
        const currName = e.target.value;
        setInputName(currName);
        if (currName.length < 2 || currName.length > 5) {
          setNameMessage("2자 이상 5자 이하로 입력하세요");
          setIsName(false);
        } else {
          setNameMessage("사용 가능합니다");
          setIsName(true);
        }
        break;
      case 2:
        const currId = e.target.value;
        setInputId(currId);
        if (!regexList[0].test(currId)) {
          setIdMessage("영문,숫자 8자이상 15자 이하로 입력하세요");
          setIsId(false);
        } else {
          setIdMessage("중복확인을 해주세요");
          setIsId(false);
        }
        break;
      case 3:
        const currPw = e.target.value;
        setInputPw(currPw);
        if (!regexList[1].test(currPw)) {
          setPwMessage(
            "대소문자, 숫자, 특수기호 포함 12자 이상 15자 이하로 입력 하세요"
          );
          setIsPw(false);
        } else {
          setPwMessage("사용 가능합니다");
          setIsPw(true);
        }
        break;
      case 4:
        const currPhone = e.target.value;
        setInputPhone(currPhone);
        const regex = type === "member" ? regexList[2] : regexList[4];
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
        if (!regexList[3].test(currEmail)) {
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
    const checkVal = [inputId, inputPhone, inputEmail];
    const msgList = [setIdMessage, setPhoneMessage, setEmailMessage];
    const validList = [setIsId, setIsPhone, setIsEmail];
    try {
      const res =
        type === "member"
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

  useEffect(() => {}, [url]);

  const onSubmit = () => {
    if (imgSrc !== basicProfile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          setUrl(url);
          addNewMember(url);
        });
      });
    } else {
      addNewMember();
    }
  };
  const addNewMember = async (url) => {
    try {
      const res =
        type === "member"
          ? await MemberApi.newMember(
              inputId,
              inputPw,
              inputName,
              inputEmail,
              inputPhone,
              inputAddr,
              url
            )
          : await PartnerApi.newPartner(
              inputId,
              inputPw,
              inputName,
              inputEmail,
              inputPhone,
              inputAddr,
              inputDesc,
              url
            );
      if (res.data === true) {
        console.log("가입 성공!");
        if (type === "partner") addDetail();
        else {
          setModalOpen(true);
          setModalHeader("회원가입");
          setModalMsg("회원가입에 성공했습니다!");
          setModalType("회원가입");
        }
      }
    } catch (err) {
      console.log(err);
      setModalOpen(true);
      setModalHeader("오류");
      setModalMsg("서버와의 연결이 끊어졌습니다!");
      setModalType("");
    }
  };
  const addDetail = async () => {
    try {
      const res = await PartnerApi.newDetail(inputId);
      if (res.data === true) {
        console.log("정보추가 성공!");
        setModalOpen(true);
        setModalHeader("회원가입");
        setModalMsg("회원가입에 성공했습니다!");
        setModalType("회원가입");
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
      <Joinstyle>
        <div className="container">
          <h2>{type === "member" ? "일반" : "파트너"} 회원가입</h2>
          <div className="profile">
            <div className="imgBox">
              <img src={imgSrc} alt="프로필이미지" />
            </div>
            <input type="file" onChange={(e) => handleFileInputChange(e)} />
          </div>
          <div className="wrapper">
            <div className="inputArea">
              <label name="name">
                <span>{type === "member" ? "이름" : "파트너명"}</span>
                <div className="box">
                  <input type="text" onChange={(e) => onChangeInput(e, 1)} />
                  {inputName.length > 0 && (
                    <p className={`check ${isName ? "pass" : "fail"}`}>
                      {nameMessage}
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="userId">
                <span>아이디</span>
                <div className="box">
                  <input type="text" onChange={(e) => onChangeInput(e, 2)} />
                  {inputId.length > 0 && (
                    <p className={`check ${isId ? "pass" : "fail"}`}>
                      {idMessage}
                    </p>
                  )}
                </div>
                {regexList[0].test(inputId) ? (
                  <button className="active" onClick={() => checkUnique(0)}>
                    중복확인
                  </button>
                ) : (
                  <button>중복확인</button>
                )}
              </label>
            </div>
            <div className="inputArea">
              <label name="userPw">
                <span>비밀번호</span>
                <div className="box">
                  <input
                    type="password"
                    onChange={(e) => onChangeInput(e, 3)}
                  />
                  {inputPw.length > 0 && (
                    <p className={`check ${isPw ? "pass" : "fail"}`}>
                      {pwMessage}
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div className="inputArea">
              <label name="phone">
                <span>전화번호</span>
                <div className="box">
                  <input
                    type="text"
                    placeholder="'-' 포함 입력하세요"
                    onChange={(e) => onChangeInput(e, 4)}
                  />
                  {inputPhone.length > 0 && (
                    <p className={`check ${isPhone ? "pass" : "fail"}`}>
                      {phoneMessage}
                    </p>
                  )}
                </div>
                {regexList[2].test(inputPhone) ||
                (type === "partner" && regexList[4].test(inputPhone)) ? (
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
                  <input type="email" onChange={(e) => onChangeInput(e, 5)} />
                  {inputEmail.length > 0 && (
                    <p className={`check ${isEmail ? "pass" : "fail"}`}>
                      {emailMessage}
                    </p>
                  )}
                </div>
                {regexList[3].test(inputEmail) ? (
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
                <input
                  type="text"
                  defaultValue={inputAddr}
                  readOnly={true}
                  onClick={openPostCode}
                />
                <button className="active" onClick={openPostCode}>
                  주소찾기
                </button>
              </label>
              {isPopUpOpen && (
                <DaumPostPopup onClose={closePostCode} setAddr={setAddr} />
              )}
            </div>
            {type === "partner" && (
              <div className="inputArea">
                <label name="">
                  <span>소개글</span>
                  <div className="box">
                    <textarea
                      cols="34"
                      rows="5"
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
            {isName &&
            isId &&
            isPw &&
            isPhone &&
            isEmail &&
            isAddr &&
            isDesc ? (
              <button className="active" onClick={onSubmit}>
                제출하기
              </button>
            ) : (
              <button>제출하기</button>
            )}
          </div>
        </div>
      </Joinstyle>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate("/");
        }}
      ></Modal>
    </>
  );
};

export default Join;

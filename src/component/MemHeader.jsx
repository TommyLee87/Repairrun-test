import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import React, { useState, useEffect, useContext } from "react";

const MemHeader = ({ active, togle }) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { loginStatus } = context;
  const userId = window.localStorage.getItem("userId");

  console.log("active :" + active);

  const onClickMenu = (num) => {
    switch (num) {
      case 1:
        navigate("/neworder");
        togle();
        break;
      case 2:
        navigate("/neworder/fastrepair");
        togle();
        break;
      case 3:
        navigate("/neworder/basicrepair");
        togle();
        break;
      case 4:
        navigate("/partnerlist");
        togle();
        break;
      case 5:
        navigate("/reviewstock");
        togle();
        break;
      case 6:
        navigate("/mypage");
        togle();
        break;
      case 7:
        if (loginStatus !== "member") navigate("/login");
        else navigate(`/mypage/updateinfo/${userId}`);
        togle();
        break;
      case 8:
        navigate("/mypage/myreview");
        togle();
        break;
      case 9:
        navigate("/service/notice");
        togle();
        break;
      case 10:
        navigate("/service/faq");
        togle();
        break;
      default:
    }
  };

  return (
    <nav className={active}>
      <ul className="menu">
        <li>
          <div className="m-title" onClick={() => onClickMenu(1)}>
            서비스신청
          </div>
          <ul className="sub-menu">
            <li onClick={() => onClickMenu(2)}>빠른매칭</li>
            <li onClick={() => onClickMenu(3)}>일반매칭</li>
          </ul>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(4)}>
            RR파트너스
          </div>
          <ul className="sub-menu">
            <li onClick={() => onClickMenu(4)}>파트너리스트</li>
            <li onClick={() => onClickMenu(5)}>리뷰</li>
          </ul>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(6)}>
            마이페이지
          </div>
          <ul className="sub-menu">
            <li onClick={() => onClickMenu(6)}>마이페이지</li>
            <li onClick={() => onClickMenu(7)}>정보수정</li>
            <li onClick={() => onClickMenu(8)}>나의리뷰</li>
          </ul>
        </li>
        <li>
          <div className="m-title" onClick={() => onClickMenu(9)}>
            고객센터
          </div>
          <ul className="sub-menu">
            <li onClick={() => onClickMenu(9)}>공지사항</li>
            <li onClick={() => onClickMenu(10)}>FAQ</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default MemHeader;

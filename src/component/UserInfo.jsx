import UserInfoComp from "../style/UserInfoStyle";
import { useState, useEffect } from "react";
import MemberApi from "../api/MemberApi";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () => {
    try {
      const res = await MemberApi.memberInfo(userId);
      if (res.data !== null) {
        setUserInfo(res.data);
        window.localStorage.setItem("userName", res.data.userName);
        window.localStorage.setItem("userEmail", res.data.userEmail);
        window.localStorage.setItem("userPhone", res.data.userPhone);
        window.localStorage.setItem("userAddr", res.data.userAddr);
        window.localStorage.setItem("userImg", res.data.userImg);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserInfo();
    console.log(userInfo);
  }, []);

  return (
    <>
      <UserInfoComp>
        <div className="container">
          <div className="userProfile">
            <h2>{userInfo && userInfo.userName}님, 안녕하세요!</h2>
            <div className="profileImg">
              {<img src={userInfo && userInfo.userImg} alt="profile" />}
            </div>
          </div>
          <div className="userContent">
            <div className="userBox">
              <p className="title">이름</p>
              <p>{userInfo && userInfo.userName}</p>
            </div>
            <div className="userBox">
              <p className="title">아이디</p>
              <p>{userId}</p>
            </div>
            <div className="userBox">
              <p className="title">EMAIL</p>
              <p>{userInfo && userInfo.userEmail}</p>
            </div>
            <div className="userBox">
              <p className="title">전화번호</p>
              <p>{userInfo && userInfo.userPhone}</p>
            </div>
            <div className="userBox">
              <p className="title">소재지</p>
              <p>{userInfo && userInfo.userAddr}</p>
            </div>
          </div>

          <div className="userModification">
            <button
              onClick={() => {
                navigate(`/mypage/updateInfo/${userId}`);
              }}
            >
              수정하기
            </button>
          </div>
        </div>
      </UserInfoComp>
    </>
  );
};

export default UserInfo;

import Coupon from "../component/Coupon";
import OrderList from "../component/OrderList";
import ReviewList from "../component/ReviewList";
import UserInfo from "../component/UserInfo";
import { UserContext } from "../context/UserStore";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const userId = window.localStorage.getItem("userId");
  console.log(userId);
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus !== "member") navigate("/login");
  }, []);
  return (
    <>
      <UserInfo />
      <Coupon />
      <OrderList loginType={0} />
      <div className="container">
        <h2>나의 리뷰</h2>
      </div>
      <ReviewList search={userId} nofilter={""} />
    </>
  );
};
export default MyPage;

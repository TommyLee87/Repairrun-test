import MemReviewList from "../component/MemReviewList";
import { ReviewTop } from "../style/MyReviewStyle";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";

const MyReview = () => {
  const [mySortBy, setMySortBy] = useState("writtenReviews");
  const [totalReviews, setTotalReviews] = useState(0);

  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus !== "member") navigate("/login");
  }, []);

  const handleSortChange = (criteria) => {
    setMySortBy(criteria);
  };
  return (
    <>
      <ReviewTop>
        <div className="container">
          <div className="myreviewTitle">
            <h3>나의 리뷰 보기</h3>
          </div>

          <div className="infoBox">
            <ul className="writingReview">
              <li
                className={mySortBy === "writtenReviews" ? "active" : ""}
                onClick={() => handleSortChange("writtenReviews")}
              >
                작성한 리뷰
              </li>
              <li
                className={mySortBy === "availableReviews" ? "active" : ""}
                onClick={() => handleSortChange("availableReviews")}
              >
                작성 가능한 리뷰
              </li>
            </ul>
            <p>총 {totalReviews}건</p>
          </div>
        </div>
      </ReviewTop>
      <MemReviewList
        mySortBy={mySortBy}
        totalReviews={totalReviews}
        setTotalReviews={setTotalReviews}
      />
    </>
  );
};
export default MyReview;

// 나의리뷰보기 상단 부분 작업페이지

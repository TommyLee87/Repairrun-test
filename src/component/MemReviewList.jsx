import MemReview from "./MemReview";
import { MemReviewListStyle } from "../style/MyReviewStyle";
import ReviewApi from "../api/ReviewApi";
import { useEffect, useState } from "react";

const MemReviewList = ({ nofilter, mySortBy, setTotalReviews }) => {
  const [myReviewList, setmyReviewList] = useState("");
  const mySortedBy = (mySortBy) => {
    const mySortedData = [...myReviewList];
    switch (mySortBy) {
      // case "highestRated":

      //   break;
      // case "lowestRated":
      //   mySortedData.sort((a, b) => a.rating.length - b.rating.length);
      //   break;
      // default:
      case "writtenReviews":
        return mySortedData.filter((review) => review.reviewContents); // 작성한 리뷰만 필터링
      case "availableReviews":
        return mySortedData.filter((review) => !review.reviewContents); // 작성 가능한 리뷰만 필터링
      default:
        return mySortedData;
    }
  };

  useEffect(() => {
    console.log("myReviewList");
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    const myReviewData = async () => {
      try {
        const res = await ReviewApi.myReview(userId);
        if (res.status === 200) {
          setmyReviewList(res.data);
          setTotalReviews(res.data.length);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    myReviewData();
  }, [setTotalReviews]);

  const filteredReviews = mySortedBy(mySortBy);
  return (
    <>
      <MemReviewListStyle>
        {/* <div className="container">
          {myReviewList &&
            myReviewList.map((myReviewMap) => (
              <MemReview
                key={myReviewMap.orderNumFk}
                myReviewData={myReviewMap}
              />
            ))} */}
        <div className="container">
          {filteredReviews &&
            filteredReviews.map((myReviewMap) => (
              <MemReview
                key={myReviewMap.orderNumFk}
                myReviewData={myReviewMap}
              />
            ))}
          {nofilter === "nofilter" &&
            myReviewList &&
            myReviewList.map((myReview) => (
              <MemReview key={myReview.orderNumFk} reviewData={myReview} />
            ))}
        </div>
      </MemReviewListStyle>
    </>
  );
};

export default MemReviewList;

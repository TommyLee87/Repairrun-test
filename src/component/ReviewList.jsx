import Review from "./Review";
import { ReviewListStyle } from "../style/ReviewStyle";
import { useEffect, useState } from "react";
import ReviewApi from "../api/ReviewApi";

const ReviewList = ({ search, nofilter, sortBy }) => {
  const [reviewList, setReviewList] = useState("");

  const sortedBy = (sortBy) => {
    const sortedData = [...reviewList];
    switch (sortBy) {
      case "highestRated":
        sortedData.sort((a, b) => b.rating.length - a.rating.length);
        break;
      case "lowestRated":
        sortedData.sort((a, b) => a.rating.length - b.rating.length);
        break;
      case "latest":
        sortedData.sort((a, b) => new Date(b.compDate) - new Date(a.compDate));
        break;
      case "oldest":
        sortedData.sort((a, b) => new Date(a.compDate) - new Date(b.compDate));
        break;
      default:
        break;
    }
    return sortedData;
  };

  useEffect(() => {
    console.log("reviewList");
    const reviewData = async () => {
      try {
        const res = await ReviewApi.review();
        if (res.status === 200) {
          setReviewList(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    reviewData();
  }, []);

  // sortedBy 함수로 정렬된 데이터를 가져옴
  const sortedReviews = sortedBy(sortBy);

  // 필터링 및 정렬된 데이터
  const filteredReviews =
    nofilter === ""
      ? sortedReviews.filter((review) => {
          const reviewText =
            review.reviewContents +
            review.repairItem +
            review.userId +
            review.ptnName;
          return (
            search === "" ||
            reviewText.toLowerCase().includes(search.toLowerCase())
          );
        })
      : sortedReviews;

  return (
    <>
      <ReviewListStyle>
        <div className="container">
          {nofilter !== "nofilter" &&
            filteredReviews &&
            filteredReviews.map((filteredReview) => (
              <Review
                key={filteredReview.reviewContents}
                reviewData={filteredReview}
              />
            ))}
          {nofilter === "nofilter" &&
            reviewList &&
            reviewList
              .slice(0, 3)
              .map((review) => (
                <Review key={review.reviewContents} reviewData={review} />
              ))}
        </div>
      </ReviewListStyle>
    </>
  );
};
export default ReviewList;

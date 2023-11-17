import styled from "styled-components";

import { ReviewBlock } from "../style/ReviewStyle";

const Review = ({ reviewData }) => {
  return (
    <ReviewBlock>
      <div className="wrapper">
        <h3>{reviewData.ptnName}</h3>
        <div className="wrap">
          <div className="imgWrap">
            <img className="CompImg" src={reviewData.imgComp} alt="Comp" />
            <img className="fullImg" src={reviewData.imgFull} alt="full" />
          </div>
        </div>
        <div className="wrap2">
          <div className="box1">
            <div>{reviewData.rating}</div>
            <p>{reviewData.repairItem}</p>
          </div>
          <div className="box2">
            <p>{reviewData.userId}</p>
            <p>{reviewData.reviewContents}</p>
          </div>
          <div className="box3">
            <p>{reviewData.compDate}</p>
          </div>
        </div>
      </div>
    </ReviewBlock>
  );
};

export default Review;

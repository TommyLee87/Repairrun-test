import { MemReviewBlock } from "../style/MyReviewStyle";

const MemReview = ({ myReviewData }) => {
  return (
    <MemReviewBlock>
      <div className="wrapper">
        <div className="title-btn">
          <h3>주문번호 : {myReviewData.orderNumFk}</h3>
          <button className="ch-btn">수정</button>
        </div>
        <div className="wrap">
          <div className="imgBox">
            <div className="imgWrap">
              <img className="CompImg" src={myReviewData.imgComp} alt="Comp" />
              <img className="fullImg" src={myReviewData.imgFull} alt="full" />
            </div>
          </div>
          <div className="box">
            <div className="txt-box">
              <p>별점:</p>
              <p>{myReviewData.rating}</p>
              <div className="star-box">
                <p>{myReviewData.star}</p>
              </div>
            </div>
            <div className="txt-box">
              <p>파트너사:</p>
              <p>{myReviewData.ptnName}</p>
            </div>
            <div className="txt-box">
              <p>수선품목:</p>
              <p>{myReviewData.repairItem}</p>
            </div>
            <div className="txt-box">
              <p>완료날짜:</p>
              <p>{myReviewData.compDate}</p>
            </div>
          </div>
          <div className="box2">
            <p>{myReviewData.reviewContents}</p>
          </div>
        </div>
      </div>
    </MemReviewBlock>
  );
};

export default MemReview;

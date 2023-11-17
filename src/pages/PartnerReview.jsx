import { styled } from "styled-components";
import ReviewList from "../component/ReviewList";

const PartnerReviewComp = styled.section`
  background-color: var(--IVORY);
  .container {
    padding: 80px 0;
    .sectionTitle {
      text-align: center;
      font-size: 1.6em;
      p {
        margin-bottom: 20px;
        font-weight: 600;
      }
    }
  }
`;

const PartnerReview = () => {
  const ptnName = window.localStorage.getItem("ptnName");
  console.log(ptnName);
  return (
    <>
      <PartnerReviewComp>
        <div className="container">
          <div className="sectionTitle">
            <p>
              최근 후기 <span>2</span>개{" "}
            </p>
            <p>평균 별점</p>
            <p>5</p>
          </div>
        </div>
      </PartnerReviewComp>
      <ReviewList search={ptnName} nofilter={""} />
    </>
  );
};
export default PartnerReview;

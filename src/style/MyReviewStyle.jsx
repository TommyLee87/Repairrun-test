import styled from "styled-components";

// 나의리뷰보기 상단 부분(나의리뷰보기,작성한리뷰,작성가능한리뷰,총4건)

export const ReviewTop = styled.section`
  width: 100%;
  padding-top: 60px;
  /* outline: 1px solid red; */
  margin-bottom: 60px;
  min-height: 40vh;

  .container {
    /* outline: 1px solid red; */
    .myreviewTitle {
      display: flex;
      justify-content: center;
      font-weight: 800;
      margin-bottom: 60px;
      font-size: 1.3em;
    }
    .infoBox {
      display: flex;
      justify-content: space-between;
      .writingReview {
        display: flex;
        font-weight: 600;
        font-size: 15px;
        align-items: baseline;

        li {
          cursor: pointer;
          font-size: 1.2em;
          color: var(--GREY);
          display: block;
          &.active {
            font-size: 1.4em;
            color: #000;
          }
          &:first-child {
            margin-right: 15px;
          }
          /* @media screen and (max-width: 768px) {
            .li {
              align-items: center; */
        }
      }
    }
  }
  p {
    font-size: 1.4em;
    font-weight: 800;
  }
`;

// MemReview 컴포넌트에 대한 스타일
export const MemReviewBlock = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid var(--GREY);
  background-color: var(--DARKBLUE);

  .wrapper {
    width: 100%;
    padding: 20px;
    .title-btn {
      display: flex;
      justify-content: space-between;
      h3 {
        font-weight: 600;
        font-size: 1.2em;
        text-align: left;
        color: white;
        margin-bottom: 30px;
        /* outline: 1px solid red;s */
      }
      .ch-btn {
        border: none;
        background-color: var(--LIGHTBLUE);
        color: white;
        cursor: pointer;
        width: 50px;
        height: 30px;
        border-radius: 10px;
        transition: 0.2s ease-in;
        &:hover {
          background-color: var(--MIDBLUE);
        }
      }
    }
    .wrap {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .imgBox {
        width: 100%;
        flex-grow: 1;
        @media screen and (max-width: 768px) {
          margin-bottom: 20px; // 이미지를 모바일에서 가운데 정렬
        }
        .imgWrap {
          /* outline: 1px solid yellow; */
          cursor: pointer;
          width: 80%;
          padding-bottom: 80%;
          overflow: hidden;
          position: relative;
          border-radius: 10px;
          @media screen and (max-width: 768px) {
            margin: 0 auto; // 이미지를 모바일에서 가운데 정렬
          }
          &:hover {
            img {
              &:last-child {
                display: none;
              }
            }
          }
          img {
            width: 100%;
            height: 100%;
            position: absolute;
          }
        }
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .box {
      flex-grow: 1;
      width: 100%;
      font-weight: 600;
      /* outline: 1px solid red; */
      @media screen and (max-width: 768px) {
        text-align: center;
        margin-bottom: 20px;
      }

      .txt-box {
        display: flex;
        line-height: 50px;
        /* outline: 1px solid yellow; */
        @media screen and (max-width: 768px) {
          line-height: 35px;
        }

        p {
          color: white;
          &:first-child {
            width: 30%;
          }
        }
      }
      .star-box {
        p {
          color: #000;
        }
      }
    }
    .box2 {
      flex-grow: 1;
      width: 100%;
      /* outline: 1px solid yellow; */
      color: #000;
      border: 1px solid #000;
      font-weight: 600;
      @media screen and (max-width: 768px) {
        height: 100px;
      }
    }
  }
`;

// MemReviewList 관련 정렬 하는 스타일

export const MemReviewListStyle = styled.section`
  width: 100%;
  padding: 20px 0;
  .container {
    padding: 0 10%;
  }
`;

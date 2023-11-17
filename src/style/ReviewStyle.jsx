import styled from "styled-components";

// 각각 리뷰에 대한 스타일
export const ReviewBlock = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid var(--GREY);
  border-radius: 10px;
  background-color: var(--IVORY); //아이보리or 그냥 없애기 고민중
  cursor: pointer;
  h3 {
    font-weight: 600;
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 14px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 20px;
    .wrap {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 20px;
      .imgWrap {
        width: 100%;
        padding-bottom: 100%;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
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
    .wrap2 {
      width: 100%;
      .box1 {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .box2 {
        font-weight: 600;
        margin-bottom: 30px;
        p {
          &:first-child {
            margin-bottom: 10px;
          }
        }
      }
      .box3 {
        text-align: right;
        font-weight: 600;
      }
    }
  }
`;

// 리뷰 리스트 관련 스타일
export const ReviewListStyle = styled.section`
  width: 100%;
  padding: 40px 0;
  min-height: 70vh;
  .container {
    /* outline: 1px solid red; //아웃라인s */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
`;

//검색/ 필터 관련 스타일
export const PtnStockSearchBar = styled.section`
  width: 100%;
  height: 250px;
  .container {
    height: 100%;
    position: relative;
    padding-top: 80px;
    .SearchArea {
      width: 100%;
      display: flex;
      justify-content: center;
      .searchBox {
        width: 100%;
        display: flex;
        justify-content: center;
        /* outline: 1px solid red; */
        input {
          border-radius: 30px;
          width: 40%;
          height: 60px;
          background-color: var(--IVORY);
          font-size: 20px;
          border: none;
          text-align: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--MIDBLUE);
          border-radius: 30px;
          color: #ffffff;
          border: none;
          width: 100px;
          height: 60px;
          margin-left: 20px;
          transition: 0.2s ease-in;
          cursor: pointer;
          &:hover {
            background-color: var(--GREY);
          }
          svg {
            font-size: 1em;
          }
        }
        @media screen and (max-width: 768px) {
          input {
            width: 70%;
            height: 300%;
            font-size: 100%;
          }
          button {
            width: 10%;
            height: 300%;
          }
        }
      }
    }

    .sortArea {
      display: flex;
      position: absolute;
      bottom: 20px;
      right: 0;
      font-weight: 600;
      font-size: 15px;
      /* outline: 1px solid red; //sortArea아웃라인 */
      li {
        position: relative;
        cursor: pointer;
        color: var(--GREY);
        &.active {
          color: #000;
        }

        margin-left: 24px;
        &::after {
          content: "";
          display: block;
          width: 2px;
          height: 100%;
          background-color: var(--GREY);
          position: absolute;
          top: 1px;
          left: -11px;
        }
        &:first-child {
          &::after {
            display: none;
          }
        }
      }
    }
  }
`;

import styled, { css } from "styled-components";

export const ItemSelectComp = styled.section`
  .container {
    padding: 60px 0;
    .itemSelect {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 0;
      h3 {
        font-weight: 600;
        font-size: 1.3rem;
        margin-bottom: 40px;
      }
      .itemImg {
        width: 70%;
        display: flex;

        align-items: center;
        justify-content: center;
        color: var(--GREY);

        .itemButton {
          display: flex;
          margin: 10px 10px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          border: none;
          &.selected {
            background-color: var(--LIGHTBLUE);
          }
          p {
            text-align: center;
            font-weight: 400;
            font-size: 1.2rem;
            margin-bottom: 1;
          }

          &:hover {
            cursor: pointer;
            background-color: var(--LIGHTBLUE);
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .itemImg {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0 100px;

      button {
        width: 150px;
        height: 45px;
        border-radius: 30px;
        border-style: none;
        background-color: var(--DARKBLUE);
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;

// 수선 세부사항 - 라디오 박스 스타일

export const RadioBox = styled.div`
  padding: 10px;
  margin: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .radioBtn {
    display: flex;
    justify-content: space-between;

    label {
      padding: 25px;
      height: 2rem;
      cursor: pointer;
      border-radius: 2rem;
      background-color: var(--DARKBLUE);
      font-size: 1.2rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      word-break: keep-all;
      text-align: center;
      margin: 0 3px;

      /* 체크박스를 라벨 내에 숨깁니다. */
      input[type="radio"] {
        margin-right: 10px;
      }
    }
  }
`;

// RequestComp : 요청사항 스타일
export const RequestComp = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    .request {
      width: 80%;
      .requestType {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        h3 {
          text-align: center;

          font-size: 1.3rem;
          font-weight: 400;

          span {
            font-size: 1.4rem;
            font-weight: 600;
          }
        }
        .detailItem {
          h3 {
            font-size: 1.3rem;
            font-weight: 600;
            padding-top: 10px;
            color: var(--DARKBLUE);
            /* text-align: left; */
          }
        }
      }
    }
    .extraExplain {
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border: 1px solid darkgray;
      border-radius: 5px;

      h3 {
        font-size: 1.3rem;
        font-weight: 600;
        text-align: left;
        color: var(--DARKBLUE);
      }
      .example {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 25%;
        width: 100%;
        border: 1px solid darkgray;

        background-color: var(--GREY);
        text-align: center;
        h4 {
          font-size: 1.1rem;
          color: var(--DARKBLUE);
          font-weight: 400;
          padding: 5px;
        }
        p {
          font-size: 1.3rem;
          font-weight: 400;
        }
      }
      textarea {
        height: 65%;
        width: 100%;
        font-size: 1rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        /* display: flex;
        justify-content: flex-start;
        text-align: start;
        align-items: flex-start; */
      }
    }
    .example {
      height: 100px;
      border: 1px solid darkgray;
      /* padding: 30px; */
      background-color: var(--LIGHTBLUE);
    }
    .buttonContainer {
      text-align: right;

      button {
        width: 150px;
        height: 45px;
        border-radius: 30px;
        border-style: none;
        background-color: var(--DARKBLUE);
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;

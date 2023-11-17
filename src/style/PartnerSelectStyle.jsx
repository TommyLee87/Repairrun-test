import styled, { css } from "styled-components";

// 파트너 선택 컴포넌트
export const PartnerSelectComp = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: var(--GREY);

  .container {
    .background {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: white;
      border-radius: 10px;
      width: 100%;
      padding: 30px;
      .title {
        h3 {
          text-align: center;
          font-weight: 400;
          padding: 15px;
          font-size: 1.5rem;

          span {
            font-weight: 600;
            font-size: 1.6rem;
            color: var(--DARKBLUE);
          }
        }
        p {
          font-size: 1.1rem;
          margin-bottom: 30px;
        }
      }
      .ptninfo {
        display: flex;
        /* border: 1px solid red; */
        margin-bottom: 10px;
        border-radius: 10px;
        background-color: var(--LIGHTBLUE);
        width: 80%;
        /* width: 500px; */
        padding: 2% 5%;
        &.selected {
          background-color: var(--DARKBLUE);
          p {
            color: white;
          }
          .ratingBox .ratingPtn .num {
            color: white;
          }
        }
        &:hover {
          cursor: pointer;
          background-color: var(--DARKBLUE);
          p {
            color: white;
          }
          .ratingBox .ratingPtn .num {
            color: white;
          }
          &:active {
            background-color: var(--LIGHTBLUE);
          }
        }

        .selectPtn {
          width: 13%;
          padding-bottom: 13%;
          position: relative;

          img {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            /* border: 1px solid blue; */
            border-radius: 10px;
          }
        }
        // 별점 박스
        .ratingBox {
          /* border: 1px solid blue; */
          width: 13%;
          position: relative;
          .ratingPtn {
            top: 0;
            left: 0;
            position: absolute;
            width: 100%;
            /* border: 1px solid blue; */
            border-radius: 10px;
            padding: 10% 0;
            p {
              font-weight: 600;
              font-size: 1.3em;
              /* padding: 3px; */
            }
            @media only screen and (max-width: 768px) {
              p {
                font-size: 1.1em;
              }
            }
            .num {
              font-size: 1.8em;
              font-weight: 600;
              padding: 12px;
              color: var(--DARKBLUE);
              @media only screen and (max-width: 768px) {
                font-size: 1.3rem;
              }
            }
          }
        }
        .itemBox {
          width: 50%;
          /* border: 1px solid orange; */
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          padding-left: 20px;
          .info {
            p {
              font-size: 1.3rem;
              padding-bottom: 5px;
              @media only screen and (max-width: 768px) {
                font-size: 1rem;
              }
            }
          }
        }
      }
      .cost {
        width: 30%;
        /* border: 1px solid orange; */
        display: flex;
        justify-content: center;
        align-items: center;
        .costArea {
          top: 0;
          left: 0;
          width: 100%;
          border: 3px solid var(--DARKBLUE);
          border-radius: 50px;
          background-color: white;
          p {
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--DARKBLUE);
            padding: 15px;
            @media only screen and (max-width: 768px) {
              font-size: 1.2rem;
            }
          }
        }
      }
      .buttonContainer {
        align-items: flex-end;
        padding-top: 10px;
        button {
          width: 300px;
          height: 45px;
          border-radius: 30px;
          border-style: none;
          background-color: var(--DARKBLUE);
          color: white;
          font-weight: 600;
          font-size: 1.3rem;
          margin: 20px;
          &:hover {
            cursor: pointer;
            background-color: var(--MIDBLUE);
          }
        }
      }
    }
  }
`;

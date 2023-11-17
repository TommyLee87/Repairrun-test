import styled, { css } from "styled-components";

export const OrderCheckComp = styled.section`
  width: 100%;
  padding: 60px 0;
  .container {
    /* border: 1px solid darkgray; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 100%;
    padding: 30px;
    h3 {
      text-align: center;
      font-weight: 400;
      padding: 30px;
      font-size: 1.5rem;

      span {
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
    .orderContainer {
      width: 70%;
      background-color: var(--IVORY);
      border-radius: 10px;
      padding: 30px;
      .itemBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;
        width: 100%;
        .repairItem {
          font-weight: 600;
          font-size: 1.1rem;
          padding: 3px 0;
        }
        p {
          font-size: 1.1rem;

          font-weight: 400;
          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }
        .repairItemImg {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          width: 100%;

          p {
            font-weight: 600;
            font-size: 1.1rem;
            text-align: left;
            width: 20%;

            @media (max-width: 768px) {
              font-size: 1rem;
            }
          }
          /* .repairItemImg2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          width: 100%;

          p {
            font-weight: 600;
            font-size: 1.1rem;

            @media (max-width: 768px) {
              font-size: 1rem;
            }
          } */
          .fullImg {
            width: 30%;
            padding-bottom: 30%;
            overflow: hidden;
            position: relative;
            img {
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              position: absolute;
              border-radius: 10px;
            }
          }
          .detailImgBox {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .detailImg {
              width: 30%;
              padding-bottom: 30%;
              overflow: hidden;
              position: relative;
              background-color: var(--GREY);
              border-radius: 10px;
              img {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                position: absolute;
              }
            }
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
`;

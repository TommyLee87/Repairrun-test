import styled from "styled-components";

const OrderImgComp = styled.section`
  width: 100%;
  .container {
    padding: 70px 0;
    background-color: var(--IVORY);
    .orderDetailBoder {
      display: flex;
      width: 100%;
      margin-bottom: 30px;
      padding: 40px;
      border-radius: 20px;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        .orderDetailBox1 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
      .orderDetailBox1 {
        flex-grow: 1;
        h2 {
          color: black;
          margin-left: 5px;
          margin-bottom: 40px;
          font-weight: 600;
        }
        .orderImgBorder {
          width: 80%;
          padding-bottom: 80%;
          overflow: hidden;
          border-radius: 5px;
          position: relative;
          .swiperWrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            .swiper {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .orderDetailBox2 {
      margin-left: 20px;
      white-space: nowrap;
      flex-grow: 1;
      font-size: 1.4em;
      padding-top: 10%;
      .orderDetailComp {
        color: black;
        display: flex;
        margin-bottom: 40px;
        .orderDetailTitle {
          color: black;
          font-weight: 600;
        }
      }
      .orderRequestComp {
        color: black;
        margin-bottom: 40px;
        .orderRequestTitle {
          font-weight: 600;
          margin-bottom: 40px;
        }
        .requestText {
          padding: 20px;
          border-radius: 10px;
          background-color: var(--GREY);
        }
      }
      .orderMoney {
        font-size: 1.4em;
        display: flex;
        justify-content: space-between;
      }
      p {
        color: black;
      }
    }

    .orderDetailBtn {
      display: flex;
      .orderRepair {
        width: 50%;
        align-items: center;
        justify-content: center;
      }
    }

    .orderRepair {
      display: flex;
      justify-content: space-between;
      .repairProcess {
        margin-right: 10px;
        p {
          font-size: 1.2em;
          font-weight: 600;
        }
      }
      .repairing {
        /* padding: 20px; */
        border-radius: 10px;
        background-color: var(--GREY);
        select {
          border: none;
          padding: 20px;
          font-size: 1.3em;
          text-align: center;
          color: #333;
          background-color: var(--GREY);
          border-radius: 5px;
          option: {
            outline: 1px solid red;
            text-align: center;
          }
          &:disabled {
            color: #333;
          }
        }
      }
    }
    .chattingBtn {
      display: flex;
      width: 50%;
      /* background-color: gray; */
      justify-content: center;
      align-items: center;
    }
    button {
      margin: 10px;
      border: none;
      letter-spacing: 1.4px;
      font-size: 1.3em;
      padding: 15px 24px;
      border-radius: 5px;
      background-color: var(--LIGHTBLUE);
      cursor: pointer;
      transition: 0.3s ease-in;
      &:hover {
        color: white;
        background-color: var(--DARKBLUE);
      }
    }
  }
`;

export default OrderImgComp;

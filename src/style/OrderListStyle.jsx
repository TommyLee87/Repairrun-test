import styled from "styled-components";

const OrderListComp = styled.div`
  width: 100%;
  .container {
    padding: 50px 0;
    .orderHeader {
      h2 {
        margin-bottom: 50px;
      }
      .orderBox {
        /* outline: 1px solid red; */
        width: 100%;
        .outerSwiper {
          > .swiper-wrapper {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-auto-flow: column;
          }
        }
        .orderContainer {
          .orderBoder {
            display: flex;
            background-color: var(--MIDBLUE);
            width: 90%;
            margin: 0 auto;
            margin-bottom: 30px;
            padding: 4%;
            border-radius: 20px;
            position: relative;
            .ordersecBorder1 {
              flex-grow: 1;
              h3 {
                color: white;
                margin-left: 5px;
                margin-bottom: 20px;
                font-weight: 600;
              }
              .orderImgBorder {
                width: 80%;
                padding-bottom: 80%;
                position: relative;
                .swiperWrapper {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  .swiper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                  }
                  .swiper-slide {
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
            .ordersecBorder2 {
              white-space: nowrap;
              flex-grow: 3;
              font-size: 1.4em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              .orderComp {
                color: white;
                display: flex;
                margin-bottom: 40px;
                &:last-child {
                  margin-bottom: 0;
                }
                .orderTitle {
                  color: white;
                  font-weight: 600;
                  margin-right: 3%;
                }
              }
              p {
                color: white;
              }
            }
            .orderBtn {
              position: absolute;
              right: 4%;
              button {
                border: none;
                letter-spacing: 1.4px;
                font-size: 1em;
                padding: 12px 20px;
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
            @media only screen and (max-width: 768px) {
              flex-direction: column;
              padding-bottom: 100px;
              .ordersecBorder1 {
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .orderImgBorder {
                  width: 60%;
                  padding-bottom: 60%;
                }
              }
              .orderBtn {
                width: 100%;
                bottom: 30px;
                right: 0;
                display: flex;
                justify-content: center;
              }
            }
          }
        }
      }
    }
  }
`;

export default OrderListComp;

import { styled } from "styled-components";

const CouponComp = styled.div`
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    padding: 50px 0;
    .myCoupon {
      border-bottom: 1px solid black;
      h2 {
        margin-bottom: 20px;
      }
    }
    .couponGift {
      margin-top: 30px;
      background-color: white;
      .couponBox {
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: space-evenly;
        .Couponex {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px 20px;
          background-color: var(--LIGHTBLUE);
          margin-bottom: 15px;
          .couponBorder {
            width: 250px;
            background-color: white;
            border-radius: 10px;
            padding: 10px 0;
            h3 {
              margin-bottom: 10px;
            }
            p {
              font-size: 1.1em;
              font-weight: 600;
              margin-bottom: 10px;
            }
            .couponRightExp {
              font-size: 1.1em;
              margin-bottom: 0;
              right: 0;
            }
          }
        }
      }
    }
  }

  .welcomeCoupon {
    margin-top: 10px;
  }
  .deliveryCoupon {
    background-color: LIGHTBLUE;
    text-align: center;
  }

  .noCoupon {
    position: relative;
    bottom: 50px;
    width: 100%;
    text-align: center;
    h3 {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
export default CouponComp;

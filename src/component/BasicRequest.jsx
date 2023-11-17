import styled, { css } from "styled-components";

export const ItemSelectComp = styled.section`
  .container {
    border: 1px solid darkgray;
    display: flex;
    padding: 200px 30px;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    h3 {
      text-align: center;
      font-weight: 400;

      span {
        font-size: 35px;
        font-weight: 600;
      }
    }

    .itemImg {
      display: flex;
      flex-direction: row;
      width: 800px;
      padding: 20px;
      justify-content: space-between;
      align-content: center;
      /* button {
        background-color: var(--IVORY);
        border-style: none; */
      p {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
  }
`;

export const RequestComp = styled.section`
  .container {
    border: 1px solid darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
    .type {
      h3 {
        text-align: center;
        font-weight: 400;

        span {
          font-size: 35px;
          font-weight: 600;
        }
      }
    }
  }
`;

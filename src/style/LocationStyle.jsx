import styled, { css } from "styled-components";

export const LocationComp = styled.section`
  display: flex;
  width: 100%;
  height: 0 auto;
  border: 1px solid darkgray;
  justify-items: center;
  align-content: space-evenly;

  .container {
    /* border: 1px solid darkgray; */
    display: flex;
    padding: 80px 0;
    flex-direction: column;

    .fastselect {
      width: 100%;
      /* display: flex; */
      /* align-items: center; */

      h3 {
        text-align: left;
        /* margin: 10px; */
        font-weight: 600;
        padding: 10px 30px;
      }
      .btnBox {
        display: flex;
        justify-items: center;
        justify-content: space-evenly;
        padding: 10px;
        button {
          position: relative;
          margin: 7px;
          flex: 1;
          width: 20%;
          padding-bottom: 20%;
          background-color: var(--DARKBLUE);
          color: white;
          font-size: 1.4rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 5px;
          border: 1px solid darkgray;
          word-break: keep-all;
          &.selected {
            background-color: var(--LIGHTBLUE);
            p {
              color: black;
            }
          }
          &:hover {
            cursor: pointer;
            background-color: var(--LIGHTBLUE);
            p {
              color: black;
            }
          }
          p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
        }
      }

      img {
        width: 90%;
        margin: 10px;
      }
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

  @media only screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const BrandInputComp = styled.section`
  background-color: var(--IVORY);
  .container {
    /* border: 1px solid darkgray; */
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;

    .brandInput {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      /* align-items: flex-end; */
      width: 45%;

      input {
        padding: 22px;
        width: 100%;
        background-color: var(--LIGHTBLUE);
        border-style: none;
        margin: 15px 0;
        border-radius: 5px;
        font-size: 1.2rem;
      }
    }
    @media only screen and (max-width: 768px) {
      .brandInput {
        width: 100%;
      }
    }

    h3 {
      text-align: center;
      font-weight: 400;

      span {
        font-size: 35px;
        font-weight: 600;
      }
    }
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
`;
export default LocationComp;

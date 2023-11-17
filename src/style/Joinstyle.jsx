import styled from "styled-components";

const Joinstyle = styled.section`
  padding: 60px 0;
  .container {
    h2 {
      text-align: center;
      margin-bottom: 40px;
    }
    .profile {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;

      .imgBox {
        position: relative;
        width: 20%;
        padding-bottom: 20%;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        @media only screen and (max-width: 768px) {
          width: 30%;
          padding-bottom: 30%;
        }
      }
    }
    .wrapper {
      width: 72%;
      margin: 0 auto;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .inputArea {
        margin-bottom: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        label {
          width: 330px;
          display: flex;
          align-items: center;
          span {
            width: 20%;
            font-size: 1.1em;
            font-weight: 600;
          }
          input {
            margin-right: 6px;
            padding: 5px;
          }
          .box {
            position: relative;
            textarea {
              z-index: -1;
              position: relative;
            }
            .check {
              position: absolute;
              top: 104%;
              width: 94%;
              text-align: right;
              font-size: 0.8em;
              word-break: keep-all;
              letter-spacing: -1.2px;
              &.pass {
                color: var(--DARKBLUE);
              }
              &.fail {
                color: red;
              }
            }
          }
          button {
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: var(--GREY);
            color: #333;
            letter-spacing: -0.8px;

            &.active {
              cursor: pointer;
              background-color: var(--MIDBLUE);
              color: white;
              &:hover {
                background-color: var(--DARKBLUE);
              }
            }
          }
        }
      }
    }
    .btnBox {
      display: flex;
      justify-content: center;
      button {
        border: none;
        padding: 14px 20px;
        border-radius: 5px;
        background-color: var(--GREY);
        &.active {
          background-color: var(--LIGHTBLUE);
          cursor: pointer;
          transition: 0.3s ease-in;
          &:hover {
            background-color: var(--DARKBLUE);
            color: white;
          }
        }
      }
    }
  }
`;

export default Joinstyle;

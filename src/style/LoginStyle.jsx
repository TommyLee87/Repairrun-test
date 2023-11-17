import { styled } from "styled-components";

const LoginStyle = styled.div`
  width: 100%;
  .container {
    padding: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .loginText {
      text-align: center;
      margin-bottom: 50px;
    }
    .loginProcess {
      display: flex;
      flex-direction: column;
      align-items: center;
      .loginType {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        button {
          font-weight: 600;
          align-self: flex-end;
          border: none;
          background: none;
          font-size: 1.1em;
          color: #ccc;
          cursor: pointer;
          &:first-child {
            margin-right: 20px;
          }
          &.active {
            color: var(--DARKBLUE);
            font-size: 1.5em;
          }
        }
      }
      .loginInput {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
      }

      .idInput,
      .pwInput {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }

      .idInput label,
      .pwInput label {
        width: 70px;
        font-size: 1.1em;
      }

      .idInput input,
      .pwInput input {
        padding: 5px;
        margin-left: 10px;
        border-radius: 5px;
        border: 1px solid #333;
        flex: 1;
      }
    }
    .loginButton {
      padding: 10px 30px;
      border: none;
      border-radius: 10px;
      font-size: 1.2em;
      background-color: var(--LIGHTBLUE);
      margin-bottom: 50px;

      &:hover {
        cursor: pointer;
        background-color: var(--DARKBLUE);
        color: white;
      }
    }
  }
  .forgotbox {
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      border: none;
      background: none;
      font-size: 1em;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .findId button {
    margin-left: 70px;
  }
  .findPw button {
    margin-left: 50px;
  }

  .noJoin {
    border: 2px solid #ebeaea;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .noMember,
  .noPartner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .noMember {
    margin-bottom: 10px;
  }

  .noMember button,
  .noPartner button {
    margin-left: 50px;
    border: none;
    background: none;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    .loginType {
      width: 400px;
    }
    .noJoin {
      width: 400px;
    }
  }
`;

export default LoginStyle;

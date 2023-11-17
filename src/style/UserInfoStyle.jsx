import { styled } from "styled-components";
const UserInfoComp = styled.div`
  width: 100%;
  padding: 60px 0;
  .container {
    display: flex;
    position: relative;
    .userProfile {
      flex-grow: 3;
      h2 {
        margin-bottom: 20px;
        font-weight: 600;
      }
      .profileImg {
        width: 80%;
        padding-bottom: 80%;
        position: relative;
        overflow: hidden;
        border: 1px solid #ccc;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
        }
      }
    }
    .userContent {
      flex-grow: 7;
      height: 500px;
      font-size: 1.4em;
      letter-spacing: -0.8px;
      padding-top: 10%;
      .userBox {
        display: flex;
        margin-bottom: 30px;
        .title {
          width: 16%;
          font-weight: 600;
        }
      }
    }
    .userModification {
      position: absolute;
      right: 0;
      button {
        border: none;
        letter-spacing: 1.4px;
        font-size: 1.1em;
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
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 0;
    .container {
      flex-direction: column;
      .userProfile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        h2 {
          font-size: 3em;
          margin-bottom: 30px;
        }
      }
      .userContent {
        height: 340px;
      }
      .userModification {
        width: 100%;
        bottom: -30px;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export default UserInfoComp;

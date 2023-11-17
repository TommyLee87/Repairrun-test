import { styled } from "styled-components";

const PartnerInfoComp = styled.section`
  width: 100%;
  padding: 60px 0;
  .container {
    display: flex;
    position: relative;
    .infoHeader {
      flex-grow: 3;
      display: flex;
      flex-direction: column;
      h2 {
        margin-bottom: 20px;
        font-weight: 600;
      }
      .logo {
        width: 80%;
        padding-bottom: 80%;
        position: relative;
        overflow: hidden;
        border: 1px solid #ccc;
        border-radius: 20px;
        img {
          width: 100%;
          position: absolute;
        }
      }
    }
    .ptninfo {
      flex-grow: 7;
      height: 400px;
      font-size: 1.4em;
      letter-spacing: -0.8px;
      padding-top: 8%;
      .info-box {
        display: flex;
        margin-bottom: 30px;
        .title {
          width: 16%;
          font-weight: 600;
        }
        .desc {
          /* line-height: 1.6; */
        }
      }
    }
    .btnBox {
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
      .infoHeader {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        h2 {
          font-size: 3em;
          margin-bottom: 30px;
        }
      }
      .ptninfo {
        height: 340px;
      }

      .btnBox {
        width: 100%;
        bottom: 20px;
        display: flex;
        justify-content: center;
      }
    }
  }
`;
export default PartnerInfoComp;

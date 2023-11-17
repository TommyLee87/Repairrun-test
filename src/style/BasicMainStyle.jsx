import styled from "styled-components";
import bannerpc from "../images/mainpage_banner_pc.jpg";
import bannermo from "../images/mainpage_banner_mo.jpg";
import meeting from "../images/meeting.jpg";
import delivery from "../images/delivery.jpg";
import connection from "../images/connection.jpg";

// 메인 배너
export const BannerStyle = styled.section`
  width: 100%;
  text-align: center;
  background-image: url(${bannerpc});
  background-size: cover;
  background-position: center;
  outline: 1px solid #999;
  margin-bottom: 180px;
  .mainBanner {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 80px 0;
    .container {
      .bannerText {
        margin-bottom: 80px;
        h2 {
          color: white;
        }
      }
      .matching {
        display: flex;
        justify-content: center;
        flex-direction: row;

        .fastButton,
        .generalButton {
          border: 1px solid grey;
          border-radius: 10px;
          padding: 15px 20px;
          background-color: rgba(0, 0, 0, 0.5);
          font-size: 1.2em;
          color: white;
          &:hover {
            background-color: var(--LIGHTBLUE);
            color: #333;
            cursor: pointer;
          }
        }
        .fastButton {
          margin-right: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    background-image: url(${bannermo});
    margin-bottom: 100px;
    .mainBanner {
      background-color: rgba(0, 0, 0, 0.4);
      .container {
        .bannerText {
          font-size: 0.8em;
        }
      }
    }
  }
`;

//// 리페어런 찾는 이유
export const ReasonStyle = styled.div`
  margin-bottom: 150px;
  padding: 30px 0;
  background-color: var(--IVORY);
  .container {
    .whyText {
      padding: 40px 0;
      .wtxt {
        font-size: 2.5em;
        padding-bottom: 20px;
        font-weight: 600;
      }
    }
    .reasonSet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 3;
      grid-template-areas:
        "reason1 reason2"
        "reason3 reason4"
        "reason5 reason6";
      gap: 50px;
      margin-bottom: 30px;
      line-height: 1.6em;

      .reason1 {
        grid-area: reason1;
        padding: 180px;
        background-image: url(${meeting});
        background-position: center;
        background-size: cover;
        border-radius: 20px;
      }
      .reason2 {
        grid-area: reason2;
        padding: 0 10px;
        margin: auto;
        font-size: 1.2em;

        .repairR {
          font-size: 1.4em;
          line-height: 3em;
          font-weight: 600;
        }
      }
      .reason3 {
        grid-area: reason3;
        padding: 0 10px;
        margin: auto;
        font-size: 1.2em;
        .repairR {
          font-size: 1.4em;
          line-height: 3em;
          font-weight: 600;
        }
      }
      .reason4 {
        grid-area: reason4;
        padding: 180px;
        background-image: url(${delivery});
        background-position: center;
        background-size: cover;
        border-radius: 20px;
      }
      .reason5 {
        grid-area: reason5;
        padding: 180px;
        background-image: url(${connection});
        background-position: center;
        background-size: cover;
        border-radius: 20px;
      }
      .reason6 {
        grid-area: reason6;
        padding: 0 10px;
        margin: auto;
        font-size: 1.2em;
        .repairR {
          font-size: 1.4em;
          line-height: 3em;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
    .container {
      .reasonSet {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: 6;
        grid-template-areas:
          "reason1"
          "reason2"
          "reason4"
          "reason3"
          "reason5"
          "reason6";
        row-gap: 0px;
        .reason2 {
          margin-bottom: 50px;
        }
        .reason3 {
          margin-bottom: 50px;
        }
        .reason6 {
        }
      }
    }
  }
`;

export const bestPartnerStyle = {
  fontSize: "2em",
  textAlign: "center",
  fontWeight: "600",
};

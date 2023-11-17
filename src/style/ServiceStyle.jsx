import styled from "styled-components";

const ServiceComp = styled.div`
  min-height: 40vw;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px 0;
    padding-bottom: 130px;
    .noticeHeader {
      margin-bottom: 100px;
      font-weight: 600;
    }
    .noticeMap {
      width: 80%;
      margin: 0 auto;
      li {
        position: relative;
        border-bottom: 1px solid var(--GREY);
        font-weight: 600;
        font-size: 1.3rem;
        padding-bottom: 10px;
        .box {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          .noticeDateBox {
            color: #ccc;
            font-size: 1.1rem;
            padding-right: 25px;
          }
        }

        .test {
          transition: 0.4s ease-in;
          overflow: hidden;
          height: 0;
          padding: 0;
          line-height: 1.6;
          font-size: 0.8em;
          &.active {
            overflow: visible;
            height: auto;
            padding: 40px 0;
          }
          p {
            margin: 0 auto;
            width: 80%;
            flex-wrap: wrap;
            border-radius: 10px;
            background-color: var(--GREY);
            padding: 20px;
          }
        }
      }

      svg {
        color: var(--GREY);
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
      }
    }
  }
`;

export default ServiceComp;

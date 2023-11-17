import styled, { css } from "styled-components";
// 사진 등록 컴포넌트
export const ImgUploadComp = styled.section`
  width: 100%;
  padding: 60px 0;
  .container {
    /* border: 1px solid darkgray; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    .title {
      width: 100%;
      h3 {
        text-align: center;
        font-weight: 400;
        padding: 20px;
        font-size: 1.5rem;

        span {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
      p {
        font-size: 1.3rem;
        font-weight: 600;
        text-align: left;
        padding-bottom: 10px;
      }
    }
    .exampleImgContainer {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      p {
        text-align: center;
        font-weight: 400;

        span {
          font-size: 35px;
          font-weight: 600;
        }
      }
      .imgBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* border: 1px solid darkgray; */
        padding-top: 30px;
        img {
          width: 80%;
          position: relative;
          overflow: hidden;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        p {
          padding: 20px;
        }
      }
    }
    .guideText {
      padding: 80px;
      width: 100%;
      background-color: var(--GREY);
      font-size: 1.3rem;
      font-weight: 400;

      span {
        font-size: 1.5rem;
        color: var(--DARKBLUE);
        font-weight: 600;
      }
      p {
        font-size: 1.3rem;
        text-align: center;
        font-weight: 400;
        padding: 10px;
      }
    }

    .uploadBox {
      /* border: 1px solid red; */
      display: grid;
      grid-template-columns: repeat (4, minmax(100px, 1fr));
      /* grid-template-rows: 3; */
      gap: 10px;
      width: 100%;

      grid-template-areas:
        " textbox1 textbox2 . . "
        " img1 img2 img3 img4 "
        " input1 input2 input3 input4 ";

      .textBox {
        padding-top: 5%;
        p {
          text-align: left;
          font-weight: 600;
          font-size: 1.3rem;
          color: black;
        }
      }
      &.textBox1 {
        grid-area: textbox1;
      }
      .textBox2 {
        grid-area: textbox2;
      }

      .itemImg {
        outline: 1px solid var(--GREY);
        grid-area: img1;
        padding-bottom: 90%;
        overflow: hidden;
        width: 90%;
        position: relative;
        img {
          position: absolute;
          border-radius: 5px;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        &.itemImg1 {
          grid-area: img1;
        }
        &.itemImg2 {
          grid-area: img2;
        }
        &.itemImg3 {
          grid-area: img3;
        }
        &.itemImg4 {
          grid-area: img4;
        }
      }
      .imgInput {
        padding-bottom: 15%;
        &.imgInput1 {
          grid-area: input1;
        }
        &.imgInput2 {
          grid-area: input2;
        }
        &.imgInput3 {
          grid-area: input3;
        }
        &.imgInput4 {
          grid-area: input4;
        }
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(4, minmax(100px, 1fr));
        gap: 10px;
        padding: 0;
        /* justify-content: center; */
        /* 이미지 업로드 공간의 크기를 정사각형으로 유지 */
      }
    }
    .buttonContainer {
      align-items: flex-end;

      button {
        width: 150px;
        height: 45px;
        border-radius: 30px;
        border-style: none;
        background-color: var(--DARKBLUE);
        color: white;
        font-weight: 600;
        font-size: 1.3rem;
        margin: 20px;
        &:hover {
          cursor: pointer;
          background-color: var(--MIDBLUE);
        }
      }
    }
  }
`;

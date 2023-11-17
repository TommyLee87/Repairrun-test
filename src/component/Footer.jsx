import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--DARKBLUE);

  .container {
    padding-top: 30px;
    padding-bottom: 80px;
    p,
    div {
      color: white;
    }

    .footer-menu {
      display: flex;
      margin-bottom: 40px;
      li {
        color: #ccc;
        transition: 0.3s ease-in;
        &:hover {
          cursor: pointer;
          color: white;
        }
        &:first-child {
          margin-right: 20px;
          position: relative;

          &::after {
            display: block;
            content: "";
            width: 2px;
            height: 100%;
            background-color: white;
            position: absolute;
            top: 1px;
            right: -11px;
            cursor: default;
          }
        }
      }
    }

    .info {
      line-height: 1.8;
      margin-bottom: 30px;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className="container">
          <ul className="footer-menu">
            <li>이용약관</li>
            <li>개인정보 취급방침</li>
          </ul>
          <div className="info">
            <p>(주) 리페어런</p>
            <p>대표자 김현지</p>
            <p>주소: 서울특별시 강남구 역삼로</p>
            <p>전화번호 02-123-4567</p>
            <p>이메일 : dsafb12@naver.com</p>
            <p>통신사업자 신고번호:제 1234-서울서초-5678호</p>
          </div>
          <div className="copyright">
            CopyRight © 2023 RepairRun All Rights Reserved.
          </div>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;

import PartnerMiniList from "../component/PartnerMiniList";
import ptnminiBanner from "../images/ptnMiniBanner.png";
import { styled } from "styled-components";
const PtnListBanner = styled.section`
  width: 100%;
  height: 300px;
  background-image: url(${ptnminiBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .container {
    padding-top: 100px;
    text-align: center;
    h2,
    p {
      color: white;
    }
    h2 {
      margin-bottom: 50px;
    }
  }
`;

const PartnerList = () => {
  return (
    <>
      <PtnListBanner>
        <div className="cover">
          <div className="container">
            <h2>다양한 수선 전문가를 만나보세요</h2>
            <p>원하는 전문가와 만나 수선을 완성하세요!</p>
          </div>
        </div>
      </PtnListBanner>
      <PartnerMiniList />
    </>
  );
};
export default PartnerList;

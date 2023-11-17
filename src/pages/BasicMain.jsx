import { BannerStyle, ReasonStyle } from "../style/BasicMainStyle";
import LogoSlide from "../component/Slide";
import { useNavigate } from "react-router-dom";
import ReviewList from "../component/ReviewList";
import Fix from "../component/BeforeAfter";
import { bestPartnerStyle } from "../style/BasicMainStyle";

const MainBody = () => {
  const navigate = useNavigate();
  const fastMatchingClick = () => {
    navigate("/neworder/FastRepair");
  };
  const generalMatchingClick = () => {
    navigate("/neworder/basicrepair");
  };

  return (
    <BannerStyle>
      <div className="mainBanner">
        <div className="container">
          <div className="bannerText">
            <h2>나에게 필요한 매칭 서비스를 선택하세요.</h2>
          </div>
          <div className="matching">
            <div className="fastButton" onClick={fastMatchingClick}>
              빠른 매칭
            </div>
            <div className="generalButton" onClick={generalMatchingClick}>
              일반 매칭
            </div>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};

const Reason = () => {
  return (
    <ReasonStyle>
      <div className="container">
        <div className="whyText">
          <p className="wtxt">
            리페어런이 오픈과 동시에 정상의 자리를 차지한 이유!
          </p>
        </div>
        <div className="reasonSet">
          <div className="reason reason1"></div>
          <div className="reason reason2">
            <p className="repairR">지속적인 노력</p>보다 가까이에서 소비자분들께
            퀄리티 높은 서비스를 제공하기 위하여 더 나은 업체 발굴 및 파트너쉽
            체결, 서비스 지역 확대 방안 모색 등 끊임없이 노력하고 있습니다.
            여러분의 일상에 여유를 찾아드리겠습니다.
          </div>
          <div className="reason reason3">
            <p className="repairR">빠른 배송 서비스</p>
            서비스 신청 후 문앞에 내놓으시면 리페어런에서 자체 방문하여
            수거합니다. 이후 수선 상황 및 배달까지의 진행 현황을 조회 하실 수
            있습니다. 빠른 매칭을 통한 간단한 수선은 당일 완료도 가능합니다.
          </div>
          <div className="reason reason4"></div>
          <div className="reason reason5"></div>
          <div className="reason reason6">
            <p className="repairR">최고의 매칭 서비스</p>
            리페어런의 파트너는 최고급 장비와 브랜드 제품에 대한 높은 이해도 및
            다양한 경험을 보유하고 있는 업체만이 선정됩니다. 소비자가 주체적으로
            파트너사의 후기를 보거나 직접적인 상담을 통해 원하는 곳을 선택 할 수
            있습니다. 최고의 매칭 서비스를 누려보세요.
          </div>
        </div>
      </div>
    </ReasonStyle>
  );
};

const BasicMain = () => {
  return (
    <>
      <MainBody />
      <Fix />
      <Reason />
      <div className="container">
        <p style={bestPartnerStyle}>베스트 파트너 & 후기</p>
        <ReviewList nofilter={"nofilter"} />
      </div>
      <LogoSlide />
    </>
  );
};

export default BasicMain;

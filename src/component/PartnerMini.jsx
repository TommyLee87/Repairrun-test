import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PartnerMiniBlock = styled.div`
  width: 45%;
  margin-bottom: 30px;
  cursor: pointer;
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .wrap {
      width: 48%;
      height: auto;
      .logoImg {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid #ccc;
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        .item {
          border-radius: 10px;
          background-color: var(--GREY);
          transition: 0.3s ease-in;
          &.name {
            margin-bottom: 10px;
            flex-grow: 4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            h3 {
              font-weight: 600;
              margin-bottom: 30px;
              font-size: 25px;
            }
            p {
            }
          }
          &.rating {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 2;
            text-align: center;
            font-size: 25px;
          }
        }
      }
    }
  }
  .wrapper:hover .wrap .item {
    background-color: var(--MIDBLUE);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PartnerMini = ({ ptn }) => {
  const navigate = useNavigate();
  return (
    <PartnerMiniBlock>
      <div
        className="wrapper"
        onClick={() => {
          navigate(`/partnerlist/partner/${ptn.ptnId}`);
        }}
      >
        <div className="wrap">
          <img className="logoImg" src={ptn.ptnLogo} alt="logo" />
        </div>
        <div className="wrap">
          <div className="item name">
            <h3>{ptn.ptnName}</h3>
            <p>{ptn.repairItem}</p>
          </div>
          <div className="item rating">{ptn.rating}</div>
        </div>
      </div>
    </PartnerMiniBlock>
  );
};

export default PartnerMini;

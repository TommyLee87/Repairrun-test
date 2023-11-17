import PartnerMini from "./PartnerMini";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";
const PartnerMiniListComp = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PartnerMiniList = () => {
  const [ptnList, setPtnList] = useState(null);

  useEffect(() => {
    const fetchPtnList = async () => {
      try {
        const res = await PartnerApi.partnerList();
        if (res.data !== null) setPtnList(res.data);
        console.log("파트너 리스트" + res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPtnList();
    console.log(ptnList);
  }, []);
  return (
    <>
      <PartnerMiniListComp>
        <div className="container">
          {ptnList &&
            ptnList.map((ptn) => <PartnerMini key={ptn.index} ptn={ptn} />)}
        </div>
      </PartnerMiniListComp>
    </>
  );
};
export default PartnerMiniList;

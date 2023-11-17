import PartnerInfo from "../component/PartnerInfo";
import RepairList from "../component/RepairList";
import OrderList from "../component/OrderList";
import ReviewList from "../component/ReviewList";
import { useParams } from "react-router-dom";
import Modal from "../util/Modal";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserStore";

const PartnerMain = () => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const { id } = useParams();
  const ptnId = id ? id : window.localStorage.getItem("userId");
  console.log("파트너메인 id" + id);
  const [name, setName] = useState(window.localStorage.getItem("ptnName"));
  useEffect(() => {
    setName(window.localStorage.getItem("ptnName"));
  }, [name]);

  return (
    <>
      <PartnerInfo selPtn={ptnId} loginType={loginStatus} />
      <RepairList selPtn={ptnId} loginType={loginStatus} />
      {loginStatus === "partner" && <OrderList loginType={1} />}
      <div className="container">
        <h2>리뷰</h2>
      </div>
      <ReviewList selPtn={ptnId} nofilter={"nofilter"} search={name} />
    </>
  );
};
export default PartnerMain;

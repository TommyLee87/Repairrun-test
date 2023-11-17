import React, { useState, useEffect } from "react";
// import ImgUpload from "../component/ImgUpload";
import OrderCheck from "../component/OrderCheck";
import PartnerSelect from "../component/PartnerSelect";
import Payment from "../component/Payment";
import SlideTitle from "../component/SlideTitle";
import ImgUpload from "../component/ImgUpload";

const GeneralStep = () => {
  const [currentPage, setCurrentPage] = useState("imgupload");
  const handleNext = () => {
    setCurrentPage("ordercheck");
  };
  const handleNext2 = () => {
    setCurrentPage("slidetitle");
  };
  const handleNext3 = () => {
    setCurrentPage("partnerselect");
  };
  const handleNext4 = () => {
    setCurrentPage("payment");
  };

  return (
    <>
      {currentPage === "imgupload" && <ImgUpload onNext={handleNext} />}
      {currentPage === "ordercheck" && <OrderCheck onNext={handleNext2} />}
      {currentPage === "slidetitle" && <SlideTitle onNext={handleNext3} />}
      {currentPage === "partnerselect" && (
        <PartnerSelect onNext={handleNext4} />
      )}
      {currentPage === "payment" && <Payment />}
    </>
  );
};
export default GeneralStep;

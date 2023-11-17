import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemSelect from "../component/ItemSelect";
import Brandinput from "../component/BrandInput";
import Request from "../component/Request";
import { UserContext } from "../context/UserStore";

const BasicRepair = () => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus !== "member") navigate("/login");
  }, []);

  const [currentPage, setCurrentPage] = useState("itemselect");

  const handleNext = () => {
    setCurrentPage("brandinput");
  };
  const handleRequest = () => {
    setCurrentPage("request");
  };

  return (
    <>
      {currentPage === "itemselect" && <ItemSelect onNext={handleNext} />}
      {currentPage === "brandinput" && <Brandinput onNext={handleRequest} />}
      {currentPage === "request" && <Request />}
    </>
  );
};
export default BasicRepair;

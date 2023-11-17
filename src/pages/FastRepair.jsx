import React, { useState, useEffect, useContext } from "react";
import Brandinput from "../component/BrandInput";
import Location from "../component/Location";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";

export const FastRepair = () => {
  const [currnentPage, setCurrentPage] = useState("location");

  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus !== "member") navigate("/login");
  }, []);

  const handleNext = () => {
    setCurrentPage("brandinput");
  };
  return (
    <>
      {currnentPage === "location" && <Location onNext={handleNext} />}
      {currnentPage === "brandinput" && <Brandinput />}
    </>
  );
};

export default FastRepair;

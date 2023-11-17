import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewOrderComp, TransBtn } from "../component/ButtonContainer";
import { UserContext } from "../context/UserStore";

const NewOrder = () => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  //품목 선택시 세부수선항목 보내기위함
  useEffect(() => {
    if (loginStatus !== "member") navigate("/login");
    window.localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const onClickBtn = (e) => {
    switch (e) {
      case 1:
        navigate("/neworder/FastRepair");
        break;
      case 2:
        navigate("/neworder/BasicRepair");
        break;
      default:
    }
  };

  return (
    <>
      <NewOrderComp>
        <div className="container">
          <TransBtn onClick={() => onClickBtn(1)}>빠른 매칭</TransBtn>
          <TransBtn onClick={() => onClickBtn(2)}>일반 매칭</TransBtn>
        </div>
      </NewOrderComp>
    </>
  );
};

export default NewOrder;

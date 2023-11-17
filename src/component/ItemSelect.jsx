import React, { useState, useEffect } from "react";
import { ItemSelectComp } from "../style/BasicStyle";
import bag from "../images/bag.png";
import shoes from "../images/shoes.png";
import clothes from "../images/clothes.png";
import walletBelt from "../images/walletBelt.png";

export const ItemSelect = ({ onNext }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  //품목 선택시 세부수선항목 보내기위함
  useEffect(() => {
    window.localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <ItemSelectComp>
        <div className="container">
          <div className="itemSelect">
            <h3>
              <span>어떤 수선</span>이 필요하신가요?
            </h3>
            <div className="itemImg">
              <button
                className={`itemButton ${
                  selectedItem === "가방" ? "selected" : ""
                }`}
                onClick={() => handleItemClick("가방")}
              >
                <img src={bag} alt="bag" />
                <p>가방</p>
              </button>
              <button
                className={`itemButton ${
                  selectedItem === "신발" ? "selected" : ""
                }`}
                onClick={() => handleItemClick("신발")}
              >
                <img src={shoes} alt="shoes" />
                <p>신발</p>
              </button>
              <button
                className={`itemButton ${
                  selectedItem === "의류" ? "selected" : ""
                }`}
                onClick={() => handleItemClick("의류")}
              >
                <img src={clothes} alt="clothes" />
                <p>의류</p>
              </button>
              <button
                className={`itemButton ${
                  selectedItem === "지갑벨트" ? "selected" : ""
                }`}
                onClick={() => handleItemClick("지갑벨트")}
              >
                <img src={walletBelt} alt="walletBelt" />
                <p>지갑/벨트</p>
              </button>
            </div>
          </div>
          <div className="buttonContainer">
            <button onClick={onNext} disabled={!selectedItem}>
              다음
            </button>
          </div>
        </div>
      </ItemSelectComp>
    </>
  );
};

export default ItemSelect;

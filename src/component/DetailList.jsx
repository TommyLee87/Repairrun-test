import { useState, useEffect } from "react";
import PartnerApi from "../api/PartnerApi";

const DetailList = ({ det, disabled, save, setSave }) => {
  const [daysVal, setDaysVal] = useState(det.days);
  const [priceVal, setPriceVal] = useState(det.price);
  const ptnId = window.localStorage.getItem("userId");
  const repairDetail = det.name;

  useEffect(() => {
    save && updateDet();
  }, [save]);

  const onDaysChange = (e) => {
    setDaysVal(e.target.value);
  };
  const onPriceChange = (e) => {
    setPriceVal(e.target.value);
  };

  const updateDet = async () => {
    setSave(false);
    try {
      const res = await PartnerApi.updateDetail(
        ptnId,
        repairDetail,
        daysVal,
        priceVal
      );
      if (res.data === true) {
        console.log("수선항목 업데이트 성공!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tbody>
      <tr key={det.name}>
        <td className="name">{repairDetail}</td>
        <td className="days">
          <input
            type="number"
            defaultValue={daysVal}
            disabled={disabled}
            onChange={onDaysChange}
          />
          일
        </td>
        <td className="price">
          <input
            type="number"
            defaultValue={priceVal}
            disabled={disabled}
            onChange={onPriceChange}
          />
        </td>
      </tr>
    </tbody>
  );
};
export default DetailList;

import { useState, useEffect } from "react";
import DetailList from "./DetailList";

const Repair = ({ data, loginType }) => {
  const { item, detail } = data;

  const [isModify, setIsModify] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSave, setIsSave] = useState(false);

  const clickModify = () => {
    isModify ? setIsModify(false) : setIsModify(true);
    if (isDisabled) {
      setIsDisabled(false);
      setIsSave(false);
    } else {
      setIsDisabled(true);
      setIsSave(true);
    }
  };
  return (
    <>
      <div className="repairBox">
        <h3>{item}</h3>
        <table>
          <thead>
            <tr>
              <th>품목</th>
              <th>소요일수</th>
              <th>수선비용</th>
            </tr>
          </thead>
          {detail &&
            detail.map((det) => (
              <DetailList
                key={det.name}
                det={det}
                disabled={isDisabled}
                save={isSave}
                setSave={setIsSave}
              />
            ))}
        </table>
        {loginType === "partner" && (
          <div className="btnBox">
            {isModify ? (
              <button onClick={clickModify}>수정</button>
            ) : (
              <button onClick={clickModify}>확인</button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Repair;

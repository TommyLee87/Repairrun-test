import React, { useState, useEffect } from "react";
import { PaymentComp } from "../style/PaymentStyle";
import Checkbox from "../util/Checkbox";
import { useNavigate } from "react-router-dom";
import OrderApi from "../api/OrderApi";
import Modal from "../util/Modal";
import CouponApi from "../api/CouponApi";

export const Payment = ({ onNext }) => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    // navigate("/mypage");
    addNewOrder();
  };

  const userId = window.localStorage.getItem("userId");
  const tempData = {
    userName: window.localStorage.getItem("userName"),
    userPhone: window.localStorage.getItem("userPhone"),
    userAddr: window.localStorage.getItem("userAddr"),
    repairPrice: window.localStorage.getItem("repairPrice"),
    delivery: Number("3000"),
    ptnNum: window.localStorage.getItem("ptnNum"),
    ptnId: window.localStorage.getItem("ptnId"),
    brand: window.localStorage.getItem("brandInput"),
    request: window.localStorage.getItem("additionalText"),
    detail: window.localStorage.getItem("selectedOption"),
    days: window.localStorage.getItem("repairDays"),
    imgFull: window.localStorage.getItem("fullImg"),
    imgDet01: window.localStorage.getItem("insideImg"),
    imgDet02: window.localStorage.getItem("sideImg"),
    imgDet03: window.localStorage.getItem("spotImg"),
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const orderDate = year + month + day;
  const orderDate2 = orderDate.slice(-6);

  console.log(orderDate2);

  const orderNum = orderDate2 + tempData.ptnNum;
  console.log("orderNum" + orderNum);

  //팝업 처리
  const [openModal, setModalOpen] = useState(false);
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  // 약관동의 체크 관련
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [discount, setDiscount] = useState(0);

  const onCheckedChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        setChecked1(!checked1);
        break;
      case 2:
        setChecked2(!checked2);
        break;
      case 3:
        setChecked3(!checked3);
        break;
      default:
        // 전체약관동의 체크박스를 선택하면 나머지 세 개의 체크박스도 선택/해제되도록 설정
        setCheckedAll(!checkedAll);
        setChecked1(!checkedAll);
        setChecked2(!checkedAll);
        setChecked3(!checkedAll);
        break;
    }
  };
  const [couponList, setCouponList] = useState(null);

  const [total, setTotal] = useState(
    Number(tempData.repairPrice) + tempData.delivery - discount
  );
  useEffect(() => {
    if (checked1 && checked2 && checked3) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked1, checked2, checked3, userId, discount]);
  useEffect(() => {
    console.log(userId);
    const fetchCoupon = async () => {
      try {
        const res = await CouponApi.coupon(userId);
        if (res.data !== null) setCouponList(res.data);
        console.log(couponList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCoupon();
    console.log(couponList);
  }, []);

  useEffect(() => {
    // 최신 상태 값을 기반으로 total 계산
    const newTotal =
      Number(tempData.repairPrice) + tempData.delivery - discount;

    // total 상태값 업데이트
    setTotal(newTotal);
  }, [tempData.repairPrice, tempData.delivery, discount]);

  const addNewOrder = async () => {
    try {
      const res = await OrderApi.newOrder(
        orderNum,
        userId,
        tempData.ptnId,
        tempData.brand,
        tempData.detail,
        tempData.request,
        total,
        tempData.days,
        tempData.imgFull,
        tempData.imgDet01,
        tempData.imgDet02,
        tempData.imgDet03
      );
      if (res.data === true) {
        console.log("새 주문 성공!");
        setModalOpen(true);
        setModalHeader("결제 완료");
        setModalMsg("결제가 완료되었습니다");
        setModalType("주문성공");
      }
    } catch (err) {
      console.log(err);
      setModalOpen(true);
      setModalHeader("오류");
      setModalMsg("서버와의 연결이 끊어졌습니다!");
      setModalType("");
    }
  };
  return (
    <>
      <PaymentComp>
        <div className="container">
          <h3>결제 후 접수가 완료됩니다.</h3>
          <div className="paymentContainer">
            <div className="payBox">
              <div className="labelBox">
                <p className="title">수거 / 배송 주소</p>
              </div>
              <div className="paymentBox">
                <div className="name box">
                  <div className="label">주문자</div>
                  <p>{tempData.userName}</p>
                </div>
                <div className="phone box">
                  <div className="label">연락처</div>
                  <p>{tempData.userPhone}</p>
                </div>
                <div className="addr box">
                  <div className="label">주 소</div>
                  <p>{tempData.userAddr}</p>
                </div>
              </div>
            </div>

            {/* 카드정보 넣는곳 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">결제 정보</p>
              </div>
              {/* input 하는 곳 */}
              <div className="cardSection">
                <div className="cardBox">
                  <div className="cardNumBox">
                    <p>카드 번호</p>
                    <div className="cardNuminput">
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                      <p>-</p>
                      <input type="number" />
                    </div>
                  </div>
                  <div className="expireDate">
                    <p>유효기간</p>
                    <input type="text" placeholder="MMYY" />
                  </div>
                  <div className="CVC">
                    <p>CVC</p>
                    <input type="text" placeholder="카드 뒷면 3자리" />
                  </div>
                  <div className="secret">
                    <p>비밀번호</p>
                    <input type="text" placeholder="카드 비밀번호 앞 두자리" />
                  </div>
                </div>
                {/* 카드 약관동의 */}
                <div className="agreementBox">
                  <div className="agreement">
                    <p>약관 동의</p>
                    <Checkbox
                      className="agreeAll"
                      children="전체약관동의"
                      checked={checkedAll}
                      onCheckedChange={() => onCheckedChange()}
                    />
                    <Checkbox
                      children="리페어런 개인(신용)정보 수집 및 이용 동의"
                      checked={checked1}
                      onCheckedChange={() => onCheckedChange(1)}
                    />
                    <Checkbox
                      children="리페어런 → 카드사 개인(신용)정보 제공 동의"
                      checked={checked2}
                      onCheckedChange={() => onCheckedChange(2)}
                    />
                    <Checkbox
                      children="카드사 → 리페어런 개인(신용)정보 제공 동의"
                      checked={checked3}
                      onCheckedChange={() => onCheckedChange(3)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 쿠폰 정보 불러오는 곳 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">쿠폰</p>
              </div>
              <div className="myCoupon">
                <select
                  onChange={(e) => {
                    const selectedCouponType = e.target.value;
                    const selectedCoupon = couponList.find(
                      (coupon) => coupon.couponType === selectedCouponType
                    );
                    const newDiscount = selectedCoupon
                      ? selectedCoupon.discountAmount
                      : 0;

                    // discount 상태값 업데이트
                    setDiscount(newDiscount);

                    // discount를 고려한 새로운 total 계산
                    const newTotal =
                      Number(tempData.repairPrice) +
                      tempData.delivery -
                      newDiscount;

                    // total 상태값 업데이트
                    setTotal(newTotal);
                  }}
                >
                  <option value="">선택안함</option>
                  {couponList &&
                    couponList.map((coupon) => (
                      <option key={coupon.couponType} value={coupon.couponType}>
                        {coupon.couponType}
                      </option>
                    ))}
                </select>
              </div>
              <div className="couponBox"></div>
            </div>
            {/* <p></p>
                <p>{tempData.couponType2}</p> */}

            {/* 최종확인 */}
            <div className="payBox">
              <div className="labelBox">
                <p className="title">결제 상세</p>
              </div>
              <div className="totalArea">
                <div className="amount">
                  <div className="estimate">
                    <p>견적 금액</p>
                    <p>{tempData.repairPrice}</p>
                  </div>
                  <div className="deliveryFee">
                    <p>배송비</p>
                    <p>{tempData.delivery}</p>
                  </div>
                  <div className="coupon">
                    <p>쿠폰</p>
                    <p>-{discount}</p>
                  </div>
                </div>
                <div className="totalPrice">
                  <p>총 결제 금액</p>
                  <p className="total">{total}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button onClick={handleNextClick}>결제하기</button>
            </div>
          </div>
        </div>
      </PaymentComp>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate("/mypage");
        }}
      ></Modal>
    </>
  );
};
export default Payment;

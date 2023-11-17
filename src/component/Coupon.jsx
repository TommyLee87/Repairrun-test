import CouponApi from "../api/CouponApi";
import CouponComp from "../style/CouponStyle";
import { useEffect, useState } from "react";
const CouponMini = ({ couponMapData }) => {
  return (
    <>
      <div className="Couponex">
        <div className="couponBorder">
          <h3>{couponMapData.couponType}</h3>
          <p>{couponMapData.discountAmount}원 할인</p>
          <p className="couponRightExp">~{couponMapData.endDate}</p>
        </div>
      </div>
    </>
  );
};

const Coupon = () => {
  const [myCouponList, setmyCouponList] = useState(null);

  useEffect(() => {
    console.log("myCouponList");
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    const myCouponData = async () => {
      try {
        const res = await CouponApi.coupon(userId);
        if (res.status !== null) {
          setmyCouponList(res.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    myCouponData();
    console.log("MyCoupon" + myCouponList);
  }, []);
  return (
    <>
      <CouponComp>
        <div className="container">
          <div className="myCoupon">
            <h2>나의 쿠폰</h2>
          </div>
          <div className="couponGift">
            <div className="couponBox">
              {myCouponList && myCouponList !== null ? (
                myCouponList.map((couponMap) => (
                  <CouponMini
                    key={couponMap.couponType}
                    couponMapData={couponMap}
                  />
                ))
              ) : (
                <h3>사용 가능한 쿠폰이 없습니다.</h3>
              )}
            </div>
          </div>
        </div>
      </CouponComp>
    </>
  );
};

export default Coupon;

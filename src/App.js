import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserStore from "./context/UserStore";
import GlobalStyle from "./style/GlobalStyle";
import Header from "./pages/Header";
import BasicMain from "./pages/BasicMain";
import Login from "./pages/Login";
import Join from "./pages/Join";
import NewOrder from "./pages/NewOrder";
import BasicRepair from "./pages/BasicRepair";
import FastRepair from "./pages/FastRepair";
import GeneralStep from "./pages/GeneralStep";
import PartnerList from "./pages/PartnerList";
import ReviewStock from "./pages/ReviewStock";
import MyPage from "./pages/MyPage";
import UpdateInfo from "./pages/UpdateInfo";
import OrderInfo from "./pages/OrderInfo";
import MyReview from "./pages/MyReview";
import PartnerMain from "./pages/PartnerMain";
import PartnerReview from "./pages/PartnerReview";
import ChatRoom from "./pages/ChatRoom";
import Notice from "./pages/Notice";
import FAQ from "./pages/FAQ";
import Footer from "./component/Footer";
import ServiceList from "./component/ServiceList";

import ScrollToTop from "./util/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route element={<Header />}>
                <Route path="/" element={<BasicMain />}></Route>
                {/*************** 로그인 / 회원가입 *****************/}
                <Route path="/Login" element={<Login />} />
                <Route path="/Join/:type" element={<Join />} />
                {/************ 일반 회원 ******************/}
                {/* 서비스 신청 */}
                <Route path="/NewOrder" element={<NewOrder />} />
                <Route path="/NewOrder/BasicRepair" element={<BasicRepair />} />
                <Route path="/NewOrder/FastRepair" element={<FastRepair />} />
                <Route path="/NewOrder/GeneralStep" element={<GeneralStep />} />
                {/* RR파트너스 (비회원 조회 가능) */}
                <Route path="/PartnerList" element={<PartnerList />} />
                <Route
                  path="/PartnerList/Partner/:id"
                  element={<PartnerMain />}
                />
                <Route path="/ReviewStock" element={<ReviewStock />} />
                {/* 마이페이지 */}
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MyPage/UpdateInfo/:id" element={<UpdateInfo />} />
                <Route
                  path="/MyPage/OrderInfo/:ordernum"
                  element={<OrderInfo />}
                />
                <Route path="/MyPage/MyReview" element={<MyReview />} />
                {/************** 파트너회원 *****************/}
                <Route path="/PartnerMain" element={<PartnerMain />} />
                {/* 정보수정(파트너) */}
                <Route
                  path="/PartnerMain/UpdateInfo/:id"
                  element={<UpdateInfo />}
                />
                {/* 주문형황(파트너) */}
                <Route
                  path="/PartnerMain/OrderInfo/:orderNum"
                  element={<OrderInfo />}
                />
                {/* 후기관리 */}
                <Route
                  path="/PartnerMain/PartnerReview"
                  element={<PartnerReview />}
                />
                {/***********채팅방***************/}
                <Route path="/ChatRoom/:orderNum" element={<ChatRoom />} />
                {/***************** 고객센터 ********************/}
                {["/Service", "/Service/Notice"].map((path, index) => (
                  <Route key={index} path={path} element={<Notice />} />
                ))}
                <Route path="/Service/FAQ" element={<FAQ />} />
              </Route>
            </Routes>
          </ScrollToTop>
        </Router>
        <Footer />
      </UserStore>
    </>
  );
}

export default App;

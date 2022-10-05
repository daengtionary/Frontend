// Packages import
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

// Pages
import Main from "./pages/main/Main";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import List from "./pages/animalhospital/List";
import MyPage from "./pages/mypage/MyPage";
import Detail from "./pages/detail/Detail";
import Service from "./pages/service/Service";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ChatFloatButton from "./components/chatFloatButton/ChatFloatButton";
import ChatModal from "./components/chatModal/ChatModal";
import Trade from "./pages/trade/Trade";
import TradeDetail from "./pages/tradeDetail/TradeDetail";
import TradePosting from "./pages/tradePosting/TradePosting";
import Community from "./pages/community/Community";
import CommunityDetail from "./pages/communityDetail/CommunityDetail";
import Matching from "./pages/matching/Matching";
import MatchingDetail from "./pages/matching/MatchingDetail";
import MatchingPosting from "./pages/matching/MatchingPosting.js";
import PlacePosting from "./pages/placePosting/PlacePosting";

// Shared
import Kakao from "./shared/kakao";
import ScrollToTop from "./shared/ScrollToTop";
import TopButton from "./shared/TopButton";
import ChatRoom from "./components/chatRoom/ChatRoom";
import DogWalk from "./pages/dogWalk/DogWalk";
import styled from "styled-components";

function App() {

  const [modalOn, setModalOn] = useState(false)
  const [roomOn, setRoomOn] = useState(false)

  return (
    <>
      <Midea>
        <ScrollToTop />
        {modalOn&&<ChatModal setModalOn ={setModalOn} modalOn ={modalOn} setRoomOn ={setRoomOn} roomOn ={roomOn}></ChatModal >}
        {roomOn&&<ChatRoom setRoomOn ={setRoomOn} roomOn ={roomOn}></ChatRoom >}

        {/* <Routes>
          <Route exact path={`/chat/:roomNo`} element ={<ChatRoom/>}/>
        </Routes> */}

        <Header />
        <TopButton setModalOn ={setModalOn} modalOn ={modalOn}/>
        {/* 내일은 탑 버튼에 modalOn을 내려줘보고 버튼으로 테스트해볼 예정 */}
        <Routes>
          <Route exact path={"/signIn"} element={<SignIn />} />
          <Route exact path={"/signUp"} element={<SignUp />} />
          <Route exact path={"/hospital"} element={<List />} />
          <Route exact path={"/place"} element={<List />} />
          <Route exact path={"/shop"} element={<List />} />
          <Route exact path={"/trade"} element={<Trade />} />
          <Route exact path={"/room"} element={<List />} />
          <Route exact path={"/community"} element={<Community />} />
          <Route exact path={"/community/:id"} element={<CommunityDetail />} />
          <Route exact path={"/mypage"} element={<MyPage />} />
          <Route exact path={"/service"} element={<Service />} />
          <Route exact path={"/detail/:id"} element={<Detail />} />
          <Route exact path={"/tradePosting"} element={<TradePosting />} />
          <Route exact path={"/tradeDetail/:id"} element={<TradeDetail />} />
          <Route exact path={"/kakao/callback"} element={<Kakao />} />
          <Route exact path={"/"} element={<Main />} />
          <Route exact path={"*"} element={<Main />} />
          <Route exact path={"/matching"} element={<Matching />} />
          <Route exact path={"/matchingDetail/:id"} element={<MatchingDetail />} />
          <Route exact path={"/matchingPosting"} element={<MatchingPosting />} />
          <Route exact path={"/dog-walk"} element={<DogWalk />} />
          <Route exact path={"/placeposting"} element={<PlacePosting />} />
        </Routes>
        <Footer />
      </Midea>
    </>
  );
}

export default App;

const Midea = styled.div`
  @media screen and (max-width: 768px) {
    width: 425px;
    height: 100%;
    border-radius: 0;
    /* background-color: #cc00ff50; */
    box-shadow: 0px 0px 10px #ccc;
  }
`;

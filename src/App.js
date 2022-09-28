// Packages import
import { Routes, Route } from "react-router-dom";

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
import PlacePosting from "./pages/placePosting/PlacePosting";

// Shared
import Kakao from "./shared/kakao";
import ScrollToTop from "./shared/ScrollToTop";
import TopButton from "./shared/TopButton";
import DogWalk from "./pages/dogWalk/DogWalk";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      {/* <ChatFloatButton /> */}
      <TopButton />

      <Routes>
        <Route exact path={"/signin"} element={<SignIn />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/hospital"} element={<List />} />
        <Route exact path={"/all"} element={<List />} />
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
        <Route exact path={"chat"} element={<ChatModal />} />
        <Route exact path={"chat/:roomId"} element={<ChatModal />} />
        <Route exact path={"dog-walk"} element={<DogWalk />} />
        <Route exact path={"placeposting"} element={<PlacePosting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

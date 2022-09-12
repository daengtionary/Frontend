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
import Community from "./pages/community/Community";
import CommunityDetail from "./pages/communityDetail/CommunityDetail";
// import ChatModal from "./components/chatModal/ChatModal";

// Shared
import Kakao from "./shared/kakao";
import ScrollToTop from "./shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ChatFloatButton/>
      <Routes>
        <Route exact path={"/signin"} element={<SignIn />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/hospital"} element={<List />} />
        <Route exact path={"/shop"} element={<List />} />
        <Route exact path={"/trade"} element={<List />} />
        <Route exact path={"/room"} element={<List />} />
        <Route exact path={"/community"} element={<Community />} />
        <Route exact path={"/community/:id"} element={<CommunityDetail />} />
        <Route exact path={"/mypage"} element={<MyPage />} />
        <Route exact path={"/service"} element={<Service />} />
        <Route exact path={"/detail/:id"} element={<Detail />} />
        <Route exact path={"/kakao/callback"} element={<Kakao />} />
        <Route exact path={"/"} element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

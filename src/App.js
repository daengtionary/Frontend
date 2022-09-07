// Packages import
import { Routes, Route } from "react-router-dom";

// Pages
import Main from "./pages/main/Main";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import AnimalHospital from "./pages/animalhospital/AnimalHospital";
import MyPage from "./pages/mypage/MyPage";
import Detail from "./pages/detail/Detail";
import Service from "./pages/service/Service";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Shared
import Kakao from "./shared/kakao";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path={"/signin"} element={<SignIn />} />
        <Route exact path={"/signup"} element={<SignUp />} />
        <Route exact path={"/animalhospital"} element={<AnimalHospital />} />
        <Route exact path={"/mypage"} element={<MyPage />} />
        <Route exact path={"/service"} element={<Service />} />
        <Route exact path={"/detail/:id"} element={<Detail />} />
        <Route exact path={"/kakao/callback"} element={<Kakao />} />
        <Route exact path={"/"} element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

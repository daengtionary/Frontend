// Packages import
import { Routes, Route } from 'react-router-dom';

// Pages
import Main from './pages/main/Main';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import AnimalHospital from './pages/animalhospital/AnimalHospital';
import MyPage from './pages/mypage/MyPage';
import Detail from './pages/detail/Detail';
import Service from './pages/service/Service';

// Shared
import Kakao from './shared/kakao';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/animalhospital'} element={<AnimalHospital />} />
        <Route path={'/mypage'} element={<MyPage />} />
        <Route path={'/service'} element={<Service />} />
        <Route path={'/detail/:id'} element={<Detail />} />
        <Route path={'/kakao/callback'} element={<Kakao />} />
      </Routes>
  );
}

export default App;

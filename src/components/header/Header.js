// React
// import { useEffect, Fragment } from "react";





//pakages
import { useNavigate } from "react-router-dom";
// import { headerAction } from "../../redux/modules/userSlice";

//styledComponent
import {
  HeaderFullBox,
  HeaderTextBox,
  HeaderLoginText,
  HeaderMypageText,
  HeaderLogoBox
} from "./Header.styled"

const Header = () => {
  const navigate = useNavigate()



  
  const signOut = () => {
    window.sessionStorage.removeItem('authorization');
    window.localStorage.clear();  
    alert('로그아웃 되었습니다')
    navigate('/');
  };

  return (
    <HeaderFullBox>
      <HeaderLogoBox
      onClick={()=>{navigate('/')}}
      >
        LOGO
      </HeaderLogoBox>
      <HeaderTextBox>

      {window.sessionStorage.length >= 2  ? (
        <HeaderLoginText
        onClick={signOut}
        >
          로그아웃
        </HeaderLoginText>
      ) : (
        <HeaderLoginText
        onClick={()=>{navigate('/Signin')}}
        >
          로그인
        </HeaderLoginText>
        )}
        <HeaderMypageText
        onClick={()=>{navigate('/Mypage')}}
        >
          마이페이지
        </HeaderMypageText>
      </HeaderTextBox>
    </HeaderFullBox>
  )
};

export default Header
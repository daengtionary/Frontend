// React
import { useEffect, Fragment } from "react";




// Redux
import { 
  useSelector,
  useDispatch,
} from "react-redux";

//pakages
import { useNavigate } from "react-router-dom";
import { headerAction } from "../../redux/modules/user";

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
  const dispatch = useDispatch()

  const is_login =  useSelector((state)=> state.user.is_login)
  
  const signOut = () => {
    dispatch(headerAction({ is_login: false }));
    window.sessionStorage.removeItem('authorization');  
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

      {is_login ? (
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
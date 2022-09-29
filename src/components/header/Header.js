// React
import { useEffect, Fragment } from "react";

//토큰 디코더
import jwtDecode from "jwt-decode";

//pakages
import { useNavigate } from "react-router-dom";

//styledComponent
import { HeaderFullBox, HeaderTextBox, HeaderLoginText, HeaderMypageText, HeaderLogoBox } from "./Header.styled";

import logo from "../../static/image/로고_.jpg";

const Header = () => {
  const navigate = useNavigate();

  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");
  // 토큰 decode 하는 부분
  let decoded = token && jwtDecode(token);
  // 토큰 만료시간
  let exp = token && Number(decoded.exp + "000");
  let expTime = new Date(exp);
  let now = new Date();

  const checkToken = () => {
    if (expTime <= now && window.sessionStorage.length >= 2) {
      token && window.sessionStorage.removeItem("authorization");
      alert("로그인이 만료 되었습니다. 다시 로그인해 주세요!");
      navigate("/signin");
    }
  };

  const signOut = () => {
    window.sessionStorage.removeItem("authorization");
    window.localStorage.clear();
    alert("로그아웃 되었습니다");
    navigate("/");
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <HeaderFullBox>
      <HeaderLogoBox
        onClick={() => {
          navigate("/");
        }}
        backgroundImg={logo}
      >
        {/* LOGO */}
      </HeaderLogoBox>
      <HeaderTextBox>
        {window.sessionStorage.length >= 2 ? (
          <HeaderLoginText onClick={signOut}>로그아웃</HeaderLoginText>
        ) : (
          <HeaderLoginText
            onClick={() => {
              navigate("/Signin");
            }}
          >
            로그인
          </HeaderLoginText>
        )}
        <HeaderMypageText
          onClick={() => {
            navigate("/Mypage");
          }}
        >
          마이페이지
        </HeaderMypageText>
      </HeaderTextBox>
    </HeaderFullBox>
  );
};

export default Header;

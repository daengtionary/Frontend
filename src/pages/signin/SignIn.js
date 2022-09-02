// React import
import { useState, useCallback, useRef ,Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux/es/exports';
import { signUserThunk } from '../../redux/modules/user';

// Package import
import { AiFillMessage } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';

// Component & Element import
import Button from '../../elements/button/Button';
import Input from '../../elements/input/Input';
import Header from '../../components/header/Header';

// React Icon
import { BiShow, BiHide } from 'react-icons/bi';

import styled from 'styled-components';
import {
  SignInBox,
  SignInLoginBox,
  SignInLoginContainer,
  SignInLoginTitle,
  SignInLoginDataGroup,
  SignInLoginEmail,
  SignInLoginPassword,
  SignInLoginButtonGroup,
  SignInLoginButtonKakao,
  
} from './SignIn.styled';

const SignIn = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/kakao/callback';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(false);
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  // const isSmallScreen = useMediaQuery({
  //   query: '(max-width: 767px)',
  // });

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const signInAccount = useCallback(
    async (event) => {
      event.preventDefault();
      if (email === '') {
        alert('계정을 입력해주세요');
      } else if (emailRegExp.test(email) === false) {
        alert('이메일 형식에 맞지 않습니다');
      } else {
        dispatch(signUserThunk({ email, password })).then((res) => {
          if (res.payload) {
            navigate('/');
          } else {
            alert(
              '로그인 실패하였습니다\n이메일 / 패스워드를 다시 확인해주세요'
            );
          }
        });
      }
    },
    [email, password]
  );

  const viewPassword = useCallback(
    (state) => {
      switch (state) {
        case 'password': {
          if (password === '') {
            break;
          } else {
            const type = passwordRef.current.type;
            if (type === 'password') {
              passwordRef.current.type = 'text';
              setPasswordView(true);
            } else {
              passwordRef.current.type = 'password';
              setPasswordView(false);
            }
            break;
          }
        }
        default:
        break;
      }
    },
    [password]
  );

  return (
    <Fragment>
      <Header />
      <SignInBox>
        <SignInLoginTitle>로그인</SignInLoginTitle>
        <SignInLoginBox>
        <SignInLoginContainer
          onSubmit={(event) => signInAccount(event)}
          // mg_bottom={isSmallScreen ? '54px' : '74px'}
        >
          <SignInLoginDataGroup>
            <SignInLoginEmail>
              {/* <SignInLoginEmailSpan>이메일</SignInLoginEmailSpan> */}
              <Input
                type={'text'}
                value={email}
                _onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', height: '40px', pd_left: '10px', bd:"0px" ,bd_bottom: 'gray' }}
                placeholder={'아이디를 입력하세요'}
              />
            </SignInLoginEmail>
            <SignInLoginPassword>
              
              {/* <SignInLoginPasswordSpan>비밀번호</SignInLoginPasswordSpan> */}
              <Input
                type={'password'}
                value={password}
                _onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', height: '40px', pd_left: '10px', bd:"0px", bd_bottom: 'gray' }}
                placeholder={'비밀번호를 입력하세요'}
                
              />
            </SignInLoginPassword>
          </SignInLoginDataGroup>
          <SignInLoginButtonGroup>
            <Button
              type={'submit'}
              text={'로그인'}
              style={{
                width: '100%',
                height: '40px',
                bg_color: '#000',
                color: '#fff',
                bd_color: '#000',
                ft_size: '13px',
                bd_radius: '7px'
              }}
            />
            <SignInLoginButtonKakao>
              <Button
                type={'button'}
                text={'카카오로 시작하기'}
                _onClick={() => {
                  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
                }}
                style={{
                  width: '100%',
                  height: '40px',
                  bg_color: 'rgb(247,225,76)',
                  color: '#515151',
                  bd_color: 'rgb(247,225,76)',
                  ft_size: '13px',
                  bd_radius: '7px'
                }}
              />
            </SignInLoginButtonKakao>
          </SignInLoginButtonGroup>
        </SignInLoginContainer>
        <SignInSignUpContainer>
          <SignInSignUpNotice>
            <SignInSignUpNoticeSpan>
              아직 회원이 아니신가요?
              <SignInSignUpSpan
              onClick={()=>{navigate('/signup')}}
              >&nbsp;회원가입 {'>'} </SignInSignUpSpan>
            </SignInSignUpNoticeSpan>
          </SignInSignUpNotice>
        </SignInSignUpContainer>
        </SignInLoginBox>
      </SignInBox>
    </Fragment>
  );
};
export default SignIn;

// SignUp
export const SignInSignUpContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  text-align: center;
  height: 166px;
`;

export const SignInSignUpSpan = styled.span`
 font-weight: 700;
 font-size: 14px;
`

export const SignInSignUpNotice = styled.div`
  box-sizing: border-box;
  margin-top: 25px;
  width: 100%;
  height: auto; 
`;

export const SignInSignUpNoticeSpan = styled.span`
  font-size: 14px;
  line-height: 25px;
`;



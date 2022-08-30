// React import
import { useState, useCallback, Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux/es/exports';
import { signUserThunk } from '../../redux/modules/user';

// Package import
// import { AiFillMessage } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';

// Component & Element import
import Button from '../../elements/button/Button';
import Input from '../../elements/input/Input';

import styled from 'styled-components';
import {
  SignInBox,
  SignInLoginContainer,
  SignInLoginTitle,
  SignInLoginDataGroup,
  SignInLoginEmail,
  SignInLoginEmailSpan,
  SignInLoginPassword,
  SignInLoginPasswordSpan,
  SignInLoginButtonGroup,
  SignInLoginButtonKakao,
} from './SignIn.styled';

const SignIn = () => {
  // const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  // const REDIRECT_URI = 'http://localhost:3000/kakao/callback';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <Fragment>
      <SignInBox>
        <SignInLoginContainer
          onSubmit={(event) => signInAccount(event)}
          // mg_bottom={isSmallScreen ? '54px' : '74px'}
        >
          <SignInLoginTitle>로그인</SignInLoginTitle>
          <SignInLoginDataGroup>
            <SignInLoginEmail>
              <SignInLoginEmailSpan>이메일</SignInLoginEmailSpan>
              <Input
                type={'text'}
                value={email}
                _onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', height: '40px', pd_left: '10px' }}
              />
            </SignInLoginEmail>
            <SignInLoginPassword>
              <SignInLoginPasswordSpan>비밀번호</SignInLoginPasswordSpan>
              <Input
                type={'password'}
                value={password}
                _onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', height: '40px', pd_left: '10px' }}
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
              }}
            />
            <SignInLoginButtonKakao>
              {/* <AiFillMessage className="icon" /> */}
              <Button
                type={'button'}
                text={'카카오 로그인'}
                // _onClick={() => {
                //   window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
                // }}
                style={{
                  width: '100%',
                  height: '40px',
                  bg_color: 'rgb(247,225,76)',
                  color: '#515151',
                  bd_color: 'rgb(247,225,76)',
                  ft_size: '13px',
                }}
              />
            </SignInLoginButtonKakao>
          </SignInLoginButtonGroup>
        </SignInLoginContainer>
        <SignInSignUpContainer>
          <SignInSignUpNotice>
            <SignInSignUpNoticeSpan>
              회원가입을 하시면, 주문 조회와 개인정보 관리 및 위시리스트 확인 등
              다양한 혜택을 누리실 수 있습니다.
            </SignInSignUpNoticeSpan>
          </SignInSignUpNotice>
          <SignInSignUpButtonGroup>
            <Button
              type={'button'}
              _onClick={() => navigate('/signup')}
              text={'신규가입'}
              style={{
                width: '100%',
                height: '40px',
                bg_color: '#000',
                color: '#fff',
                bd_color: '#000',
                ft_size: '13px',
              }}
            />
          </SignInSignUpButtonGroup>
        </SignInSignUpContainer>
      </SignInBox>
    </Fragment>
  );
};
export default SignIn;

// SignUp
export const SignInSignUpContainer = styled.div`
  box-sizing: border-box;
  width: 440px;
  height: 166px;
`;

export const SignInSignUpNotice = styled.div`
  box-sizing: border-box;
  margin-top: 25px;
  width: 100%;
  height: auto;
  margin-bottom: 31px;
`;

export const SignInSignUpNoticeSpan = styled.span`
  font-size: 14px;
  line-height: 25px;
`;

export const SignInSignUpButtonGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

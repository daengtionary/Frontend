// React import
import { useRef, useState, useCallback, useEffect, Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux/es/exports';
import {
  emailDupCheckThunk,
  addUserThunk,
  nickNameDupCheckThunk,
} from '../../redux/modules/user';

// Package import
import { useNavigate } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiShow, BiHide } from 'react-icons/bi';
import PasswordStrengthBar from 'react-password-strength-bar';

// Component & Element import
import Button from '../../elements/button/Button';
import Input from '../../elements/input/Input';
import Header from '../../components/header/Header';

// Style import
import {
  SignUpBox,
  SignUpBoxContainer,
  SignUpTitle,
  SignUpForm,
  SignUpDataGroup,
  SignUpDataInputGroup,
  SignUpDataInputIcon,
  SignUpAlertSpan,
  SignUpButtonGroup,
  GoToSignIn
} from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckView, setPasswordCheckView] = useState(false);
  const [nick, setNick] = useState('');
  const [nickCheck, setNickCheck] = useState(true);
  const [adminCode, setAdminCode] = useState('');
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState('USER');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const emailSpanRef = useRef();
  const emailIconRef = useRef();
  const passwordRef = useRef();
  const passwordSpanRef = useRef();
  const passwordIconRef = useRef();
  const passwordCheckRef = useRef();
  const passwordCheckSpanRef = useRef();
  const passwordCheckIconRef = useRef();
  const nickNameSpanRef = useRef();
  const nickNameIconRef = useRef();

  const adminInputRef = useRef();
  const adminCodeSpanRef = useRef();

  const strengthBarRef = useRef();

  // const isSmallScreen = useMediaQuery({
  //   query: '(max-width: 1023px)',
  // });

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const nickNameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/;

  const newUser = {
    email: email,
    password: password,
    nick: nick,
    role: role,
    adminCode: adminCode,
  };

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
    if (passwordCheck !== '')
      passwordCheckIconRef.current.style.display = 'block';
    else passwordCheckIconRef.current.style.display = 'none';
    if (nick !== '') nickNameIconRef.current.style.display = 'block';
    else nickNameIconRef.current.style.display = 'none';
  }, [email, password, passwordCheck, nick]);

  useEffect(() => {
    if (password === '' && passwordCheck === '') {
      passwordSpanRef.current.innerText =
        '8자리 이상, 영문자, 숫자, 특수문자를 혼합하여주세요:)';
      passwordSpanRef.current.style.color = '#c0c0c0';
    } else if (password === '') {
      passwordCheckSpanRef.current.style.color = '';
      passwordCheckSpanRef.current.innerText = '';
      passwordSpanRef.current.style.color = '#f2153e';
      passwordSpanRef.current.innerText = '비밀번호를 입력해주세요';
    } else if (passwordCheck === '') {
      passwordCheckSpanRef.current.style.color = '';
      passwordSpanRef.current.style.color = '';
    } else {
      if (password !== passwordCheck) {
        passwordCheckSpanRef.current.style.color = '#f2153e';
        passwordCheckSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
        passwordSpanRef.current.style.color = '';
      } else {
        passwordSpanRef.current.style.color = '';
        passwordCheckSpanRef.current.innerText = '비밀번호가 일치합니다';
        passwordCheckSpanRef.current.style.color = '#0fe05f';
      }
    }
  }, [password, passwordCheck]);

  const checkLoginId = useCallback(
    debounce((email) => {
      if (emailRegExp.test(email) === false) {
        emailSpanRef.current.innerText = '이메일 형식에 맞지 않습니다';
        emailSpanRef.current.style.color = '#f2153e';
        setEmailCheck(false);
      } else {
        dispatch(emailDupCheckThunk(email)).then((res) => {
          console.log(res);
          if (res.payload) {
            emailSpanRef.current.innerText = '사용가능한 이메일입니다';
            emailSpanRef.current.style.color = '#0fe05f';
            setEmailCheck(true);
          } else {
            emailSpanRef.current.innerText = '중복되는 이메일입니다';
            emailSpanRef.current.style.color = '#f2153e';
            setEmailCheck(false);
          }
        });
      }
    }, 500),
    [email]
  );

  const checkLoginNickName = useCallback(
    debounce((nick) => {
      if (nickNameRegExp.test(nick) === false) {
        nickNameSpanRef.current.innerText = '닉네임 형식에 맞지 않습니다';
        nickNameSpanRef.current.style.color = '#f2153e';
        setNickCheck(false);
      } else {
        dispatch(nickNameDupCheckThunk(nick)).then((res) => {
          console.log((res.payload))
          if (res.payload.success) {
            nickNameSpanRef.current.innerText = res.payload.massage;
            nickNameSpanRef.current.style.color = '#0fe05f';
            setNickCheck(true);
          } else if (res.payload.status === 400) {
            nickNameSpanRef.current.innerText = res.payload.message;
            nickNameSpanRef.current.style.color = '#f2153e';
            setNickCheck(false);
          }
        });
      }
    }, 500),
    [nick]
  );

  useEffect(() => {
    if (email !== '') {
      checkLoginId(email);
    } else {
      emailSpanRef.current.innerText = '';
      emailSpanRef.current.style.color = '';
    }
  }, [email]);

  useEffect(() => {
    if (nick !== '') {
      checkLoginNickName(nick);
    } else {
      nickNameSpanRef.current.innerText = '';
      nickNameSpanRef.current.style.color = '';
    }
  }, [nick]);

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'email': {
          setEmail('');
          break;
        }
        case 'password': {
          setPassword('');
          break;
        }
        case 'passwordCheck': {
          setPasswordCheck('');
          break;
        }
        case 'nickName': {
          setNick('');
          break;
        }
        default:
          break;
      }
    },
    [email, password, passwordCheck, nick]
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
        case 'passwordCheck': {
          if (passwordCheck === '') {
            break;
          } else {
            const type = passwordCheckRef.current.type;
            if (type === 'password') {
              passwordCheckRef.current.type = 'text';
              setPasswordCheckView(true);
            } else {
              passwordCheckRef.current.type = 'password';
              setPasswordCheckView(false);
            }
            break;
          }
        }
        default:
          break;
      }
    },
    [password, passwordCheck]
  );

  const handleAdminCode = useCallback(
    (event) => {
      setAdminCode(event.target.value);
    },
    [adminCode]
  );

  const adminInputHandler = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  useEffect(() => {
    visible === true ? setRole('ADMIN') : setRole('USER');
  }, [visible]);

  const signUpAccount = useCallback(
    (event) => {
      event.preventDefault();
      if (emailCheck === false) {
        emailRef.current.focus();
        emailSpanRef.current.style.color = '#f2153e';
        emailSpanRef.current.innerText = '중복되는 이메일입니다';
      } else {
        if (strengthBarRef.current.state <= 2) {
          passwordRef.current.focus();
          passwordSpanRef.current.style.color = '#f2153e';
          passwordSpanRef.current.innerText =
            '취약한 비밀번호입니다(8자 이상, 영문자, 숫자, 특수문자 혼합)';
          passwordCheckSpanRef.current.style.innerText = '';
        } else if (password !== passwordCheck) {
          passwordRef.current.style.innerText = '';
          passwordCheckRef.current.focus();
          passwordCheckSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
        } else {
          if (nickCheck === false) {
            nickNameSpanRef.current.style.color = '#f2153e';
            nickNameSpanRef.current.innerText = '중복되는 닉네임입니다';
          } else {
            console.log(newUser);
            dispatch(addUserThunk(newUser));
            alert(nick + '님 가입을 축하합니다');
            navigate('/signin');
          }
        }
      }
    },
    [email, password, passwordCheck, nick]
  );

  return (
    <Fragment>
      <Header />
      <SignUpBox
      // mg_bottom= {isSmallScreen ? '140px' : '200px'}
      >
        <SignUpBoxContainer>
          <SignUpForm onSubmit={(event) => signUpAccount(event)}>
            <SignUpTitle><GoToSignIn onClick={()=>{navigate('/signin')}}>{'<'}{' '}</GoToSignIn>회원가입</SignUpTitle>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={emailIconRef}>
                  <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('email')}
                  />
                </SignUpDataInputIcon>
                <Input
                  placeholder={'이메일 주소'}
                  type={'text'}
                  value={email}
                  _onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '300px',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '16px',
                    bd: '0px',
                    bd_bottom: 'gray',
                  }}
                  _ref={emailRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={emailSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordIconRef}>
                  <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('password')}
                  />
                </SignUpDataInputIcon>
                {passwordView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  ></BiHide>
                )}
                <Input
                  placeholder={'비밀번호'}
                  type={'password'}
                  value={password}
                  _onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '300px',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '16px',
                    bd: '0px',
                    bd_bottom: 'gray',
                  }}
                  _ref={passwordRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordSpanRef}></SignUpAlertSpan>
              <PasswordStrengthBar
                password={password}
                style={{ display: 'none' }}
                ref={strengthBarRef}
              />
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordCheckIconRef}>
                  <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('passwordCheck')}
                  />
                </SignUpDataInputIcon>
                {passwordCheckView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  ></BiHide>
                )}
                <Input
                  placeholder={'비밀번호 확인'}
                  type={'password'}
                  value={passwordCheck}
                  _onChange={(e) => setPasswordCheck(e.target.value)}
                  style={{
                    width: '300px',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '16px',
                    bd: '0px',
                    bd_bottom: 'gray',
                  }}
                  _ref={passwordCheckRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordCheckSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={nickNameIconRef}>
                  <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('nickName')}
                  />
                </SignUpDataInputIcon>
                <Input
                  placeholder={'닉네임'}
                  type={'text'}
                  value={nick}
                  _onChange={(e) => setNick(e.target.value)}
                  style={{
                    width: '300px',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '16px',
                    bd: '0px',
                    bd_bottom: 'gray',
                  }}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={nickNameSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            {visible ? (
              <>
                <SignUpDataGroup>
                  <SignUpDataInputGroup>
                    <SignUpDataInputIcon
                      ref={adminInputRef}
                    ></SignUpDataInputIcon>
                    <Input
                      placeholder={'관리자 코드'}
                      type={'text'}
                      value={adminCode}
                      _onChange={handleAdminCode}
                      style={{
                        width: '300px',
                        height: '40px',
                        pd_left: '10px',
                        pd_right: '16px',
                        bd: '0px',
                        bd_bottom: 'gray',
                      }}
                    />
                  </SignUpDataInputGroup>
                  <SignUpAlertSpan ref={adminCodeSpanRef}></SignUpAlertSpan>
                </SignUpDataGroup>
                <span onClick={adminInputHandler}>일반유저로 가입하기</span>
              </>
            ) : (
              <span onClick={adminInputHandler}>관리자로 가입하기</span>
            )}

            <SignUpButtonGroup>
              <Button
                type={'submit'}
                text={'계정생성'}
                style={{
                  width: '320px',
                  height: '38px',
                  bg_color: 'black',
                  bd_radius: '7px',
                }}
              ></Button>
            </SignUpButtonGroup>
          </SignUpForm>
        </SignUpBoxContainer>
      </SignUpBox>
    </Fragment>
  );
};
export default SignUp;

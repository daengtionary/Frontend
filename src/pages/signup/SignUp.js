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
// import PasswordStrengthBar from 'react-password-strength-bar';

// Component & Element import
import Button from '../../elements/button/Button';
import Input from '../../elements/input/Input';

// Style import
import {
  SignUpBox,
  SignUpBoxContainer,
  SignUpTitle,
  SignUpForm,
  SignUpDataGroup,
  SignUpDataSpan,
  SignUpDataInputGroup,
  SignUpDataInputIcon,
  SignUpAlertSpan,
  SignUpDataAgreementGroup,
  SignUpDataAgreement,
  SignUpDataAgreementSpan,
  SignUpButtonGroup,
} from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  // const [passwordView, setPasswordView] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  // const [passwordCheckView, setPasswordCheckView] = useState(false);
  const [nickName, setNickName] = useState('');
  const [nickNameCheck, setNickNameCheck] = useState(false);
  const [phonNumber, setPhonNumber] = useState('');
  const [adminCord, setAdminCord] = useState('');
  const [visible, setVisible] = useState(false);

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
  const nickNameRef = useRef();
  const nickNameSpanRef = useRef();
  const nickNameIconRef = useRef();
  const phonNumberIconRef = useRef();
  const phonNumberSpanRef = useRef();

  const adminInputRef = useRef();
  const adminCordSpanRef = useRef();

  const strengthBarRef = useRef();

  // const isSmallScreen = useMediaQuery({
  //   query: '(max-width: 1023px)',
  // });

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const nickNameRegExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/;

  const newUser = {
    email,
    password,
    nickName,
    phonNumber,
    admin: false,
    adminToken: '',
  };

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
    if (passwordCheck !== '')
      passwordCheckIconRef.current.style.display = 'block';
    else passwordCheckIconRef.current.style.display = 'none';
    if (nickName !== '') nickNameIconRef.current.style.display = 'block';
    else nickNameIconRef.current.style.display = 'none';
    if (phonNumber !== '') phonNumberIconRef.current.style.display = 'block';
    else phonNumberIconRef.current.style.display = 'none';
  }, [email, password, passwordCheck, nickName, phonNumber]);

  useEffect(() => {
    if (password === '' && passwordCheck === '') {
      passwordSpanRef.current.innerText = '';
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
        dispatch(emailDupCheckThunk({ email })).then((res) => {
          console.log(res.payload);
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
    debounce((nickName) => {
      if (nickNameRegExp.test(nickName) === false) {
        nickNameSpanRef.current.innerText = '닉네임 형식에 맞지 않습니다';
        nickNameSpanRef.current.style.color = '#f2153e';
        setNickNameCheck(false);
      } else {
        dispatch(nickNameDupCheckThunk({ nickName })).then((res) => {
          console.log(res.payload);
          if (res.payload) {
            nickNameSpanRef.current.innerText = '사용가능한 닉네임입니다';
            nickNameSpanRef.current.style.color = '#0fe05f';
            setNickName(true);
          } else {
            nickNameSpanRef.current.innerText = '중복되는 닉네임입니다';
            nickNameSpanRef.current.style.color = '#f2153e';
            setNickName(false);
          }
        });
      }
    }, 500),
    [email]
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
    if (nickName !== '') {
      checkLoginNickName(nickName);
    } else {
      nickNameSpanRef.current.innerText = '';
      nickNameSpanRef.current.style.color = '';
    }
  }, [nickName]);

  // const deleteText = useCallback(
  //   (state) => {
  //     switch (state) {
  //       case 'email': {
  //         setEmail('');
  //         break;
  //       }
  //       case 'password': {
  //         setPassword('');
  //         break;
  //       }
  //       case 'passwordCheck': {
  //         setPasswordCheck('');
  //         break;
  //       }
  //       case 'nickName': {
  //         setNickName('');
  //         break;
  //       }
  //       default:
  //         break;
  //     }
  //   },
  //   [email, password, passwordCheck, nickName]
  // );

  // const viewPassword = useCallback(
  //   (state) => {
  //     switch (state) {
  //       case 'password': {
  //         if (password === '') {
  //           break;
  //         } else {
  //           const type = passwordRef.current.type;
  //           if (type === 'password') {
  //             passwordRef.current.type = 'text';
  //             setPasswordView(true);
  //           } else {
  //             passwordRef.current.type = 'password';
  //             setPasswordView(false);
  //           }
  //           break;
  //         }
  //       }
  //       case 'passwordCheck': {
  //         if (passwordCheck === '') {
  //           break;
  //         } else {
  //           const type = passwordCheckRef.current.type;
  //           if (type === 'password') {
  //             passwordCheckRef.current.type = 'text';
  //             setPasswordCheckView(true);
  //           } else {
  //             passwordCheckRef.current.type = 'password';
  //             setPasswordCheckView(false);
  //           }
  //           break;
  //         }
  //       }
  //       default:
  //         break;
  //     }
  //   },
  //   [password, passwordCheck]
  // );

  const handlePhonNumber = useCallback((event) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(event.target.value)) {
      setPhonNumber(event.target.value);
    }
  });

  useEffect(() => {
    if (phonNumber.length === 10) {
      setPhonNumber(phonNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phonNumber.length === 13) {
      setPhonNumber(
        phonNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [phonNumber]);

  const handleAdminCord = useCallback((event) => {
    setAdminCord(event.target.value);
  });

  const signUpAccount = useCallback(
    (event) => {
      event.preventDefault();

      if (emailCheck === false) {
        emailRef.current.focus();
        emailSpanRef.current.style.color = '#f2153e';
        emailSpanRef.current.innerText = '중복되는 이메일입니다';
      } else {
        if (strengthBarRef.current.state.score <= 2) {
          passwordRef.current.focus();
          passwordSpanRef.current.style.color = '#f2153e';
          passwordSpanRef.current.innerText =
            '취약한 비밀번호입니다(6자 이상, 숫자, 특수문자 혼합)';
          passwordCheckSpanRef.current.style.innerText = '';
        } else if (password !== passwordCheck) {
          passwordRef.current.style.innerText = '';
          passwordCheckRef.current.focus();
          passwordCheckSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
        } else if (nickNameCheck === false) {
          nickNameRef.current.focus();
          nickNameSpanRef.current.style.color = '#f2153e';
          nickNameSpanRef.current.innerText = '중복되는 이메일입니다';
        } else {
          console.log(newUser);
          dispatch(addUserThunk(newUser));
          alert('회원가입 완료');
          navigate('/signin');
        }
      }
    },
    [email, password, passwordCheck, nickName, phonNumber]
  );

  return (
    <Fragment>
      <SignUpBox
      // mg_bottom= {isSmallScreen ? '140px' : '200px'}
      >
        <SignUpBoxContainer>
          <SignUpTitle>신규 회원가입</SignUpTitle>
          <SignUpForm onSubmit={(event) => signUpAccount(event)}>
            <SignUpDataGroup>
              <SignUpDataSpan>이메일 주소</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={emailIconRef}>
                  {/* <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('email')}
                  /> */}
                </SignUpDataInputIcon>
                <Input
                  type={'text'}
                  value={email}
                  _onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={emailRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={emailSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>비밀번호</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordIconRef}>
                  {/* <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('password')}
                  /> */}
                </SignUpDataInputIcon>
                {/* {passwordView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  ></BiHide>
                )} */}
                <Input
                  type={'password'}
                  value={password}
                  _onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={passwordRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordSpanRef}></SignUpAlertSpan>
              {/* <PasswordStrengthBar
                password={password}
                style={{ display: 'none' }}
                ref={strengthBarRef}
              /> */}
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>비밀번호 확인</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordCheckIconRef}>
                  {/* <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('passwordCheck')}
                  /> */}
                </SignUpDataInputIcon>
                {/* {passwordCheckView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  ></BiHide>
                )} */}
                <Input
                  type={'password'}
                  value={passwordCheck}
                  _onChange={(e) => setPasswordCheck(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={passwordCheckRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordCheckSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            <SignUpDataGroup>
              <SignUpDataSpan>닉네임</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={nickNameIconRef}>
                  {/* <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('nickName')}
                  /> */}
                </SignUpDataInputIcon>
                <Input
                  type={'text'}
                  value={nickName}
                  _onChange={(e) => setNickName(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={nickNameSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            <SignUpDataGroup>
              <SignUpDataSpan>핸드폰 번호</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={phonNumberIconRef}>
                  {/* <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('nickName')}
                  /> */}
                </SignUpDataInputIcon>
                <Input
                  type={'text'}
                  value={phonNumber}
                  _onChange={handlePhonNumber}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={phonNumberSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            {visible === true ? (
              <SignUpDataGroup>
                <SignUpDataSpan>관리자 코드</SignUpDataSpan>
                <SignUpDataInputGroup>
                  <SignUpDataInputIcon
                    ref={adminInputRef}
                  ></SignUpDataInputIcon>
                  <Input
                    type={'text'}
                    value={adminCord}
                    _onChange={handleAdminCord}
                    style={{
                      width: '100%',
                      height: '40px',
                      pd_left: '10px',
                      pd_right: '30px',
                    }}
                  />
                </SignUpDataInputGroup>
                <SignUpAlertSpan ref={adminCordSpanRef}></SignUpAlertSpan>
              </SignUpDataGroup>
            ) : (
              ''
            )}

            <SignUpDataAgreement>
              <SignUpDataAgreementSpan>
                <button
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
                관리자로 가입하기
              </SignUpDataAgreementSpan>
            </SignUpDataAgreement>

            <SignUpDataAgreementGroup>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [필수] 만 14세 이상입니다
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [필수] 이용약관 동의
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [필수] 개인정보 수집 및 이용 동의
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input
                  type="checkbox"
                  style={{ width: '14px', height: '15px', margin: '0px' }}
                />
                <SignUpDataAgreementSpan>
                  [선택] 마케팅 목적 개인정보 수집 및 이용 동의
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input
                  type="checkbox"
                  style={{ width: '14px', height: '15px', margin: '0px' }}
                />
                <SignUpDataAgreementSpan>
                  [선택] 마케팅 정보 수신 및 활용 동의
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
            </SignUpDataAgreementGroup>
            <SignUpButtonGroup>
              <Button
                type={'button'}
                text={'취소'}
                _onClick={() => navigate('/')}
                style={{
                  width: '213px',
                  height: '38px',
                  bg_color: 'transparent',
                  color: '#525252',
                }}
              ></Button>
              <Button
                type={'submit'}
                text={'계정생성'}
                style={{ width: '213px', height: '38px', bg_color: 'black' }}
              ></Button>
            </SignUpButtonGroup>
          </SignUpForm>
        </SignUpBoxContainer>
      </SignUpBox>
    </Fragment>
  );
};
export default SignUp;

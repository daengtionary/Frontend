// React import
import { useRef, useState, useCallback, useEffect, Fragment } from "react";

// Redux import
import { useDispatch } from "react-redux/es/exports";
import { emailDupCheckThunk, addUserThunk, nickNameDupCheckThunk } from "../../redux/modules/userSlice";

// Package import
import { useNavigate } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';
import { debounce } from "lodash";
import { TiDeleteOutline } from "react-icons/ti";
import { BiShow, BiHide } from "react-icons/bi";
import PasswordStrengthBar from "react-password-strength-bar";

// Component & Element import
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";

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
  GoToSignIn,
  SignUpDataAgreementGroup,
  SignUpDataAgreement,
  SignUpDataAgreementSpan,
  AdminCheckBoxGroub,
} from "./SignUp.styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordView, setPasswordView] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordCheckView, setPasswordCheckView] = useState(false);
  const [nick, setNick] = useState("");
  const [nickCheck, setNickCheck] = useState(true);
  const [adminCode, setAdminCode] = useState("");
  const [role, setRole] = useState("USER");

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

  const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const nickNameRegExp = /^(?=.*[a-z0-9???-???])[a-z0-9???-???]{2,8}$/;

  const newUser = {
    email: email,
    password: password,
    nick: nick,
    role: role,
    adminCode: adminCode,
  };

  useEffect(() => {
    if (password === "" && passwordCheck === "") {
      passwordSpanRef.current.innerText = "8?????? ??????, ?????????, ??????, ??????????????? ?????????????????????:)";
      passwordSpanRef.current.style.color = "#c0c0c0";
    } else if (password === "") {
      passwordCheckSpanRef.current.style.color = "";
      passwordCheckSpanRef.current.innerText = "";
      passwordSpanRef.current.style.color = "#f2153e";
      passwordSpanRef.current.innerText = "??????????????? ??????????????????";
    } else if (passwordCheck === "") {
      passwordCheckSpanRef.current.style.color = "";
      passwordSpanRef.current.style.color = "";
    } else {
      if (password !== passwordCheck) {
        passwordCheckSpanRef.current.style.color = "#f2153e";
        passwordCheckSpanRef.current.innerText = "????????? ??????????????? ????????????";
        passwordSpanRef.current.style.color = "";
      } else {
        passwordSpanRef.current.style.color = "";
        passwordCheckSpanRef.current.innerText = "??????????????? ???????????????";
        passwordCheckSpanRef.current.style.color = "#0fe05f";
      }
    }
  }, [password, passwordCheck]);

  const checkLoginId = useCallback(
    debounce(email => {
      if (emailRegExp.test(email) === false) {
        emailSpanRef.current.innerText = "????????? ????????? ?????? ????????????";
        emailSpanRef.current.style.color = "#f2153e";
        setEmailCheck(false);
      } else {
        dispatch(emailDupCheckThunk(email))
          .unwrap()
          .then(res => {
            setEmailCheck(true);
            emailSpanRef.current.innerText = res.message;
            emailSpanRef.current.style.color = "#0fe05f";
          })
          .catch(error => {
            setEmailCheck(false);
            emailSpanRef.current.innerText = "?????? ???????????? ??????????????????";
            emailSpanRef.current.style.color = "#f2153e";
          });
      }
    }),
    [email]
  );

  const checkLoginNickName = useCallback(
    debounce(nick => {
      if (nickNameRegExp.test(nick) === false) {
        nickNameSpanRef.current.innerText = "2?????? ?????? 8?????? ????????? ??????????????????:)";
        nickNameSpanRef.current.style.color = "#f2153e";
        setNickCheck(false);
      } else {
        dispatch(nickNameDupCheckThunk(nick)).then(res => {
          console.log(res);
          if (res.payload.data.state === 200) {
            setNickCheck(true);
            nickNameSpanRef.current.innerText = res.payload.data.message;
            nickNameSpanRef.current.style.color = "#0fe05f";
          } else {
            nickNameSpanRef.current.innerText = "?????? ???????????? ????????? ?????????.";
            nickNameSpanRef.current.style.color = "#f2153e";
          }
        });
      }
    }),
    [nick]
  );

  useEffect(() => {
    if (email !== "") {
      checkLoginId(email);
    } else {
      emailSpanRef.current.innerText = "";
      emailSpanRef.current.style.color = "";
    }
  }, [email]);

  useEffect(() => {
    if (nick !== "") {
      checkLoginNickName(nick);
    } else {
      nickNameSpanRef.current.innerText = "";
      nickNameSpanRef.current.style.color = "";
    }
  }, [nick]);

  const deleteText = useCallback(
    state => {
      switch (state) {
        case "email": {
          setEmail("");
          break;
        }
        case "password": {
          setPassword("");
          break;
        }
        case "passwordCheck": {
          setPasswordCheck("");
          break;
        }
        case "nickName": {
          setNick("");
          break;
        }
        default:
          break;
      }
    },
    [email, password, passwordCheck, nick]
  );

  const checkOnlyOne = useCallback(
    checkThis => {
      const checkboxes = document.getElementsByName("adminName");
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkThis) {
          checkboxes[i].checked = false;
        }
        if (checkboxes[0].checked === true) {
          setRole("ADMIN");
        } else {
          setRole("USER");
        }
      }
    },
    [role]
  );
  console.log(role);

  useEffect(() => {
    if (nick !== "") {
      checkLoginNickName(nick);
    } else {
      nickNameSpanRef.current.innerText = "";
      nickNameSpanRef.current.style.color = "";
    }
  }, [nick]);

  const viewPassword = useCallback(
    state => {
      switch (state) {
        case "password": {
          if (password === "") {
            break;
          } else {
            const type = passwordRef.current.type;
            if (type === "password") {
              passwordRef.current.type = "text";
              setPasswordView(true);
            } else {
              passwordRef.current.type = "password";
              setPasswordView(false);
            }
            break;
          }
        }
        case "passwordCheck": {
          if (passwordCheck === "") {
            break;
          } else {
            const type = passwordCheckRef.current.type;
            if (type === "password") {
              passwordCheckRef.current.type = "text";
              setPasswordCheckView(true);
            } else {
              passwordCheckRef.current.type = "password";
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

  const handleAdminCode = event => {
    setAdminCode(event.target.value);
  };

  const signUpAccount = useCallback(
    event => {
      event.preventDefault();
      if (emailCheck === false) {
        emailRef.current.focus();
        emailSpanRef.current.style.color = "#f2153e";
        emailSpanRef.current.innerText = "???????????? ??????????????????";
      } else if (strengthBarRef.current.state <= 2) {
        passwordRef.current.focus();
        passwordSpanRef.current.style.color = "#f2153e";
        passwordSpanRef.current.innerText = "????????? ?????????????????????(8??? ??????, ?????????, ??????, ???????????? ??????)";
        passwordCheckSpanRef.current.style.innerText = "";
      } else if (password !== passwordCheck) {
        passwordRef.current.style.innerText = "";
        passwordCheckRef.current.focus();
        passwordCheckSpanRef.current.innerText = "????????? ??????????????? ????????????";
      } else {
        dispatch(addUserThunk(newUser))
          .unwrap()
          .then(res => {
            console.log(res);
            alert(res.message);
            navigate("/signin");
            adminCodeSpanRef.current.innerText = " ";
          })
          .catch(error => {
            console.log(error.message);
            adminInputRef.current.focus();
            adminCodeSpanRef.current.innerText = "????????? ????????? ???????????? ????????????.";
            adminCodeSpanRef.current.style.color = "#f2153e";
          });
      }
    },
    [email, password, passwordCheck, nick, adminCode]
  );

  return (
    <Fragment>
      <SignUpBox>
        <SignUpBoxContainer>
          <SignUpForm onSubmit={event => signUpAccount(event)}>
            <SignUpTitle>
              <GoToSignIn
                onClick={() => {
                  navigate("/signin");
                }}
              >
                {"<"}{" "}
              </GoToSignIn>
              ????????????
            </SignUpTitle>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={emailIconRef}>
                  <TiDeleteOutline className="icon-cancel" onClick={() => deleteText("email")} />
                </SignUpDataInputIcon>
                <Input
                  placeholder={"????????? ??????"}
                  type={"text"}
                  value={email}
                  _onChange={e => setEmail(e.target.value)}
                  style={{
                    width: "300px",
                    height: "40px",
                    pd_left: "10px",
                    pd_right: "16px",
                    bd: "0px",
                    bd_bottom: "gray",
                  }}
                  _ref={emailRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={emailSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordIconRef}>
                  <TiDeleteOutline className="icon-password-cancel" onClick={() => deleteText("password")} />
                </SignUpDataInputIcon>
                {passwordView ? (
                  <BiShow className="icon-hidden" onClick={() => viewPassword("password")} />
                ) : (
                  <BiHide className="icon-hidden" onClick={() => viewPassword("password")}></BiHide>
                )}
                <Input
                  placeholder={"????????????"}
                  type={"password"}
                  value={password}
                  _onChange={e => setPassword(e.target.value)}
                  style={{
                    width: "300px",
                    height: "40px",
                    pd_left: "10px",
                    pd_right: "16px",
                    bd: "0px",
                    bd_bottom: "gray",
                  }}
                  _ref={passwordRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordSpanRef}></SignUpAlertSpan>
              <PasswordStrengthBar password={password} style={{ display: "none" }} ref={strengthBarRef} />
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordCheckIconRef}>
                  <TiDeleteOutline className="icon-password-cancel" onClick={() => deleteText("passwordCheck")} />
                </SignUpDataInputIcon>
                {passwordCheckView ? (
                  <BiShow className="icon-hidden" onClick={() => viewPassword("passwordCheck")} />
                ) : (
                  <BiHide className="icon-hidden" onClick={() => viewPassword("passwordCheck")}></BiHide>
                )}
                <Input
                  placeholder={"???????????? ??????"}
                  type={"password"}
                  value={passwordCheck}
                  _onChange={e => setPasswordCheck(e.target.value)}
                  style={{
                    width: "300px",
                    height: "40px",
                    pd_left: "10px",
                    pd_right: "16px",
                    bd: "0px",
                    bd_bottom: "gray",
                  }}
                  _ref={passwordCheckRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordCheckSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            <SignUpDataGroup>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={nickNameIconRef}>
                  <TiDeleteOutline className="icon-cancel" onClick={() => deleteText("nickName")} />
                </SignUpDataInputIcon>
                <Input
                  placeholder={"?????????"}
                  type={"text"}
                  value={nick}
                  _onChange={e => setNick(e.target.value)}
                  style={{
                    width: "300px",
                    height: "40px",
                    pd_left: "10px",
                    pd_right: "16px",
                    bd: "0px",
                    bd_bottom: "gray",
                  }}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={nickNameSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>

            {role === "ADMIN" ? (
              <SignUpDataGroup>
                <SignUpDataInputGroup>
                  <SignUpDataInputIcon ref={adminInputRef}></SignUpDataInputIcon>
                  <Input
                    placeholder={"????????? ??????"}
                    type={"text"}
                    value={adminCode}
                    _onChange={handleAdminCode}
                    style={{
                      width: "300px",
                      height: "40px",
                      pd_left: "10px",
                      pd_right: "16px",
                      bd: "0px",
                      bd_bottom: "gray",
                    }}
                  />
                </SignUpDataInputGroup>
                <SignUpAlertSpan ref={adminCodeSpanRef}></SignUpAlertSpan>
              </SignUpDataGroup>
            ) : (
              ""
            )}
            <AdminCheckBoxGroub>
              <span>
                <input type={"checkbox"} name="adminName" value="ADMIN" onChange={e => checkOnlyOne(e.target)} />
                ???????????? ????????????
              </span>
            </AdminCheckBoxGroub>
            <SignUpDataAgreementGroup>
              <SignUpDataAgreement>
                <input type={"checkbox"} />
                <SignUpDataAgreementSpan>[??????] ??? 14??? ???????????????</SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input type={"checkbox"} />
                <SignUpDataAgreementSpan>[??????] ???????????? ??????</SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input type={"checkbox"} />
                <SignUpDataAgreementSpan>[??????] ???????????? ?????? ??? ?????? ??????</SignUpDataAgreementSpan>
              </SignUpDataAgreement>
            </SignUpDataAgreementGroup>
            <SignUpButtonGroup>
              <Button
                type={"submit"}
                text={"????????????"}
                style={{
                  width: "320px",
                  height: "42px",
                  bg_color: "#9493FF",
                  bd_radius: "7px",
                  bd_color: "#9493FF",
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

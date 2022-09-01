import styled from "styled-components";

export const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 140px 0;
`;

// SignIn
export const SignInLoginContainer = styled.form`
  box-sizing: border-box;
  width: 440px;
  height: 320px;
  margin-bottom: ${(props) => props.mg_bottom};
  display: flex;
  flex-direction: column;
`;
export const SignInLoginTitle = styled.span`
  font-family: AppleSDGothicNeoEB;
  width: 100%;
  font-size: 17px;
  text-align: left;
  margin-bottom: 28px;
`;
export const SignInLoginDataGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;
`;
export const SignInLoginEmail = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
export const SignInLoginEmailSpan = styled.span`
  font-family: AppleSDGothicNeoL;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;
export const SignInLoginPassword = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
export const SignInLoginPasswordSpan = styled.span`
  font-family: AppleSDGothicNeoL;
  width: 100%;
  font-size: 14px;
  text-align: left;
`;
export const SignInLoginButtonGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const SignInLoginButtonKakao = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 40px;
  .icon {
    position: absolute;
    z-index: 99999;
    font-size: 20px;
    top: 50%;
    left: 10px;
    transform: translateY(-10px);
  }
`;
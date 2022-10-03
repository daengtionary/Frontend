import styled from "styled-components";

export const SignInAll = styled.div`
  // width: 100vw;
  // hegiht: 100vw;
  // background-color: #f5f5f5;
`;

export const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 140px 0;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    box-shadow: 0 0 0 0;
  }
`;

// SignIn
export const SignInLoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 10px 10px 15px 2px lightgray;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    box-shadow: 0 0 0 0;
  }
`;

export const SignInLoginContainer = styled.form`
  box-sizing: border-box;
  width: 400px;
  height: 280px;
  margin-bottom: ${props => props.mg_bottom};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SignInLoginTitle = styled.span`
  width: 300px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 28px;
`;
export const SignInLoginDataGroup = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 35px;
  margin-top: 28px;
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

export const SignInLoginPassword = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

export const SignInLoginButtonGroup = styled.div`
  box-sizing: border-box;
  width: 310px;
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
`;

import styled from "styled-components";

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: ${props => props.mg_bottom};
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    margin-top: 50px;
  }
`;
export const SignUpBoxContainer = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 10px;
  box-shadow: 10px 10px 15px 2px lightgray;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    box-shadow: 0 0 0 0;
  }
`;
export const SignUpTitle = styled.span`
  width: 400px;
  text-align: center;
  height: auto;
  margin-bottom: 15px;
  margin-top: 15px;
  position: relative;
`;
export const SignUpForm = styled.form`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
export const SignUpDataGroup = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpDataInputGroup = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 330px;
  height: 40px;

  .icon-hidden {
    position: absolute;
    font-size: 20px;
    right: 11px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpDataInputIcon = styled.div`
  .icon-cancel {
    position: absolute;
    font-size: 20px;
    right: 8px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
  .icon-password-cancel {
    position: absolute;
    font-size: 20px;
    right: 35px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpAlertSpan = styled.div`
  width: 330px;
  box-sizing: border-box;
  height: 20px;
  font-size: 13px;
  color: transparent;
  line-height: 20px;
`;
export const SignUpDataSelect = styled.select`
  width: 100%;
  height: 40px;

  &:focus {
    outline: none;
  }
`;

export const SignUpButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: calc(10px);
  margin-bottom: 20px;
`;

export const GoToSignIn = styled.span`
  font-size: 18px;
  height: 21px;
  position: absolute;
  left: 40px;
  bottom: 0px;
  color: gray;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const AdminCheckBoxGroub = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin-top: 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  color: #6563ff;
  font-size: 18px;
`;

export const SignUpDataAgreementGroup = styled.div`
  box-sizing: border-box;
  width: 60%;
  margin-top: 14px;
  margin-bottom: 10px;
`;
export const SignUpDataAgreement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  height: 20px;
  text-align: left;
`;
export const SignUpDataAgreementSpan = styled.span`
  margin-left: 10px;
  font-size: 14px;
  margin-top: 3px;
`;

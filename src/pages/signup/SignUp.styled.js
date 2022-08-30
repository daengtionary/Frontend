import styled from 'styled-components';

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: ${(props) => props.mg_bottom};
`;
export const SignUpBoxContainer = styled.div`
  box-sizing: border-box;
  width: 440px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const SignUpTitle = styled.span`
  width: 100%;
  height: auto;
  margin-bottom: 29px;
`;
export const SignUpForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const SignUpDataGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const SignUpDataSpan = styled.span`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  margin-bottom: 5px;
`;
export const SignUpDataInputGroup = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 40px;
  .icon-hidden {
    position: absolute;
    font-size: 22px;
    right: 5px;
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
    font-size: 22px;
    right: 5px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
  .icon-password-cancel {
    position: absolute;
    font-size: 22px;
    right: 35px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpAlertSpan = styled.div`
  box-sizing: border-box;
  height: 20px;
  font-size: 13px;
  color: transparent;
  line-height: 20px;
`;
export const SignUpDataSelect = styled.select`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  padding-right: 30px;
  &:focus {
    outline: none;
  }
`;
export const SignUpDataSelectBirthGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SignUpDataSelectBirth = styled.select`
  width: calc(100% / 3 - 20px / 3);
  height: 40px;
`;
export const SignUpDataAgreementGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 44px;
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
export const SignUpButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

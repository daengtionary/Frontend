import styled from 'styled-components';

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 170px;
  margin-bottom: ${(props) => props.mg_bottom};
`;
export const SignUpBoxContainer = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 10px;
  box-shadow: 2px 2px 0px 3px lightgray;
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
  :hover{
    color: black;
    cursor: pointer;
  }
`
import styled from "styled-components";

export const ChatRoomAll = styled.div`
  z-index: 99;
  position: fixed;
  top: 60%;
  left: 80%;
  width:  400px;
  height: 600px;
  max-width: 1360px;
  min-width: 400px;
  max-height: 1160px;
  min-height: 600px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 24px;
  @media screen and (max-width: 768px) {
    top: 50%;
    left: 50%;
    width:  100%;
    height: 100%;
    border-radius: 0%;
  }
` 

export const ChatRoomFullBox = styled.div`
  z-index: 99;
  width: 100%;
  height: 80%;
  overflow-y: auto;
`

export const ChatInputWrap = styled.div`
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  height: 30px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    margin: 0 10px 10px 10px;
  }
  
`;

export const ChatInputForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15px;
`

export const ChatInput = styled.input`
  padding-left: 15px;
  border: none;
  width: 100%;
  height: 30px;
  border-radius: 15px;
  background-color: #F1F1F5;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    width: calc(100% - 90px);
    padding: 20px 10px 20px 15px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
export const SendButton = styled.button`
  width:100px;
  height: 30px;
  border-radius: 15px;
  background-color: #F1F1F5;
  outline: none;
  border: none;
  color: gray;
  @media screen and (max-width: 768px) {
    height: 55px;
  }
`;
export const ExitButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 5px 10px;
  position: relative;
  z-index: 2;
  top: 18px;
`;


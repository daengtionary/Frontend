import styled from "styled-components";
import Button from "../../elements/button/Button";
import Input from "../../elements/input/Input";

export const ChatInputWrap = styled.div`
  margin: 0 30px 30px 30px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    margin: 0 10px 10px 10px;
  }
`;
export const ChatInput = styled(Input)`
  border: none;
  width: calc(100% - 100px);
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
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
export const ExitButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background-color: #fff;
  border: solid 1px ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding: 5px 10px;
  position: absolute;
  z-index: 2;
  top: 18px;
  right: 60px;
`;


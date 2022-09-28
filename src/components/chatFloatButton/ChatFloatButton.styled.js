import styled from "styled-components";

export const FloatWrap = styled.div`
  display: none;
  z-index: 9;
  position: fixed;
  bottom: 30px;
  right: 30px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    bottom: 20px;
    right: 20px;
  }
`;

export const ChatButtonWrap = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 50px;
  border: none;
  background: #ffffff;
  box-shadow: 4px 4px 25px rgba(0, 25, 72, 0.21);
  font-size: ${({ theme }) => theme.fontSizes.s};
  cursor: pointer;
  div {
    text-align: center;
    padding-top: 12px;
    @media ${({ theme }) => theme.device.mobile} {
      padding-top: 14px;
    }
  }
  span {
    display: block;
    padding-top: 0px;
    @media ${({ theme }) => theme.device.mobile} {
      padding-top: 5px;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 67px;
    height: 67px;
  }
`;

export const ChatButton = styled.div`
  position: relative;
`;

export const NewNoti = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  position: absolute;
  right: 5px;
  bottom: 45px;
  background-color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    right: 2px;
    bottom: 40px;
  }
  &:before {
    position: absolute;
    left: 0;
    top: -10%;
    width: 100%;
    height: 120%;
    background: ${({ theme }) => theme.colors.orange};
    filter: blur(10px);
    content: "";
    opacity: 0;
    animation: flash 0.9s ease-out alternate infinite;
  }
  @keyframes flash {
    to {
      opacity: 1;
    }
  }
`;

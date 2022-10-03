import styled from 'styled-components';

export const FloatWrap = styled.div`
  z-index: 98;
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
export const Dim = styled.div`
  z-index: 98;
  box-sizing: border-box;
  display: 'block';
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const Wrap = styled.div`
  z-index: 99;
  position: fixed;
  top: 60%;
  left: 80%;
  width: 400px;
  height: 600px;
  max-width: 1360px;
  min-width: 400px;
  max-height: 1160px;
  min-height: 600px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  border-radius: 24px;
  @media screen and (max-width: 768px) {
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
export const Title = styled.div`
  z-index: 99;
  margin: 20px;
  margin-left: 30px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.l};
  display: flex;
  justify-content: space-between;

  span {
    cursor: pointer;
  }

  img {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    :hover {
      cursor: pointer;
    }
  }
`;
export const LeftWrap = styled.div`
  width: 100%;
`;
export const ListWrap = styled.div`
  height: 80%;
  overflow-y: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;


export const HelpMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  line-height: 1.2;
  margin: auto 0;
`;

import styled from "styled-components";

export const FooterContainer = styled.div`
  bottom: 0;
  width: 100vw;
  height: 173px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
`;

export const Logo = styled.div`
  width: 77px;
  height: 44px;
  color: #797979;
  font-size: 36px;
  font-weight: bold;
`;

export const ListWrap = styled.div`
  display: flex;
`;

export const ListBox = styled.div`
  margin: 0;
  padding: 0;
`;

export const Ulist = styled.div`
  list-style: none;
  padding: 0 15px;
  margin: 0;

  li {
    font-size: 12px;
    margin-bottom: 8px;
  }

  li:first-child {
    font-weight: bold;
  }
`;

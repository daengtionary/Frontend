import styled from "styled-components";

export const TradeAll = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
  }
`;

export const StyledSerchFilterBox = styled.div`
  width: 73%;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const TradeTopBox = styled.div`
  display: block;
  position: relative;
`;


export const TradeFullBox = styled.div`
  width: 73%;
  .postItem {
    float: right;
    margin-right: 4.5%;
  }
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const StyledTradeFilterBox = styled.div`
  margin-top: 20px;
  span {
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
  }
  justify-content: right;
  display: flex;
`;

export const CardList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px 90px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    gap: 20px 40px;
  }
`;

export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 40px;
  cursor: pointer;
  padding: 6px 20px 6px 0;
  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

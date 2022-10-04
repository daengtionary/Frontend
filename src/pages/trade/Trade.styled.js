import styled from "styled-components";

export const TradeAll = styled.div`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
  }
`;

export const StyledSerchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;
`;

export const StyledSerchFilterBox = styled.div`
  width: 1380px;
  margin-top: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const StyledSerchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 3px;
  position: relative;
  width: 380px;
  span {
    width: 150px;
    font-size: 30px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    span {
      width: 130px;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

export const TradeTopBox = styled.div`
  display: block;
  position: relative;
`;


export const TradeFullBox = styled.div`
  width: 1380px;
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
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px 86px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    gap: 20px 40px;
  }
`;

export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 0;
  cursor: pointer;
  padding: 6px 20px 6px 0;
  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

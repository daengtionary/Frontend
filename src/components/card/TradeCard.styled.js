import styled from "styled-components";

export const TradeCardFullBox = styled.div`
  width: 280px;
  height: 370px;
  position: relative;
  :hover {
    cursor: pointer;
    border-radius: 20px;
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 2px 2px 5px gray;
    > div:nth-child(2) > div {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 190px;
  }
`;

export const ItemImageBox = styled.img`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;

export const ItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  float: left;
  left: 0%;
  bottom: 2%;
`;

export const ItemNameSpan = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-left: 2px;
`;

export const ItemPriceSpan = styled.span`
  font-size: 19px;
  font-weight: 700;
  margin-left: 2px;
  .won {
    font-size: 18px;
    color: gray;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    font-weight: 500;
    .won {
      font-size: 12px;
      color: gray;
    }
  }
`;

export const ItemIconBox = styled.div`
  display: flex;
  position: absolute;
  margin-right: 2px;
  right: 0%;
  bottom: 2.8%;
  .busket {
    font-size: 22px;
    color: #5f5f5f;
  }
  @media screen and (max-width: 768px) {
    .busket {
      font-size: 16px;
      color: #5f5f5f;
    }
  }
`;

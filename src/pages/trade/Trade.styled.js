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
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;

export const TradeTopBox = styled.div`
  display: block;
  position: relative;
`;

// export const TopFilterBox = styled.div`
//   display: flex;
//   position: absolute;
//   right: 14%;
// `;

export const TradeFullBox = styled.div`
  margin-top: 20px;
  width: 80%;
  .postItem {
    float: right;
    margin-right: 4.5%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const CardList = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px 90px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    gap: 20px 40px;
  }
`;

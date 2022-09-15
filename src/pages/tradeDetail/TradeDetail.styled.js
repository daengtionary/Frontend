import styled from 'styled-components';

export const TradeDetailAll = styled.div`
  display: flex;
  justify-content: center;
`;

export const TradeDetailFullBox = styled.div`
  width: 1000px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
`;

export const ImgBox = styled.div`
  width: 700px;
  height: auto;
  display: flex;
`;

export const ItemDetailImg = styled.img`
  width: 500px;
  height: 500px;
`;

export const ItemContentBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: row;
`;

export const ItemTitleBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const ItemNameInfoText = styled.div`
  width: 420px;
  height: 130px;
  border-bottom: 2px solid lightgray;
  display: flex;
  flex-direction: column;
  .itemName {
    margin-top: 5px;
    font-size: 28px;
    font-weight: 700;
  }
  .price {
    font-weight: 700;
    font-size: 35px;
    margin-top: auto;
    margin-bottom: 15px;
  }
  .won{
    color: gray;
    font-size: 22px;
  }
`;

export const ItemDetailInfoText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 50px;
  width: 420px;
  height: auto;
  font-size: 15px;
  .sellerNick{
    font-size: 17px;
    font-weight: 600;
    color: gray;
    margin-left: 30px;
  };
  .sellInfo{
    font-size: 17px;
    font-weight: 600;
    color: gray;
    margin-left: 30px;
  };
`

export const ButtonWrap = styled.div`
  display: flex;
  position:absolute;
  bottom: 0%;
`;

export const AddWishButton = styled.div`
  width: 170px;
  height: 100px;
  text-align: right;
  background-color: beige;
  line-height: 100px;
  font-size: 25px;
  font-weight: 600;
  margin-right: 30px;
  justify-content: right;
`;

export const ChatStartButton = styled.div`
  width: 170px;
  height: 100px;
  text-align: right;
  background-color: aliceblue;
  line-height: 100px;
  font-size: 25px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;

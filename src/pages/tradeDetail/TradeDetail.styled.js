import styled from "styled-components";

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
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const ImgBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 400px;
    .swipe{
      height: auto;
    }
  }
`;

export const ItemDetailImg = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 10%;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 400px;
    border-radius: 20px 20px 0 0 ;
  }
`;

export const ItemContentBox = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const ItemTitleBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
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
  .won {
    color: gray;
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    width: 348px;
    height: 65px;
    border-bottom: 0px solid black;
    border: 1px solid gray;
    border-radius: 0 0 20px 20px;
    padding-left: 10px;
    .won {
    font-size: 19px;
    color: black;
  }
  .price {
    font-weight: 500;
    font-size: 20px;
  }
  .itemName {
    font-size: 17px;
    font-weight: 500;
    color: #b8c2c6;
  }
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
  font-size: 17px;
  font-weight: 500;
  .sellInfo {
    font-size: 17px;
    font-weight: 700;
    color: #b8c2c6;
    position: absolute;
    left: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 150px;
    margin-top: 20px;
    gap: 3px 10px;
    padding-left: 10px;
    .sellInfo {
    font-size: 17px;
    font-weight: 700;
    color: #b8c2c6;
    position: absolute;
    left: 40%;
  }
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: end;
  bottom: -5%;
  right: 8%;

  img {
    position: relative;
    width: 33px;
    height: 33px;
    top: 8px;
    right: 3px;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    bottom: 77.3%;
    right: 7%;
  }
  img {
    position: relative;
    width: 25px;
    height: 25px;
    top: 7px;
    right: 2px;
  }
`;

export const AddWishButton = styled.div`
  width: 120px;
  height: 100px;
  text-align: right;
  line-height: 100px;
  font-size: 25px;
  font-weight: 600;
  margin-right: 30px;
  justify-content: right;
  @media screen and (max-width: 768px) {
    width: 120px;
    bottom: 80%;
    font-size: 18px;
    margin-right: 0px;
  }
`;

export const ChatStartButton = styled.div`
  width: 120px;
  height: 100px;
  text-align: right;
  line-height: 100px;
  font-size: 25px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 120px;
    bottom: 80%;
    font-size: 18px;
  }
`;

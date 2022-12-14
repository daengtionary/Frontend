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
    .swipe {
      height: auto;
      border-radius: 20px 20px 0 0;
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
    border-radius: 20px 20px 0 0;
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
  .info {
    color: #6563ff;
    margin-left: 30px;
    font-size: 35px;
    margin-top: 20px;
  }
  span {
    font-weight: 500;
    font-size: 35px;
  }
  @media screen and (max-width: 768px) {
    width: 348px;
    height: 65px;
    border-bottom: 0px solid black;
    border: 1px solid gray;
    border-radius: 0 0 20px 20px;
    padding-left: 10px;
    .info {
      color: #6563ff;
      margin-left: 10px;
      font-size: 20px;
    }
    span {
      font-size: large;
      font-weight: 400;
      font-size: 20px;
      margin-top: 25.3px;
      display: none;
    }
  }
`;

export const ItemDetailInfoText = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
  width: 420px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  .sellInfo {
    font-size: 16px;
    font-weight: 500;
    color: black;
    position: absolute;
    left: 30%;
    max-height: 25px;
    overflow: hidden;
  }
  .delete{
    width: 20px;
    right: 40px;
    top: 20px;
    display: flex;
    position: absolute;
    z-index: 300;
    :hover{
      width: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 350px;
    height: 150px;
    margin-top: 20px;
    gap: 3px 10px;
    padding-left: 10px;
    .sellInfo {
      font-size: 13px;
      font-weight: 500;
      color: black;
      position: absolute;
      left: 40%;
    }
    .delete{
      left: 6%;
      top: 1%
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

export const MapTooltip = styled.div`
  background-color: #eef3fd;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  height: auto;
  letter-spacing: -0.25px;
  margin-top: 10px;
  padding: 5px 11px;
  position: relative;
  width: fit-content;
  z-index: 100;
  color: #505bf0;
  animation: jumpDown 1.5s linear 10;
  /* animation: jumpDown1 1.5s linear infinite; */

  &::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 5px;
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  &::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: '';
    display: block;
    left: 5px;
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }

  @keyframes jumpDown {
    0% {
      /* filter: hue-rotate(0deg); */
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0px;
      top: 5px;
    }
    50% {
      left: 0px;
      top: 0px;
    }
    75% {
      left: 0px;
      top: 5px;
    }
    100% {
      /* filter: hue-rotate(360deg); */
      left: 0px;
      top: 0px;
    }
  }

  @media screen and (max-width: 768px) {
    animation: none;
    &::after,
    &::before {
      animation: none;
    }
  }
`;

export const MapAddress = styled.div`

  width: 80vw;
  display: flex;
  flex-direction: column;
  color: gray;
  margin-bottom: 10px;
  position: absolute;
  bottom: 60px;

  span:first-child {
    display: flex;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-bottom: 30px;
    border-bottom: none;
    position: absolute;
    bottom: 10%;
  }
`;
export const MapMark = styled.img`
  width: 24px;
  height: 24px;
`;

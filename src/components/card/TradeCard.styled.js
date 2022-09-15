import styled from "styled-components";

export const TradeCardFullBox = styled.div`
width: 280px;
height: 370px;
position: relative;
`;

export const ItemImageBox = styled.img`
width: 100%;
height: 300px;
background-color: lightgray;
border-radius: 20px;
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
`

export const ItemPriceSpan = styled.span`
font-size: 19px;
font-weight: 700;
.won{
  font-size: 18px;
  color:gray;
}
`

export const ItemIconBox = styled.div`
display: flex;
position: absolute;
right: 0%;
bottom: 2.8%;
.busket{
  font-size: 22px;
  color: #5F5F5F;
}
`
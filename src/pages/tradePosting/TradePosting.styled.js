import styled from "styled-components";

export const StyleTradePageTopTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid lightgray;
  span{
    position: absolute;
    left: 15%;
    font-weight: 600;
    font-size: 23px;
  }
`

export const StyleTradePostingAll = styled.div`
width: 100%;
height : 100%;
background-color: aliceblue;
display: flex;
flex-direction: column;
`

export const StyleTradePostingImageBox = styled.div`
width: 75%;
height: 250px;
display: flex;
flex-direction: row;
background-color: gray;
border-bottom: 2px solid lightgray;
margin: auto;
span{
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
}
input{
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  border-radius:  5px ;
  background-color: aliceblue;
}
`

export const StyleTradeItemTitleBox = styled.div`
width: 75%;
height: 150px;
background-color: beige;
border-bottom: 2px solid lightgray;
margin: auto;
display: flex;
justify-content: right;
align-items: center;
position: relative;
span{
  position: absolute;
  left: 0%;
}
`

export const StyleTradePlaceBox = styled.div`
  width: 75%;
  height: 250px;
  background-color: aqua;
  border-bottom: 2px solid lightgray;
  margin: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
span{
  position: absolute;
  left: 0%;
}
`

export const StyleTradeStatusBox = styled.div`
  width: 75%;
  height: 150px;
  background-color: wheat;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
input{
  position: absolute;
  left: 15%;
}
`

export const StyleTradePriceBox = styled.div`
  width: 75%;
  height: 150px;
  background-color: gray;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
input{
  position: absolute;
  left: 15%;
}
`

export const StyleTradeDetailBox = styled.div`
  width: 75%;
  height: 300px;
  background-color: wheat;
  margin: auto;
  position: relative;
input{
  position: absolute;
  left: 15%;
}
`

export const StyleTradePlaceInputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyleTradePlaceSpanBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyleSubmitButton = styled.button`
  width: 75%;
  margin: auto;
  
`
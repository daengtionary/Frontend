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

export const StyleTradePostingForm = styled.form`
width: 100%;
height : 100%;
display: flex;
flex-direction: column;
`

export const StyleTradePostingImageBox = styled.div`
width: 65%;
height: 300px;
display: flex;
flex-direction: row;
border-bottom: 2px solid lightgray;
margin: auto;
position: relative;
span{
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
}
input{
  display: none;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 6%;
  left: 180px;
  border-radius:  10px ;
  background-color: #F1F1F5;
}
`

export const StyleTradeUplodeLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 6%;
  left: 180px;
  border-radius:  10px ;
  background-color: #F1F1F5;
  border: none;
  .camera{ 
    font-size: 80px;
    color: white;
    }
`

export const StylePreviewBox = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  position: absolute;
  left: 450px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  .cancelIcon{
    position: relative;
    top: 2px;
    left: 3px;
    color: gray;
  }
`

export const StyleShowImageBox = styled.div`
  width: 120px;
  height: 120px;

`
export const StyleShowImage = styled.img`
  width: 120px;
  height: 120px;
`



export const StyleTradeItemTitleBox = styled.div`
width: 65%;
height: 150px;
border-bottom: 2px solid lightgray;
margin: auto;
display: flex;
justify-content: right;
align-items: center;
position: relative;
span{
  position: absolute;
  left: 0%;
  font-weight: 600;
}
input{
  position: absolute;
  left: 180px;
  top: 35%;
  }
`

export const StyleTradePlaceBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  span{
  position: absolute;
  left: 0%;
  font-weight: 600;
}
`

export const StyleTradeStatusBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;

.statusSpan{
  position: absolute;
  left: 0%;
  font-weight: 600;
}

`

export const StyleTradeCheckBoxWrap = styled.div`
  position: absolute;
  left: 180px;
  display: flex;
  align-items: center;
  gap: 0 22px;
`


export const StyleTradePriceBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
input{
  position: absolute;
  left: 180px;
}
span{
  position: absolute;
  left: 0%;
  font-weight: 600;
}
`

export const StyleTradeDetailBox = styled.div`
  width: 65%;
  min-height: 200px;
  height: auto;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  margin-top: 50px;
input{
  position: absolute;
  left: 180px;
}
span{
  position: absolute;
  left: 0%;
  font-weight: 600;
}
`


export const StyleTradePlaceSpanBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 180px;
`

export const StyleSubmitButton = styled.button`
  width: 100px;
  height: 30px;
  margin: auto;
  
`


import styled from 'styled-components';

export const StyleTradePageTopTitle = styled.div`
  width: 65%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  margin: auto;
  border-bottom: 2px solid lightgray;
  span {
    position: absolute;
    left: 0%;
    font-weight: 600;
    font-size: 23px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 50px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    span {
      position: relative;
    }
  }
`;

export const StyleTradePostingForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: auto;
    display: flex;
  }
`;

export const StyleTradePostingImageBox = styled.div`
  width: 65%;
  height: 300px;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  span {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 600;
  }
  input {
    display: none;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 6%;
    left: 180px;
    border-radius: 10px;
    background-color: #f1f1f5;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;

export const StyleTradeUplodeLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  position: absolute;
  top: 6%;
  left: 180px;
  border-radius: 10px;
  background-color: #f1f1f5;
  border: none;
  .camera {
    font-size: 80px;
    color: white;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    display: flex;
    top: 15%;
    left: 0px;
  }
`;

export const StylePreviewBox = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  position: absolute;
  left: 450px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  .cancelIcon {
    position: relative;
    top: 2px;
    left: 3px;
    color: gray;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    top: -5%;
    left: 200px;
    .cancelSpanBox {
      display: flex;
      flex-direction: row;
      font-size: 10px;
    }
    .cancelIcon {
      position: relative;
      top: 0px;
      left: 28px;
      font-size: 20px;
      color: gray;
    }
  }
`;

export const StyleShowImageBox = styled.div`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 100px;
  }
`;
export const StyleShowImage = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const StyleTradeItemTitleBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  span {
    position: absolute;
    left: 0%;
    font-weight: 600;
  }
  input {
    position: absolute;
    left: 180px;
    top: 35%;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
    span {
    position: absolute;
    left: 5%;
    font-weight: 600;
  }
  input {
    position: absolute;
    left: 100px;
    width: 150px;
    top: 35%;
  }
  }

`;

export const StyleTradePlaceBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  span {
    position: absolute;
    left: 0%;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
    span {
      position: absolute;
      left: 5%;
      font-weight: 600;
    }
  }
`;

export const StyleTradeStatusBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  .statusSpan {
    position: absolute;
    left: 0%;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
    .statusSpan {
      position: absolute;
      left: 5%;
      font-weight: 600;
    }
  }
  
`;

export const StyleTradeCheckBoxWrap = styled.div`
  position: absolute;
  left: 180px;
  display: flex;
  align-items: center;
  gap: 0 22px;
  @media screen and (max-width: 768px) {
    left: 100px;
  }
`;

export const StyleTradePriceBox = styled.div`
  width: 65%;
  height: 150px;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  div {
    display: flex;
    position: absolute;
    left: 180px;
    width: 50%;
    align-items: center;
  }
  span {
    font-weight: 600;
  }
  .won {
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
    span {
      position: absolute;
      left: 5%;
      font-weight: 600;
    }

    div {
    display: flex;
    position: absolute;
    left: 100px;
    width: 300px;
    align-items: center;
  }

  input{
      width: 150px;
      left: 5%;
    }
  }
  .won {
    font-weight: 400;
    left: 170px;
  }
`;

export const StyleTradeDetailBox = styled.div`
  width: 65%;
  min-height: 200px;
  height: auto;
  border-bottom: 2px solid lightgray;
  margin: auto;
  position: relative;
  margin-top: 50px;
  input {
    position: absolute;
    left: 180px;
  }
  span {
    position: absolute;
    left: 0%;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100px;
    span {
      position: absolute;
      left: 5%;
      font-weight: 600;
    }
    input {
    position: absolute;
    left: 100px;
    width: 300px;
  }
  }
`;

export const StyleTradePlaceSpanBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  left: 180px;
  @media screen and (max-width: 768px) {
    left: 100px;
  }
`;

export const StyleSubmitButton = styled.button`
  width: 200px;
  height: 40px;
  margin: auto;
  background-color: #9493FF;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  border: 0px;
  color: white;

  :hover{
    cursor: pointer;
    color: black;
  }

`;


export const StyledInputField = styled.div`
display: flex;
flex-direction: ${(props) => (props.column ? "column" : "row")};
flex-wrap: wrap;
flex: 7 7;
position: relative;
margin-top: 15px;
@media screen and (max-width: 768px) {
  margin-top: 12px;;
}
`; 

export const StyledInput = styled.input`
/* display: ${(props) => (props.display ? props.display : "")}; */
width: 48%;
height: 2em;
/* text-indent: 1em; */
padding: 0 1em;
outline: none;
border: 1px solid #ccc;
border-radius: 10px;
margin: 0 0 1em 0;
margin-left: 180px;
@media screen and (max-width: 768px) {
  margin-left: 100px;
}
`;










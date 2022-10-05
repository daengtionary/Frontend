import styled from "styled-components";

export const StyledMatchingCardBox = styled.div`
  width: 75em;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3em;
  padding: 2em 1em;
  border: 1.5px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  :hover {
    transition: box-shadow 0.2s;
    box-shadow: 2px 2px 5px gray;
    div {
      :first-child {
        div {
          transform: scale(1.1);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 370px;
    flex-direction: column;
    padding: 1em;
    height: auto;
    background-color: #fff;
    margin-bottom: 1em;
  }
`;

export const StyledMatchingCardImgBox = styled.div`
  height: 18em;
  flex: 1 1;
  margin: 0 1.5em;
  overflow: hidden;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    background-color: #eee;
    width: 100%;
    height: 12em;
    margin-bottom: 0.6em;
  }
`;

export const StyledMatchingCardImg = styled.div`
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
  background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
  transition: transform 0.2s;
  @media screen and (max-width: 768px) {
    background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
    width: 100%;
    height: 16em;
  }
`;

export const StyledMatchingCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 96%;
    padding: 0 1em 0 0.5em;
    .detail{
      height: auto;
    }
    .title{
      font-size: large;
      font-weight: 600;
    }
  }

`;

export const StyledMatchingCardText = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  height: ${(props) => (props.height ? props.height : "")};
  word-break: keep-all;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  @media screen and (max-width: 768px) {
    width: 80%;
    display: flex; 
    font-size: 15px;
    text-align: left;
    background-color: aliceblue;
    max-width: 80%;
    overflow: hidden;
    font-weight: 500;
  }
`

export const StyledMatchingHeartButton = styled.div`
  position: absolute;
  font-size: 27px;
  color: #6563FF;
  font-weight: 600;
  top: 0;
  right: 1em;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    top: 6px;
    right: 8px;
  }
`;
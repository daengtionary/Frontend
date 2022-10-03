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
      /* div {
        :nth-child(2) {
          text-decoration: underline;
        }
      } */
      :first-child {
        div {
          transform: scale(1.1);
        }
      }
    }
  }
`;

export const StyledMatchingCardImgBox = styled.div`
  height: 18em;

  flex: 1 1;
  margin: 0 1.5em;
  overflow: hidden;
  border-radius: 20px;
`;

export const StyledMatchingCardImg = styled.div`
  /* width: 60%; */
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
  background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
  transition: transform 0.2s;
`;

export const StyledMatchingCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  position: relative;
`;

export const StyledMatchingCardText = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "")};
  height: ${(props) => (props.height ? props.height : "")};
  word-break: keep-all;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "")};
`

export const StyledMatchingHeartButton = styled.div`
  position: absolute;
  font-size: 1.6em;
  top: 0;
  right: 1em;
`;
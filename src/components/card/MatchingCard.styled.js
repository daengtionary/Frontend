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
  width: 18em;
  height: 18em;
  flex: 3 3;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;
export const StyledMatchingCardImg = styled.img`
  border-radius: 20px 20px 0 0;
  min-height: 100%;
  width: 18em;
  transition: transform 0.2s;
`;
export const StyledMatchingCardTextBox = styled.div`
  width: 18em;
  padding: 0.5em 0;
`;
export const StyledMatchingCardText = styled.div`
  display: inline-block;
  margin: 0.4em 0;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.color ? props.color : "")};
  padding: 0 8px;
  border: ${(props) => (props.border ? props.border : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  height: 1.8em;
  line-height: 1.8em;
`;
export const StyledMatchingTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

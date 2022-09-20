import styled from "styled-components";

export const StyledCardBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 1 0; */
  position: relative;
`;
export const StyledRankBadge = styled.div`
  display: block;
  text-align: center;
  line-height: 2em;
  position: absolute;
  top: -20px;
  left: -7px;
  background: #ffc;
  width: 2em;
  height: 2em;
  border: 3px solid #666;
  border-radius: 50%;
`;
export const StyledCardImgBox = styled.div`
  /* border-bottom: 30px solid #cccccc90;
  border-top: 30px solid #cccccc90; */
  border-radius: 20px;
  background: ${(props) =>
    `url(${props.background}) center / cover no-repeat `};
  min-height: 16em;
  width: 18em;
  flex: 3 3;
`;
// export const StyledCardImg = styled.img``;
export const StyledCardTextBox = styled.div`
  width: 18em;
  padding: 0.5em 0;
  flex: 1 1;
`;
export const StyledCardText = styled.div`
  display: inline-block;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
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
export const StyledTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const CardBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 1 0; */
  position: relative;
`;
export const RankBadge = styled.div`
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
export const CardImgBox = styled.div`
  border-bottom: 30px solid #cccccc90;
  border-top: 30px solid #cccccc90;
  /* background-color: #999; */
  background: ${(props) =>
    `url(${props.background}) center / cover no-repeat `};
  min-height: 16em;
  width: 18em;
  flex: 3 3;
`;
// export const CardImg = styled.img``;
export const CardTextBox = styled.div`
  width: 18em;
  padding: 1em 0;
  flex: 1 1;
`;
export const CardText = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: 0.4em 0;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

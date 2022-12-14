import styled from "styled-components";
import nullImg from "../../static/image/로딩-이미지.jpg";

export const StyledCardBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  :hover {
    border-radius: 20px;
    transition: box-shadow 0.2s;
    box-shadow: 2px 2px 5px gray;
    > div {
      border-radius: 20px 20px 0 0;
    }
    > div:nth-child(2) > div {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    width: 10.5em;
    height: 15em;
    margin-bottom: 0.8em;
  }
`;
export const StyledRankBadge = styled.div`
  display: block;
  text-align: center;
  line-height: 2em;
  position: absolute;
  top: 0;
  left: 12px;
  background: ${(props) => `url(${props.rank}) center / cover no-repeat `};
  width: 3em;
  height: 3em;
  z-index: 2;
`;
export const StyledCardImgBox = styled.div`
  width: 18em;
  height: 18em;
  flex: 3 3;
  overflow: hidden;
  border-radius: 20px;
  transition: transform 0.2s, border-radius 0.2s;

  @media screen and (max-width: 768px) {
    width: 10.5em;
    height: 10em;
    border-radius: 20px;
  }
`;
export const StyledCardImg = styled.div`
  border-radius: 20px 20px 0 0;
  background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat ` : `url(${nullImg}) center / contain no-repeat `)};
  min-height: 100%;
  width: 18em;
  transition: transform 0.2s, border-radius 0.2s;
  :hover {
    border-radius: 20px 20px 0 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 10em;
    border-radius: 20px 20px 0 0;
  }
`;
export const StyledCardTextBox = styled.div`
  width: 100%;
  padding: 0.5em 0;
`;
export const StyledCardText = styled.div`
  max-width: 200px;
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
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.m_fontSize};
    min-width: 24px;
    max-width: 100px;
    padding: 0 5px;
  }
`;
export const StyledTitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

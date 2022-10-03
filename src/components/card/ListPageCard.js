import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import heartIcon from "../../static/image/heart.png";

const ListPageCard = ({ data, onClick }) => {
  // const navigate = useNavigate();
  return (
    <StyledCardBox onClick={onClick}>
      <StyledCardImgBox>
        <StyledCardImg background={data?.mapImgUrl} />
      </StyledCardImgBox>
      <StyledCardTextBox>
        <StyledCardText width={"15%"} color="#6563ff" margin="6px 0" fontSize="1em" fontWeight="400">
          {data?.address?.slice(0, 2)}
        </StyledCardText>
        <StyledCardText width={"85%"} m_fontSize={"1.2em"} color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {data?.title}
        </StyledCardText>
        <StyledCardText width={"30%"} color="#000" margin="6px 0" fontSize=".7em" fontWeight="400">
          별점⭐⭐⭐⭐{"⭐".repeat(data?.star)}
        </StyledCardText>
        <StyledCardText width={"70%"} color="#797979" margin="6px 0" fontSize=".8em" fontWeight="400">
          {data?.address}
        </StyledCardText>
        <StyledCardText md_display={"none"} color="#797979" margin="6px 0" fontSize="1em" fontWeight="400" height="10em">
          {data?.content}
        </StyledCardText>
        <StyledHeartButton>
          <img src={heartIcon} style={{ width: "1em", height: "1em" }} />
        </StyledHeartButton>
      </StyledCardTextBox>
    </StyledCardBox>
  );
};

export default ListPageCard;

const StyledCardBox = styled.div`
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
    width: 88%;
    flex-direction: column;
    padding: 1em;
    height: auto;
    background-color: #fff;
    margin-bottom: 1em;
  }
`;
const StyledCardImgBox = styled.div`
  /* background: ${(props) => `url(${props.background}) no-repeat top center`}; */
  height: 18em;
  /* width: 18em; */
  flex: 1 1;
  margin: 0 1.5em;
  overflow: hidden;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    background-color: #eee;
    width: 22em;
    height: 12em;
    margin-bottom: 0.6em;
  }
`;
const StyledCardImg = styled.div`
  /* width: 60%; */
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
  background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
  transition: transform 0.2s;
  @media screen and (max-width: 768px) {
    background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
    width: 22em;
    height: 12em;
  }
`;
const StyledCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  /* height: 18em; */
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 0 0 1em;
  }
`;
const StyledCardText = styled.div`
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
  @media screen and (max-width: 768px) {
    width: ${(props) => props.width};
    display: ${(props) => props.md_display};
    font-size: ${(props) => props.m_fontSize};
  }
`;
const StyledHeartButton = styled.div`
  position: absolute;
  font-size: 1.6em;
  top: 0;
  right: 1em;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
    top: 0.6em;
    right: 0.6em;
  }
`;

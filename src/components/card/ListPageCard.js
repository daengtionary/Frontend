import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ListPageCard = ({ data, onClick }) => {
  // const navigate = useNavigate();
  return (
    <StyledCardBox onClick={onClick}>
      <StyledCardImgBox>
        <StyledCardImg background={data?.mapImgUrl} />
      </StyledCardImgBox>
      <StyledCardTextBox>
        <StyledCardText color="#6563ff" margin="6px 0" fontSize="1em" fontWeight="400">
          {data?.address?.slice(0, 2)}
        </StyledCardText>
        <StyledCardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {data?.title}
        </StyledCardText>
        <StyledCardText color="#000" margin="6px 0" fontSize=".5em" fontWeight="400">
          별점⭐⭐⭐⭐{"⭐".repeat(data?.star)}
        </StyledCardText>
        <StyledCardText color="#999" margin="6px 0" fontSize=".7em" fontWeight="700">
          {data?.address}
        </StyledCardText>
        <StyledCardText color="#999" margin="6px 0" fontSize=".8em" fontWeight="400" height="10em">
          “믿을 수 있는” 으뜸 동물병원 . 2차병원 출신 의료진들이 고급 의료 서비스를 제공합니다.
        </StyledCardText>
        {/* <CardText
          color="#000"
          margin="6px 0"
          fontSize="1em"
          fontWeight="400"
          textAlign="right"
          justify="flex-end"
        >
          35,000원❤️
        </CardText> */}
        <StyledHeartButton>❤️</StyledHeartButton>

        {/* {console.log(data.mapImgUrl)} */}
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
const StyledCardImgBox = styled.div`
  /* background: ${(props) => `url(${props.background}) no-repeat top center`}; */
  height: 18em;
  /* width: 18em; */
  flex: 1 1;
  margin: 0 1.5em;
  overflow: hidden;
  border-radius: 20px;
`;
const StyledCardImg = styled.div`
  /* width: 60%; */
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
  background: ${(props) => (props.background ? `url(${props.background}) center / cover no-repeat` : " linear-gradient(#ccc, #cccccc50)")};
  transition: transform 0.2s;
`;
const StyledCardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  /* height: 18em; */
  position: relative;
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
`;
const StyledHeartButton = styled.div`
  position: absolute;
  font-size: 1.6em;
  top: 0;
  right: 1em;
`;

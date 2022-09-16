import styled from "styled-components";

const ListPageCard = ({ data }) => {
  return (
    <CardBox>
      <CardImgBox>
        <CardImg background={data?.mapImgUrl} />
      </CardImgBox>
      <CardTextBox>
        <CardText color="#000" margin="6px 0" fontSize="1em" fontWeight="400">
          {data?.address?.slice(0, 2)}
        </CardText>
        <CardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {data?.title}
        </CardText>
        <CardText color="#000" margin="6px 0" fontSize="0.5em" fontWeight="400">
          별점⭐⭐⭐⭐{"⭐".repeat(data?.star)}
        </CardText>
        <CardText color="#999" margin="6px 0" fontSize="0.7em" fontWeight="700">
          {data?.address}
        </CardText>
        <CardText
          color="#999"
          margin="6px 0"
          fontSize="0.8em"
          fontWeight="400"
          height="10em"
        >
          “믿을 수 있는” 으뜸 동물병원 . 2차병원 출신 의료진들이 고급 의료
          서비스를 제공합니다.
        </CardText>
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
        <HeartButton>❤️</HeartButton>

        {/* {console.log(data.mapImgUrl)} */}
      </CardTextBox>
    </CardBox>
  );
};

export default ListPageCard;

const CardBox = styled.div`
  width: 75em;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3em;
  padding: 2em 1em;
  border: 1.5px solid #ccc;
  border-radius: 20px;
`;
const CardImgBox = styled.div`
  /* background: ${(props) =>
    `url(${props.background}) no-repeat top center`}; */
  height: 18em;
  /* width: 18em; */
  flex: 1 1;
  padding: 0 1.5em;
`;
const CardImg = styled.div`
  background: ${(props) =>
    props.background
      ? `url(${props.background}) center / cover no-repeat`
      : " linear-gradient(#ccc, #cccccc50)"};
  width: 60%;
  height: 100%;
  border-radius: 20px;
  margin: 0 auto;
`;
const CardTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1;
  padding: 0 1.5em;
  /* height: 18em; */
  position: relative;
`;
const CardText = styled.div`
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
const HeartButton = styled.div`
  position: absolute;
  font-size: 1.6em;
  top: 0;
  right: 1em;
`;

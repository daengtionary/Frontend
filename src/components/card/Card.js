import styled from "styled-components";

const Card = ({ text, data }) => {
  return (
    <CardBox>
      <CardImgBox background={data.mapImgUrl}>
        {/* {text} */}
        {/* <CardImg>사진</CardImg> */}
      </CardImgBox>
      <CardTextBox>
        <span>{data.title}</span>
        <br />
        <span>{data.address}</span>
        <br />
        <span>{data.mapInfo}</span>
        {/* {console.log(data.mapImgUrl)} */}
      </CardTextBox>
    </CardBox>
  );
};

export default Card;
const CardBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 1 0; */
`;
const CardImgBox = styled.div`
  border-bottom: 30px solid #ccc;
  border-top: 30px solid #ccc;
  /* background-color: #999; */
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  height: 16em;
  width: 18em;
  flex: 3 3;
`;
// const CardImg = styled.img``;
const CardTextBox = styled.div`
  flex: 1 1;
`;

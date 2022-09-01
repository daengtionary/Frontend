import styled from "styled-components";

const Card = ({ text }) => {
  return (
    <CardBox>
      <CardImgBox>
        {text}
        {/* <CardImg>사진</CardImg> */}
      </CardImgBox>
      <CardTextBox>
        <span>타이틀</span>
        <br />
        <span>설명</span>
        <br />
        <span>금액</span>
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
  background-color: #999;
  height: 16em;
  width: 18em;
  flex: 3 3;
`;
// const CardImg = styled.img``;
const CardTextBox = styled.div`
  flex: 1 1;
`;

import { CardBox, CardImgBox, CardTextBox } from "./Card.styled";

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

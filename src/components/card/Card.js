
import { CardBox, CardImgBox, CardText, CardTextBox } from "./Card.styled";

const Card = ({ text, data }) => {
  return (
    <CardBox>
      <CardImgBox background={data?.mapImgUrl}>
        {/* {text} */}
        {/* <CardImg>사진</CardImg> */}
      </CardImgBox>
      <CardTextBox>
        <CardText fontSize={"1.2em"} fontWeight={"700"}>
          {data?.title}
        </CardText>
        <CardText>{data?.address}</CardText>
        <CardText>{data?.mapInfo}</CardText>
        {/* {console.log(data.mapImgUrl)} */}
      </CardTextBox>
    </CardBox>
  );
};

export default Card;


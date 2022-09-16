import {
  CardBox,
  CardImgBox,
  CardText,
  CardTextBox,
  RankBadge,
} from "./Card.styled";

const Card = ({ rank, data }) => {
  return (
    <CardBox>
      <RankBadge>{rank}위</RankBadge>
      <CardImgBox
        background={
          data && data.tradeImg
            ? data.tradeImg
            : data.mapImgUrl
            ? data.mapImgUrl
            : data.communityImg
        }
      >
        {/* {text} */}
        {/* <CardImg>사진</CardImg> */}
      </CardImgBox>
      <CardTextBox>
        <CardText fontSize={"1.2em"} fontWeight={"700"}>
          {data?.title}
        </CardText>
        <CardText>
          {data && data.nick ? "작성자 " + data.nick : data.address}
        </CardText>
        <CardText>
          {data && data.status
            ? data.status
            : data.mapInfo
            ? data.mapInfo + " 운영"
            : "조회수 " + data.view + " 회"}
        </CardText>
        {/* {console.log(data.mapImgUrl)} */}
      </CardTextBox>
    </CardBox>
  );
};

export default Card;

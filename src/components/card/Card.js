import { StyledCardBox, StyledCardImg, StyledCardImgBox, StyledCardText, StyledCardTextBox, StyledRankBadge, StyledTitleBox } from "./Card.styled";

const Card = ({ rank, data, _onClick }) => {
  const shopAddress = data.address?.slice(0, 2);
  console.log(shopAddress);
  return (
    <StyledCardBox onClick={_onClick}>
      <StyledRankBadge rank={rank}></StyledRankBadge>
      <StyledCardImgBox>
        <StyledCardImg background={data && data.tradeImg ? data.tradeImg : data.mapImgUrl ? data.mapImgUrl : data.communityImg}>
          {/* {text} */}
          {/* <CardImg>사진</CardImg> */}
        </StyledCardImg>
      </StyledCardImgBox>
      <StyledCardTextBox>
        <StyledTitleBox>
          <StyledCardText border={"2px solid #6563FF"} borderRadius={"20px"} fontSize={".9em"} fontWeight={"700"} color={"#6563FF"}>
            {data && shopAddress ? shopAddress : data?.status ? data?.status : data?.nick}
          </StyledCardText>
          <StyledCardText fontSize={"1em"} fontWeight={"700"}>
            {data?.title}
          </StyledCardText>
        </StyledTitleBox>
        {/* <StyledCardText>
          {data && data.nick ? "작성자 " + data.nick : data.address}
          </StyledCardText>
        <StyledCardText>
          {data && data.status
            ? data.status
            : data.mapInfo
            ? data.mapInfo + " 운영"
            : "조회수 " + data.view + " 회"}
        </StyledCardText> */}
      </StyledCardTextBox>
    </StyledCardBox>
  );
};

export default Card;

import { StyledCardBox, StyledCardImg, StyledCardImgBox, StyledCardText, StyledCardTextBox, StyledRankBadge, StyledTitleBox } from "./Card.styled";

const Card = ({ rank, data, _onClick }) => {
  const shopAddress = data.address?.slice(0, 2) && data.address?.slice(0, 2) !== ", " ? data.address?.slice(0, 2) : "전국";
  console.log(shopAddress);
  console.log(data);
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
          <StyledCardText
            width={"10%"}
            border={"2px solid #6563FF"}
            borderRadius={"20px"}
            fontSize={".9em"}
            m_fontSize={".7em"}
            fontWeight={"700"}
            color={"#6563FF"}
          >
            {data && shopAddress && !data.postStatus ? shopAddress : data?.postStatus ? data?.postStatus : data?.nick}
          </StyledCardText>
          <StyledCardText width={"70%"} fontSize={"1em"} m_fontSize={".7em"} fontWeight={"700"}>
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

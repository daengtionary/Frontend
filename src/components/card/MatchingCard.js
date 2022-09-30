import { useNavigate } from "react-router-dom";
import { StyledMatchingCardBox, StyledMatchingCardImg, StyledMatchingCardImgBox, StyledMatchingCardTextBox, StyledMatchingCardText, StyledMatchingTitleBox } from "./MatchingCard.styled";

const MatchingCard = ( ) => {
  // const shopAddress = data.address?.slice(0, 2);

  
  const navigate = useNavigate();

  const goDetail = ()=>{
    navigate('/MatchingDetail')
  }


  return (
    <StyledMatchingCardBox onClick={goDetail}>
      <StyledMatchingCardImgBox>
        <StyledMatchingCardImg>

        </StyledMatchingCardImg>
      </StyledMatchingCardImgBox>
      <StyledMatchingCardTextBox>
        <StyledMatchingTitleBox>
          <StyledMatchingCardText border={"2px solid #6563FF"} borderRadius={"20px"} fontSize={".9em"} fontWeight={"700"} color={"#6563FF"}>
              같이 산책가요!
          </StyledMatchingCardText>
          <StyledMatchingCardText fontSize={"1em"} fontWeight={"700"}>
              산책
          </StyledMatchingCardText>
        </StyledMatchingTitleBox>
      </StyledMatchingCardTextBox>
    </StyledMatchingCardBox>
  );
};

export default MatchingCard;

import { useNavigate } from "react-router-dom";
import {
  StyledMatchingCardBox,
  StyleMatchingCardImgBox,
  StyledMatchingCardImg,
  StyledMatchingCardTextBox,
  StyledMatchingCardText,
  StyledMatchingHeartButton
} from "./MatchingCard.styled"

const ListPageCard = () => {
  const navigate = useNavigate();
  return (
    <StyledMatchingCardBox onClick={()=>{navigate('/matchingDetail/1')}}>
      <StyleMatchingCardImgBox>
        <StyledMatchingCardImg 
        // background={data?.mapImgUrl}
         />
      </StyleMatchingCardImgBox>
      <StyledMatchingCardTextBox>
        <StyledMatchingCardText color="#6563ff" margin="6px 0" fontSize="1em" fontWeight="400">
          {/* {data?.address?.slice(0, 2)} */}지역
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {/* {data?.title} */} 제목
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".5em" fontWeight="400">
          날짜
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize=".7em" fontWeight="700">
          {/* {data?.address} */} 주소
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize=".8em" fontWeight="400" height="10em">
          {/* {data?.content} */} 상세설명
        </StyledMatchingCardText>
        <StyledMatchingHeartButton>지도모양?</StyledMatchingHeartButton>
      </StyledMatchingCardTextBox>
    </StyledMatchingCardBox>
  );
};

export default ListPageCard;



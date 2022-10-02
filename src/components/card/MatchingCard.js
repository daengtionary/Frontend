import { useNavigate } from "react-router-dom";
import {
  StyledMatchingCardBox,
  StyledMatchingCardImgBox,
  StyledMatchingCardImg,
  StyledMatchingCardTextBox,
  StyledMatchingCardText,
  StyledMatchingHeartButton
} from "./MatchingCard.styled"

import dogIcon from "../../static/image/dogIcon.png"

export const MatchingCard = () => {
  const navigate = useNavigate();
  return (
    <StyledMatchingCardBox onClick={()=>{navigate('/MatchingDetail/1')}}>
      <StyledMatchingCardImgBox>
        <StyledMatchingCardImg background={dogIcon} />
      </StyledMatchingCardImgBox>
      <StyledMatchingCardTextBox>
        <StyledMatchingCardText color="#6563ff" margin="6px 0" fontSize="1em" fontWeight="400">
          {/* {data?.address?.slice(0, 2)} */}서울
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {/* {data?.title} */} 집 근처 공원 산책 가실 분
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".5em" fontWeight="400">
        날짜
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize=".7em" fontWeight="700">
          {/* {data?.address}  */} 주소 풀
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize=".8em" fontWeight="400" height="10em">
          {/* {data?.content} */} 상세 설명 적는 곳
        </StyledMatchingCardText>

        <StyledMatchingHeartButton>❤️</StyledMatchingHeartButton>

        {/* {console.log(data.mapImgUrl)} */}

      </StyledMatchingCardTextBox>
    </StyledMatchingCardBox>
  );
};
export default MatchingCard;




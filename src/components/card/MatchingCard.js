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

export const MatchingCard = ({id, limit, member, roomNo, title, address, category, status, content, count}) => {
  const navigate = useNavigate();
  return (
    <StyledMatchingCardBox key={id} onClick={()=>{navigate(`/MatchingDetail/${id}`)}}>
      <StyledMatchingCardImgBox>
        <StyledMatchingCardImg background={dogIcon} />
      </StyledMatchingCardImgBox>
      <StyledMatchingCardTextBox>
        <StyledMatchingCardText color="#6563ff" margin="6px 0" fontSize="1.1em" fontWeight="400">
          {category}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
         {title}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".9em" fontWeight="400">
        최대 : {limit}명까지
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".9em" fontWeight="400">
        현재 : {count}명
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".9em" fontWeight="400">
        매칭 현황  :  {status}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize="1em" fontWeight="700">
        주소 : {address}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize=".9em" fontWeight="400" height="10em">
        상세설명: {content}
        </StyledMatchingCardText>

        <StyledMatchingHeartButton>{category} 카테고리</StyledMatchingHeartButton>

        {/* {console.log(data.mapImgUrl)} */}

      </StyledMatchingCardTextBox>
    </StyledMatchingCardBox>
  );
};
export default MatchingCard;




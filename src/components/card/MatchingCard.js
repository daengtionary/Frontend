import { useNavigate } from 'react-router-dom';
import {
  StyledMatchingCardBox,
  StyledMatchingCardImgBox,
  StyledMatchingCardImg,
  StyledMatchingCardTextBox,
  StyledMatchingCardText,
  StyledMatchingHeartButton,
} from './MatchingCard.styled';

export const MatchingCard = ({ id, limit, title, address, category, status, content, image }) => {
  const navigate = useNavigate();
  return (
    <StyledMatchingCardBox
      key={id}
      onClick={() => {
        navigate(`/MatchingDetail/${id}`);
      }}
    >
      <StyledMatchingCardImgBox>
        <StyledMatchingCardImg background={image} />
      </StyledMatchingCardImgBox>
      <StyledMatchingCardTextBox>
        <StyledMatchingCardText className="title" color="#000" margin="6px 0" fontSize="1.5em" fontWeight="700">
          {title}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".9em" fontWeight="400">
          최대 : {limit}명
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#000" margin="6px 0" fontSize=".9em" fontWeight="400">
          매칭 현황 : {status}
        </StyledMatchingCardText>
        <StyledMatchingCardText color="#999" margin="6px 0" fontSize="1em" fontWeight="700">
          주소 : {address}
        </StyledMatchingCardText>
        <StyledMatchingCardText className="detail" color="#999" margin="6px 0" fontSize=".9em" fontWeight="400" height="10em">
          상세설명: {content}
        </StyledMatchingCardText>

        <StyledMatchingHeartButton>{category}</StyledMatchingHeartButton>
      </StyledMatchingCardTextBox>
    </StyledMatchingCardBox>
  );
};
export default MatchingCard;

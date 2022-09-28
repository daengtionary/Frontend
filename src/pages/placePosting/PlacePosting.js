import styled from "styled-components";
import Input from "../../elements/input/Input";

const PlacePosting = () => {
  return (
    <StylePlacePostWrap>
      <StyledPageTitle>
        <h2>장소 등록하기</h2>
      </StyledPageTitle>
      <StyledPostingWrap>
        <StyledInputBox>
          <StyledInputTitle>상품 이미지</StyledInputTitle>
          <StyledInputField>
            <Input placeholder={"제목을 입력해주세요."} />
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>제목</StyledInputTitle>
          <StyledInputField>
            <Input placeholder={"제목을 입력해주세요."} />
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>분류</StyledInputTitle>
          <StyledInputField>
            <select>
              카테고리
              <option>애견병원</option>
              <option>애견카페</option>
              <option>애견호텔</option>
            </select>
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>주소</StyledInputTitle>
          <StyledInputField>
            <div>주소 검색 API 자리</div>
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>정보</StyledInputTitle>
          <StyledInputField>
            <Input placeholder={"상세정보"} />
          </StyledInputField>
        </StyledInputBox>
        <StyledInputBox>
          <StyledInputTitle>설명</StyledInputTitle>
          <StyledInputField>
            <Input placeholder={"장소의 특징"} />
          </StyledInputField>
        </StyledInputBox>
        <button>등록하기</button>
      </StyledPostingWrap>
    </StylePlacePostWrap>
  );
};
export default PlacePosting;

const StylePlacePostWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledPageTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;

  width: 77.1em;
`;
const StyledPostingWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 77em;
`;
const StyledInputBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3em;
`;
const StyledInputTitle = styled.div`
  display: flex;
  font-weight: 700;
  flex: 1 1;
`;
const StyledInputField = styled.div`
  display: flex;
  flex: 7 7;
`;

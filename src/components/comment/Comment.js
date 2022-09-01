import styled from "styled-components";

const Comment = ({ text, info }) => {
  return (
    <CommentBox>
      <CommentTextBox>
        <CommentStar>{text.star}</CommentStar>
        <CommentTitle>{text.title}</CommentTitle>
        <CommentContent>{text.content}</CommentContent>
      </CommentTextBox>
      <CommentInfoBox>
        <CommentInfoImg>사진영역</CommentInfoImg>
        <CommentInfoUser>
          <CommentInfoDog>{info.dog}</CommentInfoDog>
          <CommentInfoName>{info.name}</CommentInfoName>
        </CommentInfoUser>
      </CommentInfoBox>
    </CommentBox>
  );
};
export default Comment;

const CommentBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 1 0; */
`;

const CommentTextBox = styled.div`
  background-color: #ccc;
  width: 360px;
`;
const CommentStar = styled.div``;
const CommentTitle = styled.div``;
const CommentContent = styled.div``;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const CommentInfoImg = styled.div`
  width: 50px;
  height: 50px;
  flex: 1 1;
`;
const CommentInfoUser = styled.div`
  flex: 4 4;
`;
const CommentInfoDog = styled.div``;
const CommentInfoName = styled.div``;

import styled from "styled-components";

const Comment = ({ text, info }) => {
  return (
    <CommentBox>
      <CommentTextBox>
        <CommentText fontSize={"0.7em"}>{"⭐".repeat(text.star)}</CommentText>
        <CommentText fontWeight={"700"}>{text.title}</CommentText>
        <CommentText fontSize={"0.8em"}>{text.content}</CommentText>
        <Triangle />
      </CommentTextBox>
      <CommentInfoBox>
        <CommentInfoImgBox>
          <CommentInfoImg></CommentInfoImg>
        </CommentInfoImgBox>
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
  position: relative;
  background-color: #cccccc50;
  width: 22em;
  height: 8em;
  border-radius: 1.6em;
  padding: 1em;
`;
const CommentText = styled.div`
  width: 100%;
  margin: 0.7em 0;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  padding: 1.6em 0;
  width: 100%;
`;
const CommentInfoImgBox = styled.div`
  width: 50px;
  height: 50px;
  flex: 1 1;
  /* background: #000; */
  position: relative;
`;
const CommentInfoImg = styled.div`
  width: 3em;
  height: 3em;
  position: absolute;
  top: 0;
  right: 1em;
  color: #fff;
  border-radius: 50%;
  background: #ccc;
`;
const CommentInfoUser = styled.div`
  flex: 4 4;
`;
const Triangle = styled.div`
  position: absolute;
  top: 160px;
  left: 28px;
  width: 0px;
  height: 0px;
  border-top: 16px solid #cccccc50;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;
const CommentInfoDog = styled.div``;
const CommentInfoName = styled.div``;

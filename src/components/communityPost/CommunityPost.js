import React from "react";
import { CommunityPostForm, Category, UserName, Title, Content, Label, Posts, Select, Input, TextArea, ButtonWrap } from "./CommunityPost.styled";

const CommunityPost = ({postHandler}) => {

  const onSubmitHandler = () => {
    alert('제출!')
  }
  return (
    <CommunityPostForm onSubmit={onSubmitHandler}>
      <Category>
        <Label topLeftRadius = {'10px'} bottomLeftRadius = {'none'}>
          <label>분류</label>
        </Label>
        <Posts>
          <Select>
            <option value="">분류선택</option>
            <option value="장터">장터</option>
            <option value="호텔">호텔</option>
            <option value="병원">병원</option>
            <option value="자유">자유</option>
          </Select>
        </Posts>
      </Category>

      <UserName>
        <Label borderTop={'1px solid #797979'}>
          <label>작성자</label>
        </Label>
        <Posts borderTop={'1px solid #797979'}>
          <Input type="text" id="user" required/>
        </Posts>
      </UserName>

      <Title>
        <Label borderTop={'1px solid #797979'}>
          <label>제목</label>
        </Label>
        <Posts borderTop={'1px solid #797979'}>
          <Input type="text" id="title" required/>
        </Posts>
      </Title>

      <Content>
        <Label bottomLeftRadius = {'10px'} borderTop={'1px solid #797979'}>
          <label>내용</label>
        </Label>
        <Posts borderTop={'1px solid #797979'}>
          <TextArea/>
        </Posts>
      </Content>

      <ButtonWrap>
        <button type="submit">등록하기</button>
        <button type="button" onClick={postHandler}>목록보기</button>
      </ButtonWrap>
    </CommunityPostForm>
  );
};

export default CommunityPost;

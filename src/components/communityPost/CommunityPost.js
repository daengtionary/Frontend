import { initial } from "lodash";
import React, { useState } from "react";
import {
  CommunityPostForm,
  Category,
  UserName,
  Title,
  Content,
  ImgFile,
  Label,
  Posts,
  FileInput,
  Select,
  Input,
  TextArea,
  ButtonWrap,
} from "./CommunityPost.styled";

const CommunityPost = ({ postHandler }) => {
  const onSubmitHandler = () => {
    alert("제출!");
  };

  const initialState = {
    data: {
      title: "",
      content: "",
    },
    imgUrl: {},
  };

  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files);
  }

  console.log(file);

  return (
    <CommunityPostForm onSubmit={onSubmitHandler}>
      <Category>
        <Label topLeftRadius={"10px"} bottomLeftRadius={"none"}>
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
        <Label borderTop={"1px solid #797979"}>
          <label>작성자</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <Input type="text" id="user" required />
        </Posts>
      </UserName>

      <Title>
        <Label borderTop={"1px solid #797979"}>
          <label>제목</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <Input type="text" id="title" required />
        </Posts>
      </Title>

      <ImgFile>
        <Label borderTop={"1px solid #797979"}>
          <label>사진등록</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <div>
            <FileInput onChange={handleChange} type="file" id="title" accept="image/*" multiple />
          </div>
        </Posts>
      </ImgFile>

      <Content>
        <Label bottomLeftRadius={"10px"} borderTop={"1px solid #797979"}>
          <label>내용</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <TextArea />
        </Posts>
      </Content>

      <ButtonWrap>
        <button type="submit">등록하기</button>
      </ButtonWrap>
    </CommunityPostForm>
  );
};

export default CommunityPost;

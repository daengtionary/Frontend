import { initial } from "lodash";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunityPostThunk } from "../../redux/modules/communitySlice";
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
  const dispatch = useDispatch();

  const initialState = {
    data: {
      title: "",
      content: "",
      category: "",
    },
    imgUrl: [],
  };

  // 다차원 객체 state의 프로퍼티 값을 수정해야함

  const [post, setPost] = useState(initialState);
  const [img, setImg] = useState([]);

  const onChangeImgHandler = (event) => {
    const maxFileNum = 10;

    // 선택한 이미지들
    const images = event.target.files;
    console.log(images);

    // 최대갯수로 받은 이미지
    const imagesMax10 = [...images].slice(0, maxFileNum);
    console.log(imagesMax10);
    setImg(imagesMax10);

    // 이미지 미리보기로 보여줄려면 url이 필요함
    for (let i = 0; i < imagesMax10.length; i++) {
      img.push(URL.createObjectURL(imagesMax10[i]));
    }
  };

  const onChangeDataHandler = (event) => {
    console.log(event.target.name, ":", event.target.value);
    const { name, value } = event.target;
    setPost({
      ...post,
      data: {
        ...post.data,
        [name]: value,
      },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);

    
    dispatch(
      getCommunityPostThunk({
        data: {
          title: post.data.title,
          content: post.data.content,
          category: post.data.category,
        },
        imgUrl: img,
      })
    );
  };

  console.log(post);
  console.log("여기!", img);

  return (
    <CommunityPostForm onSubmit={onSubmitHandler}>
      <Category>
        <Label topLeftRadius={"10px"} bottomLeftRadius={"none"}>
          <label>분류</label>
        </Label>
        <Posts>
          <Select name="category" onChange={onChangeDataHandler}>
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
          <div>닉네임</div>
        </Posts>
      </UserName>

      <Title>
        <Label borderTop={"1px solid #797979"}>
          <label>제목</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <Input type="text" name="title" required onChange={onChangeDataHandler} />
        </Posts>
      </Title>

      <ImgFile>
        <Label borderTop={"1px solid #797979"}>
          <label>사진등록</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <div>
            <FileInput onChange={onChangeImgHandler} type="file" name="imgUrl" accept="image/*" multiple />
          </div>
        </Posts>
      </ImgFile>

      <Content>
        <Label bottomLeftRadius={"10px"} borderTop={"1px solid #797979"}>
          <label>내용</label>
        </Label>
        <Posts borderTop={"1px solid #797979"}>
          <TextArea onChange={onChangeDataHandler} name="content" />
        </Posts>
      </Content>

      <ButtonWrap>
        <button type="submit">등록하기</button>
      </ButtonWrap>
    </CommunityPostForm>
  );
};

export default CommunityPost;

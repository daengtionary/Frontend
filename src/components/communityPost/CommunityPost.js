import { initial } from "lodash";
import React, { useRef, useState } from "react";
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

const CommunityPost = ({ modalHandler }) => {
  const dispatch = useDispatch();
  const imgRef = useRef()
  const userNick = window.localStorage.getItem('nick')

  const initialState = {
    data: {
      title: "",
      content: "",
      category: "",
    },
    imgUrl: [],
  };

  const [uploadImg, setUploadImg] = useState("");

  // 다차원 객체 state의 프로퍼티 값을 수정해야함

  const [post, setPost] = useState(initialState);
  const [img, setImg] = useState([]);

  const onChangeImgHandler = (event) => {

    const { files } = event.target
    console.log(files);
    console.log(typeof(files));

    const formdata = new FormData();
    console.log(formdata);
    files ? formdata.append("image", files) : alert("사진을 추가해주세요.");
    
    formdata.getAll('image')
    for (const keyValue of formdata) console.log(keyValue);

    const maxFileNum = 10; // 최대 첨부가능한 갯수

    // 선택한 이미지들
    const images = event.target.files;
    console.log("선택한 이미지들 :", images);

    // 최대갯수로 받은 이미지
    const imagesMax = [...images].slice(0, maxFileNum);
    console.log(imagesMax);
    setImg(imagesMax);

    // 이미지 미리보기로 보여줄려면 url이 필요함
    for (let i = 0; i < imagesMax.length; i++) {
      img.push(URL.createObjectURL(imagesMax[i]));
    }

  };

  const onChangeDataHandler = (event) => {
    // console.log(event.target.name, ":", event.target.value);/
    const { name, value } = event.target;
    console.log(name, ":", value);
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
    // console.log(e);

    const haveToSend = {
      data: {
        title: post.data.title,
        content: post.data.content,
        category: post.data.category,
      },

      imgUrl: img,
    }

    console.log(haveToSend)
    dispatch(
      getCommunityPostThunk(haveToSend)
    );
    modalHandler()
  };
  
  // console.log(post);

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
          <div>{userNick}</div>
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunityPostThunk } from "../../redux/modules/communitySlice";
import {
  StyledCommunityPostForm,
  StyledCategory,
  StyledUserName,
  StyledTitle,
  StyledContent,
  StyledImgFile,
  StyledLabel,
  StyledPosts,
  StyledFileInput,
  StyledSelect,
  StyledInput,
  StyledTextArea,
  StyledButtonWrap,
  StyledUserNick,
} from "./CommunityPost.styled";

const CommunityPost = ({ modalHandler, postCheck, setPostCheck }) => {
  const dispatch = useDispatch();
  const userNick = window.localStorage.getItem("nick");

  const initialState = {
    data: {
      title: "",
      content: "",
      category: "",
    },
    imgUrl: [],
  };

  const [post, setPost] = useState(initialState);
  const [img, setImg] = useState([]);

  const onChangeImgHandler = (event) => {
    const maxFileNum = 3;

    // 선택한 이미지들
    const images = event.target.files;
    if (images.length > 3) {
      alert("이미지는 3개까지만 첨부 가능합니다.");
    } else {
      // 최대갯수로 받은 이미지
      const imagesMax = [...images].slice(0, maxFileNum);
      setImg(imagesMax);

      // 이미지 미리보기로 보여줄려면 url이 필요함
      for (let i = 0; i < imagesMax.length; i++) {
        img.push(URL.createObjectURL(imagesMax[i]));
      }
    }
  };

  const onChangeDataHandler = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      data: {
        ...post.data,
        [name]: value,
      },
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const haveToSend = {
      data: {
        title: post.data.title,
        content: post.data.content,
        category: post.data.category,
      },
      imgUrl: img,
    };
    const response = await dispatch(getCommunityPostThunk(haveToSend)).unwrap()
    if (response.state === 200 ) {
      modalHandler();
      const newPostCheck = postCheck + 1
      setPostCheck(newPostCheck)
      alert("게시글 등록 완료!")
    }
  };

  return (
    <StyledCommunityPostForm onSubmit={onSubmitHandler}>
      <StyledCategory>
        <StyledLabel topLeftRadius={"10px"} bottomLeftRadius={"none"}>
          <label>분류</label>
        </StyledLabel>
        <StyledPosts>
          <StyledSelect name="category" onChange={onChangeDataHandler}>
            <option value="">분류선택</option>
            <option value="장터">장터</option>
            <option value="호텔">호텔</option>
            <option value="병원">병원</option>
            <option value="자유">자유</option>
          </StyledSelect>
        </StyledPosts>
      </StyledCategory>

      <StyledUserName>
        <StyledLabel borderTop={"1px solid #797979"}>
          <label>작성자</label>
        </StyledLabel>
        <StyledPosts borderTop={"1px solid #797979"}>
          <StyledUserNick>{userNick}</StyledUserNick>
        </StyledPosts>
      </StyledUserName>

      <StyledTitle>
        <StyledLabel borderTop={"1px solid #797979"}>
          <label>제목</label>
        </StyledLabel>
        <StyledPosts borderTop={"1px solid #797979"}>
          <StyledInput type="text" name="title" required onChange={onChangeDataHandler} />
        </StyledPosts>
      </StyledTitle>

      <StyledImgFile>
        <StyledLabel borderTop={"1px solid #797979"}>
          <label>사진</label>
        </StyledLabel>
        <StyledPosts borderTop={"1px solid #797979"}>
          <div>
            <StyledFileInput onChange={onChangeImgHandler} type="file" name="imgUrl" accept="image/*" multiple />
          </div>
        </StyledPosts>
      </StyledImgFile>

      <StyledContent>
        <StyledLabel bottomLeftRadius={"10px"} borderTop={"1px solid #797979"}>
          <label>내용</label>
        </StyledLabel>
        <StyledPosts borderTop={"1px solid #797979"}>
          <StyledTextArea onChange={onChangeDataHandler} name="content" />
        </StyledPosts>
      </StyledContent>

      <StyledButtonWrap>
        <button type="submit">등록하기</button>
      </StyledButtonWrap>
    </StyledCommunityPostForm>
  );
};

export default CommunityPost;

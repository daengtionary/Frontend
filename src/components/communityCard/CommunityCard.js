import React from 'react'
import { BsPencil, BsTrash, BsChatRightDots } from "react-icons/bs";
import { CommunityCardWrap, IconWrap, CardContents, RepleCircle, ProfilePhoto, Names, Category, Title, Dog, User } from './CommunityCard.styled';

const CommunityCard = ({detailHandler}) => {


  return (
    <CommunityCardWrap>
      <IconWrap><BsPencil size={20}/><BsTrash size={20}/><BsChatRightDots size={20}/><RepleCircle>3</RepleCircle></IconWrap>
      <CardContents>
        <ProfilePhoto>프사</ProfilePhoto>
        <Names>
          <Dog>비숑 프리제</Dog>
          <User>하*로</User>
        </Names>
        <Category>장터</Category>
        <Title onClick={detailHandler}>여기에 글 제목</Title>
      </CardContents>
    </CommunityCardWrap>
  )
}

export default CommunityCard
import React from "react";
import CommunityPost from "../communityPost/CommunityPost";
import { BsXLg } from "react-icons/bs";
import { ModalBackground, PostModalContainer, CloseBtm } from "./PostModal.styled";

const PostModal = ({modalHandler}) => {
  return (
    <ModalBackground onClick={modalHandler}>
      <PostModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtm>
          <button onClick={modalHandler}>
            <BsXLg />
          </button>
        </CloseBtm>
        <CommunityPost modalHandler={modalHandler}/>
      </PostModalContainer>
    </ModalBackground>
  );
};

export default PostModal;

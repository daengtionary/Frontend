import React from "react";
import CommunityPost from "../communityPost/CommunityPost";
import { BsXLg } from "react-icons/bs";
import { ModalBackground, PostModalContainer, CloseBtm } from "./PostModal.styled";

const PostModal = ({modalHandler, postCheck, setPostCheck}) => {
  return (
    <ModalBackground onClick={modalHandler}>
      <PostModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtm>
          <button onClick={modalHandler}>
            <BsXLg />
          </button>
        </CloseBtm>
        <CommunityPost modalHandler={modalHandler} postCheck={postCheck} setPostCheck={setPostCheck}/>
      </PostModalContainer>
    </ModalBackground>
  );
};

export default PostModal;

import React from "react";
import { RipleCard, ProfilePhoto, UserInfo, RipleContent } from "./CommunityDetailRipleCard.styled";

const CommunityDetailRipleCard = () => {
  return (
    <RipleCard>
      <ProfilePhoto>프사</ProfilePhoto>
      <UserInfo>
        <div>견종</div>
        <div>이름</div>
      </UserInfo>
      <RipleContent>
        <p>여기에 댓글 내용들 몇글자 이하로 할지도 정해야함</p>
      </RipleContent>
    </RipleCard>
  );
};

export default CommunityDetailRipleCard;

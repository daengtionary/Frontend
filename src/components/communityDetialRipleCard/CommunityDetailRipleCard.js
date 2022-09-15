import React from "react";
import { RipleCard, ProfilePhoto, UserInfo, RipleContent } from "./CommunityDetailRipleCard.styled";

const CommunityDetailRipleCard = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((el) => {
        return (
          <RipleCard key={el.reviewNo}>
            <ProfilePhoto url={el.imgUrl}></ProfilePhoto>
            <UserInfo>
              <div>견종</div>
              <div>{el.nick}</div>
            </UserInfo>
            <RipleContent>
              <p>{el.content}</p>
            </RipleContent>
          </RipleCard>
        );
      })}
    </>
  );
};

export default CommunityDetailRipleCard;

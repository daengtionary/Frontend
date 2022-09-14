import React from "react";
import {
  CommunityCardWrap,
  IconWrap,
  CardContents,
  Icons,
  IconBox,
  UpdateIcon,
  DeleteIcon,
  CommnetIcon,
  RepleCircle,
  ProfilePhoto,
  Names,
  Category,
  Title,
  Dog,
  User,
} from "./CommunityCard.styled";

const CommunityCard = ({ detailHandler, data }) => {
  console.log(data);

  return (
    <CommunityCardWrap>
      <IconWrap>
        <IconBox length={"24px"} size={"24px"} url={"/img/pen.png"} hover={"blue"} />
        <IconBox length={"24px"} size={"34px"} url={"/img/delete.png"} hover={"red"} />
        <IconBox length={"24px"} size={"24px"} url={"/img/comment.png"} />
        {/* <UpdateIcon/>
        <DeleteIcon/>
      <CommnetIcon/> */}
        {/* <Icons alt="update_btn" src={`${process.env.PUBLIC_URL}/img/pen.png`}/>
        <Icons alt="delete_btn " src={`${process.env.PUBLIC_URL}/img/delete.png`}/>
      <Icons alt="comment_icon " src={`${process.env.PUBLIC_URL}/img/comment.png`}/> */}
        <RepleCircle>3</RepleCircle>
      </IconWrap>


      <CardContents>
        <ProfilePhoto url={data.communityImg}>
        </ProfilePhoto>
        <Names>
          <Dog>견종{data.communityNo}</Dog>
          <User>{data.nick}</User>
        </Names>
        <Category>카테고리</Category>
        <Title onClick={detailHandler}>{data.title}</Title>
      </CardContents>
    </CommunityCardWrap>
  );
};

export default CommunityCard;

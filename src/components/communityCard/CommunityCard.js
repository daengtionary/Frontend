import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityDeleteThunk } from "../../redux/modules/communitySlice";
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
  NullCircle,
  ProfilePhoto,
  Names,
  Category,
  Title,
  Dog,
  User,
} from "./CommunityCard.styled";

const CommunityCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(data.nick);

  return (
    <CommunityCardWrap>
      <IconWrap>
        {/* {"zemi" === data.nick ? ( */}
        {window.sessionStorage.getItem("nick") === data.nick ? (
          <>
            <IconBox length={"24px"} size={"24px"} url={"/img/pen.png"} hover={"blue"} />
            <IconBox
              onClick={() => {
                dispatch(getCommunityDeleteThunk(data.communityNo));
              }}
              length={"24px"}
              size={"34px"}
              url={"/img/delete.png"}
              hover={"red"}
            />
          </>
        ) : (
          ""
        )}

        <IconBox length={"24px"} size={"24px"} url={"/img/comment.png"} />
        {/* <UpdateIcon/>
        <DeleteIcon/>
      <CommnetIcon/> */}
        {/* <Icons alt="update_btn" src={`${process.env.PUBLIC_URL}/img/pen.png`}/>
        <Icons alt="delete_btn " src={`${process.env.PUBLIC_URL}/img/delete.png`}/>
      <Icons alt="comment_icon " src={`${process.env.PUBLIC_URL}/img/comment.png`}/> */}
        {data.reviewCount === 0 ? <NullCircle/> : <RepleCircle>{data.reviewCount}</RepleCircle>}
      </IconWrap>

      <CardContents>
        <ProfilePhoto url={data.communityImg} />
        <Names>
          <Dog>{data.name}</Dog>
          <User>{data.nick}</User>
        </Names>
        <Category>{data.category}비어</Category>
        {/* <Title onClick={detailHandler(data.communityNo)}>{data.title}</Title> */}
        <Title
          onClick={() => {
            navigate(`/community/${data.communityNo}`);
          }}
        >
          {data.title}
        </Title>
      </CardContents>
    </CommunityCardWrap>
  );
};

export default CommunityCard;

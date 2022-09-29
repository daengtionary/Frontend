import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityDeleteThunk } from "../../redux/modules/communitySlice";
import {
  CommunityCardWrap,
  IconWrap,
  CardContents,
  IconBox,
  RepleCircle,
  NullCircle,
  ProfilePhoto,
  Names,
  Category,
  Title,
  Dog,
  User,
  ContentImg,
  CategoryTitleWrap,
  DefaultImg,
} from "./CommunityCard.styled";

const CommunityCard = ({ data, modalHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(data);
  // console.log(data.nick);

  const updateHandler = () => {};

  return (
    <CommunityCardWrap>
      <IconWrap>
        {window.localStorage.getItem("nick") === data.nick ? (
          <>
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
        {data.reviewCount === 0 ? <NullCircle /> : <RepleCircle>{data.reviewCount}</RepleCircle>}
      </IconWrap>

      <CardContents>
        <ProfilePhoto url={data.communityImg} />
        <Names>
          <Dog>{data.breed}</Dog>
          <User>{data.nick.length > 4 ? data.nick.substring(0, 3) + "..." : data.nick}</User>
        </Names>

        {data.communityImg ? (
          <ContentImg
            alt=""
            src={data.communityImg}
            onClick={() => {
              navigate(`/community/${data.communityNo}`);
            }}
          />
        ) : (
          <DefaultImg />
        )}
        {/* <ContentImg alt="" src={data.communityImg}/> */}

        <CategoryTitleWrap>
          <Category>{data.category ? data.category : "없음"}</Category>
          <Title
            onClick={() => {
              navigate(`/community/${data.communityNo}`);
            }}
          >
            {data.title.length > 40 ? data.title.substring(0, 40) + "..." : data.title}
          </Title>
        </CategoryTitleWrap>
        {/* <Title onClick={detailHandler(data.communityNo)}>{data.title}</Title> */}
      </CardContents>
    </CommunityCardWrap>
  );
};

export default CommunityCard;

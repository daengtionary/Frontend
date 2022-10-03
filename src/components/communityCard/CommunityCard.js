import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityDeleteThunk } from "../../redux/modules/communitySlice";
import jwtDecode from "jwt-decode";
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
  StyledUserInfo,
} from "./CommunityCard.styled";

const CommunityCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = window.sessionStorage.getItem("authorization");
  const decoded = token && jwtDecode(token);
  const userEmail = decoded?.sub;
  console.log(userEmail)

  return (
    <CommunityCardWrap>
      <IconWrap>
        {data.email === userEmail ? (
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

      <CardContents onClick={() => {
              navigate(`/community/${data.communityNo}`);
            }}>
        <StyledUserInfo>
          <ProfilePhoto url={data.image ? data?.image : "/img/dogIconGray.png"} />
          <Names>
            <Dog>{data?.breed?.length > 4 ? data.breed.substring(0, 3) + "..." : data.breed}</Dog>
            <User>{data?.nick?.length > 4 ? data.nick.substring(0, 3) + "..." : data.nick}</User>
          </Names>
        </StyledUserInfo>
        {data.communityImg ? (
          <ContentImg
            alt=""
            src={data.communityImg}

          />
        ) : (
          <DefaultImg
            onClick={() => {
              navigate(`/community/${data.communityNo}`);
            }}
          />
        )}
        {/* <ContentImg alt="" src={data.communityImg}/> */}

        <CategoryTitleWrap>
          <Category>{data.category ? data.category : "없음"}</Category>
          <Title
            onClick={() => {
              navigate(`/community/${data.communityNo}`);
            }}
          >
            {data.title.length > 20 ? data.title.substring(0, 20) + "..." : data.title}
          </Title>
        </CategoryTitleWrap>
        {/* <Title onClick={detailHandler(data.communityNo)}>{data.title}</Title> */}
      </CardContents>
    </CommunityCardWrap>
  );
};

export default CommunityCard;

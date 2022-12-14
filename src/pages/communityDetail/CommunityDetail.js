import React, { useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommunityDetailRipleCard from "../../components/communityDetialRipleCard/CommunityDetailRipleCard";
import { StyledCommunityContainer, StyledCommunityWrap, StyledPageTitle } from "../community/Community.styled";
import { IoIosArrowBack } from "react-icons/io";
import {
  StyledImgList,
  StyledDetailWrap,
  StyledPostContainer,
  StyledTitle,
  StyledPostInfo,
  StyledContent,
  StyledShowRiples,
  StyledRiple,
  StyledWriteRiple,
  StyledRipleBtn,
  StyledBottomBtn,
} from "./CommunityDetail.styled";
import { getCommunityDetailThunk } from "../../redux/modules/communitySlice";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.community.communityDetail);

  let { id } = useParams();

  useLayoutEffect(() => {
    dispatch(getCommunityDetailThunk(Number(id)));
  }, [dispatch]);

  const OnCommentSubmitHandler = (e) => {
    alert("댓글 기능은 아직 구현중입니다. ㅜㅜ");
    e.preventdefault();
  };

  /** 날짜 포맷팅 함수*/
  const showDate = (date) => {
    return `${date?.split(" ").at(0)} ${date?.split(" ").at(1)} ${date?.split(" ").at(2)} ${date?.split(" ").at(-2)} ${date?.split(" ").at(-1)}`;
  };

  return (
    <StyledCommunityContainer id="super">
      <StyledPageTitle>
        <div>
          <IoIosArrowBack
            onClick={() => {
              navigate("/community");
            }}
          />
        </div>
        <div>커뮤니티</div>
      </StyledPageTitle>
      <StyledCommunityWrap>
        <StyledDetailWrap>
          <StyledPostContainer marginTop={"60px"}>
            <StyledTitle>
              {data.communityDetatilResponseDto?.title > 30
                ? data.communityDetatilResponseDto?.title.substring(0, 30) + "..."
                : data.communityDetatilResponseDto?.title}
            </StyledTitle>
            <StyledPostInfo>
              <div>분류 : {data.communityDetatilResponseDto?.category}</div>
              <div>작성자 : {data.communityDetatilResponseDto?.nick}</div>
              <div>견종 : {data.communityDetatilResponseDto?.breed ? data.communityDetatilResponseDto?.breed : "견종정보없음"}</div>
              <div>작성일 : {showDate(data.communityDetatilResponseDto?.createdAt)}</div>
            </StyledPostInfo>

            <StyledContent>
              <StyledImgList>
                {data?.imgResponseDtoList
                  ? data?.imgResponseDtoList?.map((el, i) => {
                      return <img key={i} alt={`${data.communityDetatilResponseDto?.title}${i}`} src={el?.mapImgUrl} style={{ backgroundColor: "gray" }} />;
                    })
                  : null}
              </StyledImgList>
              <p>{data.communityDetatilResponseDto?.content}</p>
            </StyledContent>
          </StyledPostContainer>
          <StyledRiple onSubmit={OnCommentSubmitHandler}>
            <StyledWriteRiple placeholder="000글자 이내로 작성해주세요" />
            <StyledRipleBtn type="submit">댓글달기</StyledRipleBtn>
          </StyledRiple>

          <StyledShowRiples>
            <CommunityDetailRipleCard data={data.reviewList} />
          </StyledShowRiples>

          <StyledBottomBtn>
            <button onClick={() => navigate("/community")}>목록으로</button>
          </StyledBottomBtn>
        </StyledDetailWrap>
      </StyledCommunityWrap>
    </StyledCommunityContainer>
  );
};

export default CommunityDetail;

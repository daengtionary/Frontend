import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommunityDetailRipleCard from "../../components/communityDetialRipleCard/CommunityDetailRipleCard";
import { CommunityContainer, CommunityWrap, SideBar } from "../community/Community.styled";
import { DetailWrap, PostContainer, Title, PostInfo, Content, ShowRiples, Riple, WriteRiple, RipleBtn, BottomBtn } from "./CommunityDetail.styled";
import { getCommunityDetailThunk } from "../../redux/modules/communitySlice";
import { map } from "lodash";
const CommunityDetail = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.community.communityDetail);
  console.log("커뮤니티 디테일:",data)

  let {id} = useParams();
  console.log(id);


  useEffect(() => {
    dispatch(getCommunityDetailThunk(id));
  }, [dispatch]);

  const OnCommentSubmitHandler = (e) => {
    alert('댓글 작성?!')
    e.preventdefault();
  }

  return (
    <CommunityContainer>
      <CommunityWrap>

        <DetailWrap>
          <PostContainer>
            <Title>{data.title}</Title>
            <PostInfo>
              <div>분류 : 카테고리{data.communityNo}</div>
              <div>작성자 : {data.nick}</div>
              <div>견종 : {data.breed ? data.breed : "견종정보없음"}</div>
              <div>작성일 : {data.createdAt}</div>
            </PostInfo>
            <Content>
              <p>{data.content}</p>
            </Content>
          </PostContainer>

          <Riple onSubmit={OnCommentSubmitHandler}>
            <WriteRiple placeholder="000글자 이내로 작성해주세요"/>
            <RipleBtn type="submit">댓글달기</RipleBtn>
          </Riple>

          <ShowRiples>
            <CommunityDetailRipleCard data={data.reviewList}/>
          </ShowRiples>


          <BottomBtn>
            <button onClick={()=>navigate('/community')}>목록으로</button>
          </BottomBtn>
        </DetailWrap>
      </CommunityWrap>
    </CommunityContainer>
  );
};

export default CommunityDetail;

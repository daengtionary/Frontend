import React from "react";
import CommunityDetailRipleCard from "../../components/communityDetialRipleCard/CommunityDetailRipleCard";
import { CommunityContainer, CommunityWrap, SideBar } from "../community/Community.styled";
import { DetailWrap, PostContainer, Title, PostInfo, Content, ShowRiples, Riple, WriteRiple, RipleBtn, BottomBtn } from "./CommunityDetail.styled";
const CommunityDetail = () => {
  return (
    <CommunityContainer>
      <CommunityWrap>
        <SideBar>
          <ul>
            <li>댕과사전 커뮤니티</li>
          </ul>
        </SideBar>

        <DetailWrap>
          <PostContainer>
            <Title>글 제목</Title>
            <PostInfo>
              <div>분류 : 장터</div>
              <div>작성자 : 아무개</div>
              <div>견종 : 포메라니안</div>
              <div>작성일 : 2022-09-10</div>
            </PostInfo>
            <Content>
              <p>여기에 내용들</p>
            </Content>
          </PostContainer>

          <ShowRiples>
            <CommunityDetailRipleCard/>

          </ShowRiples>

          <Riple>
            <WriteRiple placeholder="000글자 이내로 작성해주세요"/>
            <RipleBtn>댓글달기</RipleBtn>
          </Riple>

          <BottomBtn>
            <button>목록보기</button>
          </BottomBtn>
        </DetailWrap>
      </CommunityWrap>
    </CommunityContainer>
  );
};

export default CommunityDetail;

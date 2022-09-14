import React, { useEffect, useState } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";

import { CommunityContainer, CommunityWrap, SideBar, ContentsLayout, Cards, ButtonWrap, CommunityTop, SearchBar, TopLayout } from "./Community.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCommunityPostListThunk } from "../../redux/modules/communitySlice";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [list, setList] = useState(true);
  const [post, setPost] = useState(false);
  const [page, setPage] = useState(1)

  let data = useSelector((state) => state.community.community);
  console.log(data)

  let nick = undefined
  nick = 'ajjajajaj'



  useEffect(() => {
    dispatch(getCommunityPostListThunk());
  },[dispatch])


  const postHandler = () => {
    if (nick === undefined) {
      alert("로그인 해 주세요")
    } else{
      setList(!list);
      setPost(!post);
    }
  };

  const detailHandler = () => {};

  return (
    <CommunityContainer id='111'>
      <CommunityTop>
        <TopLayout>
          <h3>댕과사전 커뮤니티</h3>
          <SearchBar>
            <input type="text" placeholder="궁금한 후기를 검색하세요" />
          </SearchBar>
        </TopLayout>
      </CommunityTop>

      <ContentsLayout marginTop={"70px"}>
        <ButtonWrap>{list && <button onClick={postHandler}>글쓰기</button>}</ButtonWrap>
      </ContentsLayout>

      <ContentsLayout>
        <CommunityWrap>
          {list && (
            <Cards>
              {data.map((el) => {return <CommunityCard key={el.communityNo} detailHandler={detailHandler} data={el}/>})}
              {/* <CommunityCard detailHandler={detailHandler} data={data}/> */}
            </Cards>
          )}
          {post && <CommunityPost postHandler={postHandler} />}
        </CommunityWrap>
      </ContentsLayout>
    </CommunityContainer>
  );
};

export default Community;

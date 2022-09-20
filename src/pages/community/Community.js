import React, { useEffect, useState } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";
import SearchBar from "../../components/searchBar/SearchBar";

import { CommunityContainer, CommunityWrap, SideBar, ContentsLayout, Cards, ButtonWrap, CommunityTop, TopLayout } from "./Community.styled";
import { ModalBackground } from "../../components/map/Map.styled";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCommunityPostListThunk } from "../../redux/modules/communitySlice";
import PostModal from "../../components/PostModal/PostModal";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [list, setList] = useState(true);
  const [post, setPost] = useState(false);
  const [page, setPage] = useState(0);
  const [postModal, setPostModal] = useState(false);

  const data = useSelector((state) => state.community.community);
  const test = useSelector((state) => state);
  console.log(data);
  console.log(test);

  const userNick = window.sessionStorage.getItem("nick");
  console.log(window.sessionStorage.getItem("nick"));
  let nick = null;
  nick = "ajjajajaj";

  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");

  // 토큰 decode
  let decoded = token && jwtDecode(token);

  console.log(decoded)
  
  const modalHandler = () => {
    
    // 토큰 만료시간
    let exp = token && Number(decoded.exp + "000");
    let expTime = new Date(exp);
    console.log("만료 시간:", expTime);
    let now = new Date();
    console.log("현재 시간:", now);

    // 토큰 만료시간 여부 확인
    if (expTime <= now || token === null) {
      alert("로그인 해 주세요");
      navigate("/signin");
    } else {
      setPostModal(!postModal);
    }
  };
  
  useEffect(() => {
    dispatch(getCommunityPostListThunk());
  }, [dispatch]);

  return (
    <CommunityContainer>
      <CommunityTop>
        <TopLayout>
          <h3>댕과사전 커뮤니티</h3>
          <SearchBar />
        </TopLayout>
      </CommunityTop>

      <ContentsLayout marginTop={"70px"}>
        <ButtonWrap>
          <button onClick={modalHandler}>글쓰기</button>
        </ButtonWrap>
      </ContentsLayout>

      <ContentsLayout>
        <CommunityWrap>
          <Cards>
            {data &&
              data?.map((el) => {
                return <CommunityCard key={el.communityNo} data={el} userNick={userNick} />;
              })}
          </Cards>
        </CommunityWrap>
      {postModal && <PostModal modalHandler={modalHandler} />}
      </ContentsLayout>
    </CommunityContainer>
  );
};

export default Community;

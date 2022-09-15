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
  console.log(data);

  const userNick = window.sessionStorage.getItem("nick");
  console.log(window.sessionStorage.getItem("nick"));
  let nick = null;
  nick = "ajjajajaj";

  const modalHandler = () => {
    if (nick === undefined) {
      alert("로그인 해 주세요");
    } else {
      setPostModal(!postModal);
    }
  };

  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");
  let r_token = window.sessionStorage.getItem("refresh-token");

  // 토큰 decode
  let decoded = token && jwtDecode(token);
  console.log(decoded);
  let decoded_r = r_token && jwtDecode(r_token);
  console.log(decoded_r);

  // 토큰 만료시간
  let exp = token && Number(decoded.exp + "000");
  let expTime = new Date(exp);
  console.log("만료 시간:", expTime);
  let now = new Date();
  console.log("현재 시간:", now);

  const checkToken = () => {
    if (expTime <= now || token === null) {
      token && window.sessionStorage.removeItem("authorization");
      alert("로그인이 만료 되었습니다. 다시 로그인해 주세요!");
      navigate("/signin");
    } else {
      // dispatch(myPageInfo());
    }
  };

  useEffect(() => {
    dispatch(getCommunityPostListThunk());
  }, [dispatch]);

  useEffect(() => {
    checkToken();
  }, []);

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
          {postModal && <PostModal modalHandler={modalHandler} />}
        </CommunityWrap>
      </ContentsLayout>
    </CommunityContainer>
  );
};

export default Community;

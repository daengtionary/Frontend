import React, { useEffect, useState, useRef } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";
import SearchBar from "../../components/searchBar/SearchBar";

import {
  StyledCommunityContainer,
  StyledCommunityWrap,
  StyledContentsLayout,
  StyledCards,
  StyledButtonWrap,
  StyledCommunityTop,
  TopLayout,
  StyledSerchImg,
} from "./Community.styled";
import { StyledModalBackground } from "../../components/map/Map.styled";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCommunityPostListThunk, pageUp, resetPosted } from "../../redux/modules/communitySlice";
import PostModal from "../../components/PostModal/PostModal";
import Input from "../../elements/input/Input";
import { debounce, throttle } from "lodash";
import { TbListNumbers } from "react-icons/tb";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postModal, setPostModal] = useState(false);
  
  const pageNum = useSelector((state) => state.community.pageNum);
  const listEnd = useSelector((state) => state.community.isEnd);

  const isPost = useSelector((state) => state.community.isPosted)
  
  const data = useSelector((state) => state.community.community);
  // const test = useSelector((state) => state);
  console.log(data);
  // console.log(test);

  // const filterButton = [
  //   { name: "#전체", path: "/place" },
  //   { name: "#동물병원", path: "/hospital" },
  //   { name: "#애견호텔", path: "/room" },
  //   { name: "#애견카페", path: "/cafe" },
  // ];


  console.log("listEnd:", listEnd);
  console.log(pageNum);

  useEffect(
    throttle(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); //clean up
      };
    }, 200),
    []
  );

  const handleScroll = debounce((e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      dispatch(pageUp(1));
    }
  }, 200);

  useEffect(() => {
    dispatch(getCommunityPostListThunk(pageNum));
    dispatch(resetPosted())
    // alert("확인용")
  }, [pageNum, isPost, postModal]);


  const userNick = window.localStorage.getItem("nick");


  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");

  // 토큰 decode
  let decoded = token && jwtDecode(token);

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

  return (
    <StyledCommunityContainer>
      <StyledCommunityTop>
        <TopLayout>
          <h3>댕과사전 커뮤니티</h3>
          <SearchBar />
        </TopLayout>
      </StyledCommunityTop>

      <StyledContentsLayout marginTop={"70"}>
        <StyledButtonWrap>
          <button onClick={modalHandler}>글쓰기</button>
        </StyledButtonWrap>
      </StyledContentsLayout>

      <StyledContentsLayout>
        <StyledCommunityWrap>
          <StyledCards>
            {data &&
              data?.map((el) => {
                return <CommunityCard modalHandler={modalHandler} key={el.communityNo} data={el}/>;
              })}
          </StyledCards>
        </StyledCommunityWrap>
        {postModal && <PostModal modalHandler={modalHandler} nick={userNick} />}
      </StyledContentsLayout>
      {!listEnd ? null : <h3 style={{ textAlign: "center" }}>데이터가 모두 로딩 되었습니다.</h3>}
    </StyledCommunityContainer>
  );
};

export default Community;

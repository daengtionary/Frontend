import React, { useEffect, useState, useRef } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";
import SearchBar from "../../components/searchBar/SearchBar";

import {
  StyledCommunityContainer,
  StyledCommunityWrap,
  StyledSideBar,
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
import { getCommunityPostListThunk, pageUp } from "../../redux/modules/communitySlice";
import PostModal from "../../components/PostModal/PostModal";
import Input from "../../elements/input/Input";
import { debounce, throttle } from "lodash";
import { TbListNumbers } from "react-icons/tb";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const obsRef = useRef(null); //옵저버 요소
  // const preventRef = useRef(true); //옵저버 중복 실행 방지
  // const endRef = useRef(false); //모든 글 로드 확인

  const [page, setPage] = useState(0); // 현재 페이지
  const [postModal, setPostModal] = useState(false);
  
  const pageNum = useSelector((state) => state.community.pageNum);
  const listEnd = useSelector((state) => state.community.isEnd);
  
  const data = useSelector((state) => state.community.community);
  // const test = useSelector((state) => state);
  console.log(data);
  // console.log(test);

  console.log("listEnd:", listEnd);
  console.log(pageNum);

  // const [list, setList] = useState(true);
  // const [post, setPost] = useState(false);

  //   useEffect(()=> { //옵저버 생성
  //     const observer = new IntersectionObserver(observerHandler, { threshold : 0.5 });
  //     if(obsRef.current) observer.observe(obsRef.current);
  //     return () => { observer.disconnect(); }
  // }, [])

  //   const observerHandler = ((entries) => { //옵저버 콜백함수
  //     const target = entries[0];
  //     if(!endRef.current && target.isIntersecting && preventRef.current){ //옵저버 중복 실행 방지
  //       preventRef.current = false; //옵저버 중복 실행 방지
  //       setPage(prev => prev+1 ); //페이지 값 증가
  //     }
  // })

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
    // console.log("1", scrollTop);
    // console.log("2", scrollHeight);
    // console.log("3", scrollTop + clientHeight - scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      dispatch(pageUp(1));
      // setPage(page => page +1)
    }
  }, 200);

  useEffect(() => {
    dispatch(getCommunityPostListThunk(pageNum));
    // alert("확인용")
  }, [pageNum]);


  const userNick = window.localStorage.getItem("nick");
  console.log("로그인한 닉네임 :", userNick);

  // 토큰 변수 할당
  let token = window.sessionStorage.getItem("authorization");

  // 토큰 decode
  let decoded = token && jwtDecode(token);
  // console.log(decoded)

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

          <Input
            // _onKeyPress={onKeyPressHandler}
            // _onChange={onChangeHandler}
            placeholder={"궁금한 후기를 검색하세요"}
            style={{
              width: "40%",
              mg_left: "3.6em;",
              bd_radius: "3em",
              bg_color: "#eee",
              bd: "none",
              bd_bottom: "none",
              pd_left: "1.6em",
              pd_right: "5em",
              height: "3.4em",
            }}
          />
          <StyledSerchImg
            // onClick={onClickHandler}
            src={"/img/search.png"}
          />
          {/* <SearchBar /> */}
        </TopLayout>
      </StyledCommunityTop>

      <StyledContentsLayout marginTop={"70px"}>
        <StyledButtonWrap>
          <button onClick={modalHandler}>글쓰기</button>
        </StyledButtonWrap>
      </StyledContentsLayout>

      <StyledContentsLayout>
        <StyledCommunityWrap>
          <StyledCards>
            {data &&
              data?.map((el) => {
                return <CommunityCard modalHandler={modalHandler} key={el.communityNo} data={el} userNick={userNick} />;
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

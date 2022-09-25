import React, { useEffect, useState, useRef  } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";
import SearchBar from "../../components/searchBar/SearchBar";

import { CommunityContainer, CommunityWrap, SideBar, ContentsLayout, Cards, ButtonWrap, CommunityTop, TopLayout, StyledSerchImg } from "./Community.styled";
import { ModalBackground } from "../../components/map/Map.styled";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCommunityPostListThunk } from "../../redux/modules/communitySlice";
import PostModal from "../../components/PostModal/PostModal";
import Input from "../../elements/input/Input";


const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const obsRef = useRef(null); //옵저버 요소
  const preventRef = useRef(true); //옵저버 중복 실행 방지
  const endRef = useRef(false); //모든 글 로드 확인

  const [page, setPage] = useState(0); // 현재 페이지
  const [postModal, setPostModal] = useState(false);

  // const [list, setList] = useState(true);
  // const [post, setPost] = useState(false);
  

  useEffect(()=> { //옵저버 생성
    const observer = new IntersectionObserver(observerHandler, { threshold : 0.5 });
    if(obsRef.current) observer.observe(obsRef.current);
    return () => { observer.disconnect(); }
}, [])

  const observerHandler = ((entries) => { //옵저버 콜백함수
    const target = entries[0];
    if(!endRef.current && target.isIntersecting && preventRef.current){ //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage(prev => prev+1 ); //페이지 값 증가
    }
})

  const data = useSelector((state) => state.community.community);
  // const test = useSelector((state) => state);
  console.log(data);
  // console.log(test);

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
  
  useEffect(() => {
    dispatch(getCommunityPostListThunk());
  }, [dispatch]);

  return (
    <CommunityContainer>
      <CommunityTop>
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
              src={'/img/search.png'} 
            />
          {/* <SearchBar /> */}
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
                return <CommunityCard key={el.communityNo} data={el} userNick={userNick} ref={obsRef}/>;
              })}
          </Cards>
        </CommunityWrap>
      {postModal && <PostModal modalHandler={modalHandler} nick={userNick} />}
      </ContentsLayout>
    </CommunityContainer>
  );
};

export default Community;

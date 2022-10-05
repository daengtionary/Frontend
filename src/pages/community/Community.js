import React, { useEffect, useState, useRef } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import SearchBar from "../../components/searchBar/SearchBar";
import {
  StyledCommunityContainer,
  StyledCommunityWrap,
  StyledContentsLayout,
  StyledCards,
  StyledButtonWrap,
  StyledCommunityTop,
  TopLayout,
} from "./Community.styled";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCommunityPostListThunk, pageUp, resetPosted } from "../../redux/modules/communitySlice";
import PostModal from "../../components/PostModal/PostModal";
import { debounce, throttle } from "lodash";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postModal, setPostModal] = useState(false);
  const [postCheck, setPostCheck] = useState(1);

  const pageNum = useSelector((state) => state.community.pageNum);
  const listEnd = useSelector((state) => state.community.isEnd);

  const data = useSelector((state) => state.community.community);

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
  }, [pageNum]);

  useEffect(() => {
    dispatch(resetPosted());
    dispatch(getCommunityPostListThunk(0));
  }, [postCheck]);

  const userNick = window.localStorage.getItem("nick");

  let token = window.sessionStorage.getItem("authorization");
  let decoded = token && jwtDecode(token);

  const modalHandler = () => {
    let exp = token && Number(decoded.exp + "000");
    let expTime = new Date(exp);
    console.log("만료 시간:", expTime);
    let now = new Date();
    console.log("현재 시간:", now);

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
                return <CommunityCard modalHandler={modalHandler} key={el.communityNo} data={el} />;
              })}
          </StyledCards>
        </StyledCommunityWrap>
        {postModal && <PostModal modalHandler={modalHandler} nick={userNick} postCheck={postCheck} setPostCheck={setPostCheck} />}
      </StyledContentsLayout>
      {!listEnd ? null : <h3 style={{ textAlign: "center" }}>데이터가 모두 로딩 되었습니다.</h3>}
    </StyledCommunityContainer>
  );
};

export default Community;

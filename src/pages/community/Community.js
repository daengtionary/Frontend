import React, { useState } from "react";
import CommunityCard from "../../components/communityCard/CommunityCard";
import CommunityPost from "../../components/communityPost/CommunityPost";

import { CommunityContainer, CommunityWrap, SideBar, Cards, ButtonWrap } from "./Community.styled";
import { useDispatch, useSelector } from "react-redux";


const Community = () => {
  const dispatch = useDispatch();

  const [list, setList] = useState(true)
  const [post, setPost] = useState(false);


  const postHandler = () => {
    setList(!list)
    setPost(!post)
  }

  const detailHandler = () => {
    setList(!list)
  }
  

  return (
    <CommunityContainer>

      <CommunityWrap>
        <SideBar>
          <ul>
            <li>댕과사전 커뮤니티</li>
          </ul>
        </SideBar>
        {list && (
          <Cards>
            <CommunityCard detailHandler={detailHandler}/>
            <CommunityCard />
            <CommunityCard />
            <ButtonWrap>
              <button onClick={postHandler}>글쓰기</button>
            </ButtonWrap>
          </Cards>
        )}

        {post && <CommunityPost postHandler={postHandler}/>}
      </CommunityWrap>



    </CommunityContainer>
  );
};

export default Community;

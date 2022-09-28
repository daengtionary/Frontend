import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommunityDetailRipleCard from "../../components/communityDetialRipleCard/CommunityDetailRipleCard";
import { StyledCommunityContainer, StyledCommunityWrap} from "../community/Community.styled";
import { StyledDetailWrap, StyledPostContainer, StyledTitle, StyledPostInfo, StyledContent, StyledShowRiples, StyledRiple, StyledWriteRiple, StyledRipleBtn, StyledBottomBtn } from "./CommunityDetail.styled";
import { getCommunityDetailThunk } from "../../redux/modules/communitySlice";
import { groupBy, map } from "lodash";
const CommunityDetail = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.community.communityDetail);
  console.log("커뮤니티 디테일:",data)

  // const test = useSelector((state)=>console.log(state))

  let {id} = useParams();
  console.log(id);


  useEffect(() => {
    dispatch(getCommunityDetailThunk(id));
  }, [dispatch]);

  const OnCommentSubmitHandler = (e) => {
    alert('댓글 작성?!')
    e.preventdefault();
  }

  console.log("랜더링 전에 이게 나와야해 :",data.imgList)
  
  return (

    <StyledCommunityContainer id="super">
      <StyledCommunityWrap>

        <StyledDetailWrap>
          <StyledPostContainer marginTop={"60px"}>
            <StyledTitle>{data?.title}</StyledTitle>
            <StyledPostInfo>
              <div>분류 : 카테고리{data.communityNo}</div>
              <div>작성자 : {data.nick}</div>
              <div>견종 : {data.breed ? data.breed : "견종정보없음"}</div>
              <div>작성일 : {data.createdAt}</div>
            </StyledPostInfo>

            {console.log("랜더링 됨", data.imgList)}

            <StyledContent>
              {/* {data.imgList.length !== 0 ? (""): (<div>이미지 없음</div>)} */}
              {data.imgList?.map((el)=>{
                return (
                <div>
                  <img alt="" src={el} style={{backgroundColor:'gray'}}/>
                </div>
                )
              })}
              <p>{data.content}</p>
            </StyledContent>
          </StyledPostContainer>

          <StyledRiple onSubmit={OnCommentSubmitHandler}>
            <StyledWriteRiple placeholder="000글자 이내로 작성해주세요"/>
            <StyledRipleBtn type="submit">댓글달기</StyledRipleBtn>
          </StyledRiple>

          <StyledShowRiples>
            <CommunityDetailRipleCard data={data.reviewList}/>
          </StyledShowRiples>


          <StyledBottomBtn>
            <button onClick={()=>navigate('/community')}>목록으로</button>
          </StyledBottomBtn>
        </StyledDetailWrap>
      </StyledCommunityWrap>
    </StyledCommunityContainer>
  );
};

export default CommunityDetail;

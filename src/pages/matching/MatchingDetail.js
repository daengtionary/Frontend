// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { chatApis } from '../../shared/api';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getMatchingDetail } from '../../redux/modules/tradeSlice';
import {
  TradeDetailAll,
  TradeDetailFullBox,
  ItemDetailImg,
  ItemContentBox,
  ItemTitleBox,
  AddWishButton,
  ChatStartButton,
  ButtonWrap,
  ImgBox,
  ItemNameInfoText,
  ItemDetailInfoText,

} from '../tradeDetail/TradeDetail.styled'

//아이콘
import heart from "../../static/image/heart.png"
import commentIcon from "../../static/image/commentIcon.png"
import dogIcon from "../../static/image/dogIcon.png"

//스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSwiper, StyledMainBanner } from '../main/Main.js';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const TradeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  // const item = useSelector((state) => state.trade.getMatchingDetail);
  // console.log(item)


  // useEffect(() => {
  //   dispatch(getMatchingDetail(id));
  // }, [dispatch]);

  // 매칭 룸 생성
  const onClickMatching = async () => {
    try {
      const response = await chatApis.addMatching
      console.log(response)
      Navigate(`/chat`)
    } catch (error) {}
  };

  return (
    
    <TradeDetailAll>
    {/* {item.length !== 0?( */}
      <TradeDetailFullBox>
        <ImgBox>
          <StyledSwiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            style={{backgroundColor:'white'}}
          >         
            <SwiperSlide>
              <ItemDetailImg src={dogIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <ItemDetailImg src={dogIcon} />
            </SwiperSlide>
            <SwiperSlide>
              <ItemDetailImg src={dogIcon} />
            </SwiperSlide>
          </StyledSwiper>
        </ImgBox>
        <ItemContentBox>
          <ItemTitleBox>
            <ItemNameInfoText>
              <span className="title">산책가자</span>
              <span className="place">
                장소
              </span>
            </ItemNameInfoText>
            <ItemDetailInfoText>
              <span>
                닉네임 <span className="sellInfo">닉네임</span>
              </span>
              <span>
                상세주소 <span className="sellInfo">상세주소</span>
              </span>
              <span>
                지도로 보기 <span className="sellInfo">지도</span>
              </span>           
            </ItemDetailInfoText>
            <ButtonWrap>
              <AddWishButton><img src={heart} alt="jjim"/>찜하기</AddWishButton>
              <ChatStartButton 
              onClick={ onClickMatching}
              ><img src={commentIcon} alt="comment"/>댕톡</ChatStartButton>
            </ButtonWrap>
          </ItemTitleBox>
        </ItemContentBox>
      </TradeDetailFullBox>
      {/* ):['']} */}
    </TradeDetailAll>
  );
};

export default TradeDetail;

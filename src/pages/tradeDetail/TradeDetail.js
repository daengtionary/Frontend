// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { chatApis } from '../../shared/api';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTradeDetail } from '../../redux/modules/tradeSlice';
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
} from './TradeDetail.styled';

//아이콘
import heart from "../../static/image/heart.png"
import commentIcon from "../../static/image/commentIcon.png"


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

  const item = useSelector((state) => state.trade.getTradeDetail);
  console.log(item)


  useEffect(() => {
    dispatch(getTradeDetail(id));
  }, [dispatch]);

  //채팅 룸 생성
  const onClickChat = async () => {
    try {
      const response = await chatApis.addRoom(+id);
      Navigate(`/chat/${response.data.data.chatRoomNo}`);
    } catch (error) {}
  };

  return (
    
    <TradeDetailAll>
    {item.length !== 0?(
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
              <ItemDetailImg src={item.tradeImgUrl[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <ItemDetailImg src={item.tradeImgUrl[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <ItemDetailImg src={item.tradeImgUrl[2]} />
            </SwiperSlide>
          </StyledSwiper>
        </ImgBox>
        <ItemContentBox>
          <ItemTitleBox>
            <ItemNameInfoText>
              <span className="itemName">{item?.title}</span>
              <span className="price">
                {item.price}
                <span className="won">원</span>
              </span>
            </ItemNameInfoText>
            <ItemDetailInfoText>
              <span>
                판매자 <span className="sellInfo">{item.nick}</span>
              </span>
              <span>
                상품상태 <span className="sellInfo">{item.stuffStatus}</span>
              </span>
              <span>
                교환가능여부 <span className="sellInfo">{item.exchange}</span>
              </span>
              <span>
                거래지역 <span className="sellInfo">{item.address}</span>
              </span>
            </ItemDetailInfoText>
            <ButtonWrap>
              <AddWishButton><img src={heart} alt="jjim"/>찜하기</AddWishButton>
              <ChatStartButton onClick={onClickChat}><img src={commentIcon} alt="comment"/>댕톡</ChatStartButton>
            </ButtonWrap>
          </ItemTitleBox>
        </ItemContentBox>
      </TradeDetailFullBox>):['']}
    </TradeDetailAll>
  );
};

export default TradeDetail;

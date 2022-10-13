// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { chatApis } from '../../shared/api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
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
import heart from '../../static/image/heart.png';
import commentIcon from '../../static/image/commentIcon.png';

//스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSwiper, StyledMainBanner } from '../main/Main.js';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const TradeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const item = useSelector((state) => state.trade.getTradeDetail);
  const memberNo = item.memberNo;

  useEffect(() => {
    dispatch(getTradeDetail(id));
  }, [dispatch]);

  //채팅 룸 생성
  const onClickChat = async () => {
    checkToken();
    try {
      if (window.sessionStorage.length < 2) {
        alert('로그인이 필요합니다.');
      } else {
        const response = await chatApis.addRoom(memberNo);
        alert('채팅방 생성완료! 채팅 아이콘을 눌러 채팅을 시작해 보세요:)');
      }
    } catch (error) {
      console(error);
    }
  };

  let token = window.sessionStorage.getItem('authorization');
  // 토큰 decode 하는 부분
  let decoded = token && jwtDecode(token);
  // 토큰 만료시간
  let exp = token && Number(decoded.exp + '000');
  let expTime = new Date(exp);
  let now = new Date();
  const checkToken = () => {
    if (expTime <= now || token === null) {
      token && window.sessionStorage.removeItem('authorization');
      alert('로그인이 필요합니다!');
      navigate('/signin');
    }
  };

  return (
    <TradeDetailAll>
      {item.length !== 0 ? (
        <TradeDetailFullBox>
          <ImgBox>
            <StyledSwiper
              className="swipe"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              centeredSlides={true}
              style={{ backgroundColor: 'white' }}
            >
              {item.tradeImgUrl?.map((el, i) => {
                return (
                  <SwiperSlide key={i}>
                    <ItemDetailImg src={el} />
                  </SwiperSlide>
                );
              })}
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
                <AddWishButton>
                  <img src={heart} alt="jjim" />
                  찜하기
                </AddWishButton>
                <ChatStartButton onClick={onClickChat}>
                  <img src={commentIcon} alt="comment" />
                  댕톡
                </ChatStartButton>
              </ButtonWrap>
            </ItemTitleBox>
          </ItemContentBox>
        </TradeDetailFullBox>
      ) : (
        ['']
      )}
    </TradeDetailAll>
  );
};

export default TradeDetail;

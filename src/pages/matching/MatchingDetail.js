import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { chatApis } from '../../shared/api';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Map from '../../components/map/Map';

import { getMatchingDetail } from '../../redux/modules/matchingSlice';

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
  MapAddress,
  MapMark,
  MapTooltip,
} from './MatchingDetail.styled';

//아이콘
import heart from '../../static/image/heart.png';
import commentIcon from '../../static/image/commentIcon.png';
import dogIcon from '../../static/image/dogIcon.png';

//스와이퍼
import { StyledSwiper } from '../main/Main';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const TradeDetail = () => {
  const [mapModal, setMapModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = useSelector((state) => state.matching.getMatchingDetail);
  console.log(item);
  const friendNo = +id;

  const modalHandler = () => {
    setMapModal(!mapModal);
  };

  useEffect(() => {
    dispatch(getMatchingDetail(id));
  }, [dispatch]);

  // 매칭 룸 생성
  const onClickMatching = async () => {
    try {
      // if (item.count === 0) {
      //   const response = await chatApis.addMatching(friendNo);
      //   console.log(response);
      // } else {
        const response = await chatApis.intoMatching(friendNo)
        alert(response.data.message);
      // }
    } catch (error) {}
  };

  return (
    <TradeDetailAll>
      {/* {item.length !== 0?( */}
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
            {item.images?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <ItemDetailImg src={image.friendImg} />
                </SwiperSlide>
              );
            })}
          </StyledSwiper>
        </ImgBox>
        <ItemContentBox>
          <ItemTitleBox>
            <ItemNameInfoText>
              <span>
                카테고리<span className="info">#{item.category}</span>
              </span>
            </ItemNameInfoText>
            <ItemDetailInfoText>
              <span>
                제목<span className="sellInfo">{item.title}</span>
              </span>
              <span>
                최대인원 <span className="sellInfo">{item.maxCount}</span>
              </span>
              <span>
                모집현황 <span className="sellInfo">{item.status}</span>
              </span>
              <span>
                닉네임 <span className="sellInfo">{item.member?.nick}</span>
              </span>
              <span>
                상세 <span className="sellInfo">{item.content}</span>
              </span>
              
              <MapAddress>
                <div style={{ display: 'flex' }}>
                  <span onClick={modalHandler}>
                    <MapMark alt="mapMark" src={`${process.env.PUBLIC_URL}/img/mapLocation.png`} />
                    {/* <HiOutlineLocationMarker size={24} /> */}
                  </span>
                  <span>{item.address}</span>
                </div>
                <MapTooltip className="task-tooltip">여기를 클릭해 지도정보를 살펴보세요</MapTooltip>
              </MapAddress>
            </ItemDetailInfoText>
            <ButtonWrap>
              <AddWishButton>
                <img src={heart} alt="jjim" />
                찜하기
              </AddWishButton>
              <ChatStartButton onClick={onClickMatching}>
                <img src={commentIcon} alt="comment" />
                댕톡
              </ChatStartButton>
            </ButtonWrap>
          </ItemTitleBox>
        </ItemContentBox>
      </TradeDetailFullBox>
      {mapModal && <Map modalHandler={modalHandler} title={item.address} address={item.address} />}
    </TradeDetailAll>
  );
};

export default TradeDetail;

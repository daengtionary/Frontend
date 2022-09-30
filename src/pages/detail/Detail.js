import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Map from "../../components/map/Map";
import { TbPhoneCall } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsStarFill, BsStar } from "react-icons/bs";
import {
  StyledSwiper,
  DetailContainer,
  BusinessTitle,
  MapAddress,
  MapMark,
  BusinessDescription,
  ReviewWrap,
  StarRating,
  StarIcon,
  BusinessInfo,
  Description,
  Infotmations,
  DescriptionTitle,
  StyledDescriptionContents,
  ReservationWrap,
  CalendarWrap,
  TimeWrap,
  ResevationTop,
  ResevationBottom,
  TimeBox,
  StyledTimeRow,
  ReviewCard,
  ProfileImg,
  Nick,
  Star,
  DetailMainImg,
  StarNum,
} from "./Detail.styled";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailThunk } from "../../redux/modules/detailSlice";
import { useParams } from "react-router-dom";

import { showStars } from "../../shared/showStars" 

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Detail = () => {
  const dispatch = useDispatch();
  const [mapModal, setMapModal] = useState(false);

  const [calendar, setCalendar] = useState(new Date());

  const modalHandler = () => {
    setMapModal(!mapModal);
  };

  let data = useSelector((state) => state.detail.detail);
  console.log(data);
  console.log(data.imgResponseDtoList);
  console.log(data.mapDetailSubResponseDto);



  const { id } = useParams();
  console.log(id);

  const payload = {id: id, };

  useEffect(() => {
    dispatch(getDetailThunk(id));
  }, [dispatch]);

  return (
    <DetailContainer>
      <StyledSwiper
        className="swiper-container"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
      >
        {data.imgResponseDtoList &&
          data.imgResponseDtoList.map((el, i) => {
            return (
              <SwiperSlide key={i} style={{display: 'flex', justifyContent:'center'}}>
                  <DetailMainImg src={el.mapImgUrl} alt={`${data.mapDetailSubResponseDto?.title}${i}`} />
              </SwiperSlide>
            );
          })}
      </StyledSwiper>

      <BusinessTitle>
        <span>{data.mapDetailSubResponseDto?.title}</span>
      </BusinessTitle>

      <StarRating>
        <div>
          {showStars(data.mapDetailSubResponseDto?.mapStar)}
        </div>
        <div>
          {data.mapDetailSubResponseDto?.mapStar}
        </div>
      </StarRating>

      <MapAddress>
        <span onClick={modalHandler}>
          <MapMark
            alt="mapMark"
            src={`${process.env.PUBLIC_URL}/img/mapLocation.png`}
          />
          {/* <HiOutlineLocationMarker size={24} /> */}
        </span>
        <span>{data.mapDetailSubResponseDto?.address}</span>
      </MapAddress>

      <BusinessInfo>
        <BusinessDescription>
          <DescriptionTitle>병원정보</DescriptionTitle>
          <StyledDescriptionContents>
            <Description>
              <p>{data.mapDetailSubResponseDto?.content}</p>
            </Description>
            <Infotmations>
              <span>
                <TbPhoneCall size={30} />
              </span>{" "}
              <span>전화번호</span>
            </Infotmations>
            <Infotmations>
              <span>
                <BiCar size={30} />
              </span>{" "}
              <span>주차정보</span>
            </Infotmations>
            <Infotmations>
              <span>
                <FiClock size={30} />
              </span>{" "}
              <span>진료시간</span>
            </Infotmations>
          </StyledDescriptionContents>
        </BusinessDescription>
      </BusinessInfo>

      <ReviewWrap>
        {data.mapReviewList?.map((el) => {
          return (
            <ReviewCard key={el.reviewNo}>
              <ProfileImg url={el.memberImgUrl}></ProfileImg>
              <Nick>{el.nick}</Nick>
              <Star>{showStars(el.star)}</Star>
              <div>{el.content}</div>
            </ReviewCard>
          );
        })}
      </ReviewWrap>

      {mapModal && (
        <Map
          modalHandler={modalHandler}
          title={data.mapDetailSubResponseDto?.title}
          address={data.mapDetailSubResponseDto?.address}
        />
      )}
    </DetailContainer>
  );
};

export default Detail;
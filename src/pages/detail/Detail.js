import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Footer from "../../components/footer/Footer";
import Map from "../../components/map/Map";
import { GrMapLocation } from "react-icons/gr";
import { MainBanner, StyledSwiper, DetailContainer, BusinessTitle, MapAddress, BusinessDescription, ReviewWrap } from "./Detail.styled";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailThunk } from "../../redux/modules/detailSlice";
import { useParams } from "react-router-dom";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Detail = () => {
  const dispatch = useDispatch();
  const [mapModal, setMapModal] = useState(false);

  const modalHandler = () => {
    setMapModal(!mapModal);
  };

  const data = useSelector((state) => console.log(state.detail));

  let {id} = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getDetailThunk(id));
  }, [dispatch]);

  return (
    <DetailContainer>
      <StyledSwiper
        className="swiper-container"
        spaceBetween={0}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <MainBanner background={"#0000ff50"}></MainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner background={"#00ff0050"}></MainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <MainBanner></MainBanner>
        </SwiperSlide>
      </StyledSwiper>

      <BusinessTitle>
        <span>여기에 업체명</span>
      </BusinessTitle>
      <MapAddress>
        <span onClick={modalHandler}>
          <GrMapLocation size={24} />
        </span>
        <span>서울특별시 어쩌구 저쩌동</span>
      </MapAddress>
      <BusinessDescription>
        <p>여기에 상세 설명</p>
      </BusinessDescription>
      {/* <div>여기에 예약 현황?</div>       */}
      <ReviewWrap>후기 글들</ReviewWrap>

      {mapModal && <Map modalHandler={modalHandler} />}

      <Footer />
    </DetailContainer>
  );
};

export default Detail;

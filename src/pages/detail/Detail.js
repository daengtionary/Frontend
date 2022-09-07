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

  let data = useSelector((state) => state.detail.detail);
  console.log(data)

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
        centeredSlides={false}
      >
        {data.imgUrls && data.imgUrls.map((el, i)=>{
          return (
            <SwiperSlide key={i}>
              <img src={el} alt=''/>
            </SwiperSlide>
          )
        })}

      </StyledSwiper>
      
      <BusinessTitle>
        <span>{data.title}</span>
      </BusinessTitle>
      <MapAddress>
        <span onClick={modalHandler}>
          <GrMapLocation size={24} />
        </span>
        <span>{data.address}</span>
      </MapAddress>
      <BusinessDescription>
        <p>{data.content}</p>
      </BusinessDescription>
      {/* <div>여기에 예약 현황?</div>       */}
      <ReviewWrap>후기 글들</ReviewWrap>

      {mapModal && <Map modalHandler={modalHandler} title={data.title} address={data.address}/>}

    </DetailContainer>
  );
};

export default Detail;

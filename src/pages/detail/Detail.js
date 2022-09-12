import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Map from "../../components/map/Map";
import { TbPhoneCall } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsStarFill, BsStar } from "react-icons/bs";
import { StyledSwiper, DetailContainer, BusinessTitle, MapAddress, BusinessDescription, ReviewWrap, StarRating, BusinessInfo, Description, Infotmations, DescriptionTitle, CalendarWrap } from "./Detail.styled";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getDetailThunk } from "../../redux/modules/detailSlice";
import { useParams } from "react-router-dom";


// Calendar import 삭제 예정
import Calendar from 'react-calendar';
import './Calendar.css'; // css import

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Detail = () => {
  const dispatch = useDispatch();
  const [mapModal, setMapModal] = useState(false);

  const [calendar, setCalendar] = useState(new Date());

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
        centeredSlides={true}
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
      
      <StarRating>
      {
        data.star === 0 ? (<div><BsStar/> <BsStar/> <BsStar/> <BsStar/> <BsStar/> 0</div>)  : 
        data.star === 1 ? (<div><BsStarFill/> <BsStar/> <BsStar/> <BsStar/> <BsStar/> 1</div>) :
        data.star === 2 ? (<div><BsStarFill/> <BsStarFill/> <BsStar/> <BsStar/> <BsStar/> 2</div>) :
        data.star === 3 ? (<div><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> <BsStar/> 3</div>) :
        data.star === 4 ? (<div><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStar/> 4</div>) :
        (<div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/> 5</div>)
      }  
      </StarRating>  
      
      
      <MapAddress>
        <span onClick={modalHandler}>
          <HiOutlineLocationMarker size={24} />
        </span>
        <span>{data.address}</span>
      </MapAddress>

      <BusinessInfo>
        <BusinessDescription>
          <DescriptionTitle>병원정보</DescriptionTitle>
          <div>
            <Description><p>{data.content}</p></Description>
            <Infotmations><span><TbPhoneCall size={30}/></span> <span>전화번호</span></Infotmations>
            <Infotmations><span><BiCar size={30}/></span> <span>주차정보</span></Infotmations>
            <Infotmations><span><FiClock size={30}/></span> <span>진료시간</span></Infotmations>
          </div>
        </BusinessDescription>

        {/* <CalendarWrap>
          <Calendar onChange={setCalendar} value={calendar} />
        </CalendarWrap> */}

      </BusinessInfo>

      <ReviewWrap>후기 글들</ReviewWrap>

      {mapModal && <Map modalHandler={modalHandler} title={data.title} address={data.address}/>}

    </DetailContainer>
  );
};

export default Detail;

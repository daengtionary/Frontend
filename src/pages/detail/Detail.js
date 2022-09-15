import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Map from "../../components/map/Map";
import { TbPhoneCall } from "react-icons/tb";
import { BiCar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsStarFill, BsStar } from "react-icons/bs";
import { StyledSwiper, DetailContainer, BusinessTitle, MapAddress, MapMark, BusinessDescription, ReviewWrap, StarRating, StarIcon, BusinessInfo, Description, Infotmations, DescriptionTitle, CalendarWrap } from "./Detail.styled";
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
  console.log(data.star)


  const showStars = (star) => {

    if (star > 0 && star < 0.5) {
      return (
        <div>
          <StarIcon alt="emptyStar" src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}/>
        </div>
      );
    } else if (star >= 0.5 && star < 1) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );

    } else if (star >= 1 && star < 1.5) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 1.5 && star < 2) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 2 && star < 2.5) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 2.5 && star < 3) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 3 && star < 3.5) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 3.5 && star < 4) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 4 && star < 4.5) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else if (star >= 4.5 && star < 5) {
      return (
        <div>
          <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        </div>
      );
      
    } else {
      return (
        <div>
          별점 정보가 없습니다.
        </div>
      );
    }
  }

  const {id} = useParams();
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
        <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        <StarIcon alt="filledStar" src={`${process.env.PUBLIC_URL}/img/filledStar.png`}/>
        <StarIcon alt="halfStar" src={`${process.env.PUBLIC_URL}/img/halfStar.png`}/>
        <StarIcon alt="emptyStar" src={`${process.env.PUBLIC_URL}/img/emptyStar.png`}/>
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
          <MapMark alt="mapMark" 
          src={`${process.env.PUBLIC_URL}/img/mapLocation.png`}
          />
          {/* <HiOutlineLocationMarker size={24} /> */}
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

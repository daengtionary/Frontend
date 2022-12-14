import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Card from "../../components/card/Card";
import Button from "../../elements/button/Button";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { mainCommunityThunk, mainListThunk, mainTradeThunk } from "../../redux/modules/mainSlice";
import { reset } from "../../redux/modules/listSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import placeButtonImg from "../../static/image/플레이스.jpg";
import matchButtonImg from "../../static/image/매칭.jpg";
import tradeButtonImg from "../../static/image/장터.jpg";
import communityButtonImg from "../../static/image/커뮤니티.jpg";
import banner_01 from "../../static/image/베너01_.jpg";
import banner_02 from "../../static/image/댕매칭.jpg";
import banner_03 from "../../static/image/이용방법.jpg";
import banner_04 from "../../static/image/이벤트배너.jpg";
import medal_01 from "../../static/image/메달1_.png";
import medal_02 from "../../static/image/메달2.png";
import medal_03 from "../../static/image/메달3.png";
import guide1 from "../../static/image/guide1.png";
import guide2 from "../../static/image/guide2.png";
import guide3 from "../../static/image/guide3.png";
import guide4 from "../../static/image/guide4.png";
import guide5 from "../../static/image/guide5.png";
import guide6 from "../../static/image/guide6.png";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.main.mainList);
  const [guideOn, setGuideOn] = useState(false);

  const guides = [guide1, guide2, guide3, guide4, guide5, guide6];

  useEffect(() => {
    dispatch(mainListThunk("/hospital"));
  }, []);

  const mainButtonList = [
    { name: "댕매칭", category: "matching", img: matchButtonImg },
    { name: "댕플레이스", category: "place", img: placeButtonImg },
    { name: "장터", category: "trade", img: tradeButtonImg },
    { name: "커뮤니티", category: "community", img: communityButtonImg },
  ];
  const [checked, setChecked] = useState([true, false, false, false]);
  const mainHotButtonList = [
    { id: 0, text: "#동물병원", category: "hospital" },
    { id: 1, text: "#애견호텔", category: "room" },
    { id: 2, text: "#중고장터", category: "trade" },
  ];
  const [category, setCategory] = useState("hospital");

  const rankMedalList = [medal_01, medal_02, medal_03];

  const onClickHandler = (i) => {
    const newArr = Array(mainHotButtonList.length).fill(false);
    newArr[i] = true;
    setChecked(newArr);
    if (i === 0) {
      setCategory("hospital");
      dispatch(mainListThunk(mainHotButtonList[i].category));
    } else if (i === 1) {
      setCategory("room");
      dispatch(mainListThunk(mainHotButtonList[i].category));
    } else if (i === 2) {
      setCategory("trade");
      dispatch(
        mainTradeThunk({
          category: "trade",
          page: 0,
          size: "4",
          sort: "popular",
          direction: "dasc",
        })
      );
    } else {
      setCategory("community");
      dispatch(
        mainCommunityThunk({
          category: "community",
          page: 0,
          size: "4",
          sort: "popular",
          direction: "dasc",
        })
      );
    }
  };

  return (
    <StyledMainWrap>
      <StyledSwiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <StyledMainBanner
            backgroundImg={banner_04}
            onClick={() => {
              window.open("https://forms.gle/sEkZEHdnQrwfUKH7A");
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StyledMainBanner backgroundImg={banner_01} />
        </SwiperSlide>
        <SwiperSlide>
          <StyledMainBanner
            backgroundImg={banner_02}
            onClick={() => {
              navigate("/matching");
            }}
          />
        </SwiperSlide>

        <SwiperSlide
          onClick={() => {
            setGuideOn(!guideOn);
          }}
        >
          <StyledMainBanner backgroundImg={banner_03} />
        </SwiperSlide>
      </StyledSwiper>
      <StyledMainButtonWrap>
        {mainButtonList.map((mainButton, i) => (
          <StyledMainButtonBox key={i}>
            <Button
              key={i}
              type={"button"}
              _onClick={() => {
                  navigate("/" + mainButton.category);
                  dispatch(reset());
              }}
              img={mainButton.img}
              style={{
                width: "10em",
                height: "10em",
                bg_color: "#FEF8EC",
                mg_left: "30px",
                mg_right: "30px",
                mg_bottom: "14px",
                bd_radius: "50%",
                bd_color: "transparent",
                media: {
                  width: "6em",
                  height: "6em",
                  mg_left: "30px",
                  mg_right: "30px",
                  mg_bottom: "14px",
                  bd_radius: "50%",
                  bd_color: "transparent",
                },
              }}
            />
            <div>{mainButton.name}</div>
          </StyledMainButtonBox>
        ))}
      </StyledMainButtonWrap>
      <StyledMenuTitle>#HOT TREND</StyledMenuTitle>
      <StyledMainHotButtonbWrap>
        {mainHotButtonList.map((hotButtonList, i) => (
          <Button
            key={i}
            type={"button"}
            text={hotButtonList.text}
            checked={checked[i]}
            _onClick={() => onClickHandler(i)}
            style={{
              width: "auto",
              height: "auto",
              color: "#ccc",
              bg_color: "#fff",
              mg_left: "5px",
              mg_right: "5px",
              bd_radius: "20px",
              bd_color: "#ccc",
              pd_top: "8px",
              pd_bottom: "8px",
              pd_left: "14px",
              pd_right: "14px",
              hv_color: "#767676",
              hv_bd_color: "#767676",
              f_color: "#000",
              f_bd_color: "#000",
              ft_weight: "700",
              f_ft_weight: "700",
              hv_ft_weight: "700",
            }}
          />
        ))}
      </StyledMainHotButtonbWrap>
      <StyledMainCardWrap>
        {category === "hospital"
          ? dataList.map((data, i) => (
              <Card key={i} rank={rankMedalList[i]} _onClick={() => navigate(`/detail/${data.mapNo}`)} data={data} category={data.category} />
            ))
          : category === "room"
          ? dataList.map((data, i) => (
              <Card key={i} rank={rankMedalList[i]} _onClick={() => navigate(`/detail/${data.mapNo}`)} data={data} category={data.category} />
            ))
          : category === "trade"
          ? dataList.map((data, i) => (
              <Card key={i} rank={rankMedalList[i]} _onClick={() => navigate(`/tradeDetail/${data.tradeNo}`)} data={data} category={data.category} />
            ))
          : dataList.map((data, i) => (
              <Card key={i} rank={rankMedalList[i]} _onClick={() => navigate(`/${category}/${data.communityNo}`)} data={data} category={data.category} />
            ))}
      </StyledMainCardWrap>

      {guideOn && (
        <Dim onClick={() => {
          setGuideOn(!guideOn);
        }}>
          <StyleGuide onClick={(e) => e.stopPropagation()}>
            <StyledSwiper
              className="swipe"
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 15000, disableOnInteraction: false }}
              loop={true}
              centeredSlides={true}
              style={{ backgroundColor: "white" }}
            >
              {guides?.map((guide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <ItemDetailImg src={guide} />
                  </SwiperSlide>
                );
              })}
            </StyledSwiper>
            <button
              onClick={() => {
                setGuideOn(!guideOn);
              }}
            >
              닫기
            </button>
          </StyleGuide>
        </Dim>
      )}
    </StyledMainWrap>
  );
};

export default Main;

const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1em 2em;
  }
`;
export const StyledSwiper = styled(Swiper)`
  background: #ff000020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 36em;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 12em;
    border-radius: 20px;
  }
`;
export const StyledMainBanner = styled.div`
  background: ${(props) => `url(${props.backgroundImg}) center / cover no-repeat `};
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const StyledMainButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 80px 0 40px 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-radius: 20px;
    margin: 50px 0 20px 0;
  }
`;
const StyledMainButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px;
  height: auto;

  > div button {
    transform: scale(1);
  }
  @media screen and (max-width: 768px) {
    width: 22%;
    margin: 0 5px;
  }
`;
const StyledMainHotButtonbWrap = styled.div`
  display: inline-block;
  margin: 10px 0;
  height: 3em;
`;
const StyledMainCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 70%;
  height: 26em;

  margin: 60px 0;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    gap: 0 5px;
    margin: 30px 0 0 0;
  }
`;
const StyledMenuTitle = styled.h2`
  margin: ${(props) => props.margin};
`;
export const ItemDetailImg = styled.img`
  width: 100%;
  height: 90%;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 320px;
  }
`;
const StyleGuide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  height: 900px;
  .swipe {
    width: 1400px;
    height: 900px;
  }
  @media screen and (max-width: 768px) {
    width: 410px;
    height: 320px;
    .swipe {
      width: 410px;
      height: 320px;
    }
  }
`;
const Dim = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 98;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  button {
    z-index: 100;
    display: flex;
    position: fixed;
    right: 13.2%;
    top: 3.6%;
    width: 120px;
    height: 30px;
    justify-content: center;
    background-color: aliceblue;
    border: 1px solid lightgray;
    :hover {
      cursor: pointer;
      background-color: beige;
    }
    @media screen and (max-width: 768px) {
      width: 80px;
      right: 11%;
      top: 30%;
    }
  }
`;

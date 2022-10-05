import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Card from "../../components/card/Card";
import Comment from "../../components/comment/Comment";
import Button from "../../elements/button/Button";
import ChatFloatButton from "../../components/chatFloatButton/ChatFloatButton";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { mainCommunityThunk, mainListThunk, mainTradeThunk, resetMain } from "../../redux/modules/mainSlice";
import { reset } from "../../redux/modules/listSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearTradeItem } from "../../redux/modules/tradeSlice";
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

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname, search } = location;
  const dataList = useSelector((state) => state.main.mainList);
  const data = useSelector((state) => state.main);
  console.log(dataList);
  console.log(data);
  console.log(pathname, search);

  useEffect(() => {
    // mainHotButtonList.map((btn) => dispatch(mainListThunk(btn.category)));
    dispatch(mainListThunk("/hospital"));
  }, []);

  const mainButtonList = [
    { name: "댕매칭", category: "matching", img: matchButtonImg },
    { name: "댕플레이스", category: "place", img: placeButtonImg },
    { name: "장터", category: "trade", img: tradeButtonImg },
    { name: "커뮤니티", category: "community", img: communityButtonImg },
  ];
  // const mainCardList = ["인기 병원", "인기 숙소", "인기 장터", "인기 게시물"];
  const mainCommentList = [
    {
      text: { star: 5, title: "제목", content: "내용" },
      info: { dog: "포메라니안", name: "이*주" },
    },
    {
      text: { star: 5, title: "제목2", content: "내용2" },
      info: { dog: "포메라니안2", name: "이*주2" },
    },
    {
      text: { star: 5, title: "제목3", content: "내용3" },
      info: { dog: "포메라니안2", name: "이*주3" },
    },
  ];
  const [checked, setChecked] = useState([true, false, false, false]);
  const mainHotButtonList = [
    { id: 0, text: "#동물병원", category: "hospital" },
    { id: 1, text: "#애견호텔", category: "room" },
    { id: 2, text: "#중고장터", category: "trade" },
    // { id: 3, text: "#커뮤니티", category: "community" },
  ];
  const [category, setCategory] = useState("hospital");
  console.log(category);

  const rankMedalList = [medal_01, medal_02, medal_03];

  const onClickHandler = (i) => {
    const newArr = Array(mainHotButtonList.length).fill(false);
    newArr[i] = true;
    setChecked(newArr);
    console.log(i);
    if (i === 0) {
      setCategory("hospital");
      // dispatch(clearTradeItem());
      dispatch(mainListThunk(mainHotButtonList[i].category));
    } else if (i === 1) {
      setCategory("room");
      // dispatch(clearTradeItem());
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
  console.log(checked);
  // console.log(JSON.stringify(checked));

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
        <SwiperSlide>
          <StyledMainBanner
            backgroundImg={banner_03}
            onClick={() => {
              alert("준비중입니다:)");
            }}
          />
        </SwiperSlide>
      </StyledSwiper>
      <StyledMainButtonWrap>
        {mainButtonList.map((mainButton, i) => (
          <StyledMainButtonBox key={i}>
            <Button
              key={i}
              type={"button"}
              _onClick={() => {
                // if (mainButton.category === "matching") {
                //   alert("준비중입니다.");
                // } else {
                navigate("/" + mainButton.category);
                dispatch(reset());
                // }
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
            // id={hotButtonList.id}
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
          ? // ? [1, 2, 3, 4].map(
            dataList.map(
              (data, i) => (
                <Card
                  key={i}
                  rank={rankMedalList[i]}
                  _onClick={() => navigate(`/detail/${data.mapNo}`)}
                  // _onClick={() => navigate(`/tradeDetail/${data.tradeNo}`)}
                  data={data}
                  category={data.category}
                />
              )
              // console.log(category)
            )
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
        {/* {dataList.map((data, i) => (
          <Card
            key={i}
            text={data.title}
            data={data}
            category={data.category}
          /> 
        ))} */}
      </StyledMainCardWrap>
      {/* <StyledMenuTitle margin={"3em 0 2em 0"}>댕과사전 이용후기</StyledMenuTitle>
      <StyledMainCommentWrap>
        {mainCommentList.map((commentList, i) => (
          <Comment key={i} text={commentList.text} info={commentList.info} />
        ))}
      </StyledMainCommentWrap>
      <ChatFloatButton /> */}
    </StyledMainWrap>
  );
};

export default Main;

const StyledMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* padding: 0 10%; */
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
  /* width: 25%; */
  height: auto;

  > div button {
    transform: scale(1);
  }
  @media screen and (max-width: 768px) {
    width: 22%;
    margin: 0 5px;
  }
`;
const StyledMainHotTrend = styled.div``;
const StyledMainHotButtonbWrap = styled.div`
  display: inline-block;
  margin: 10px 0;
  height: 3em;
`;
const StyledMainCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
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
const StyledMainCommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
`;
const StyledMenuTitle = styled.h2`
  margin: ${(props) => props.margin};
`;
const StyledMainCommentCard = styled.div``;

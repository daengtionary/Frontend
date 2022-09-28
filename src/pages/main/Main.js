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
import { mainCommunity, mainList, mainTrade, resetMain } from "../../redux/modules/mainSlice";
import { reset } from "../../redux/modules/listSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clearTradeItem } from "../../redux/modules/tradeSlice";

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
    // mainHotButtonList.map((btn) => dispatch(mainList(btn.category)));
    dispatch(mainList("/hospital"));
  }, []);

  const mainButtonList = [
    { name: "병원", category: "hospital" },
    { name: "댕친구", category: "matching" },
    { name: "장터", category: "trade" },
    { name: "커뮤니티", category: "community" },
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
    { id: 2, text: "#중고장터", category: "trade" }, // room community 등으로 교체 해야함
    { id: 3, text: "#커뮤니티", category: "community" }, // room community 등으로 교체 해야함
  ];
  const [category, setCategory] = useState("hospital");
  console.log(category);
  const onClickHandler = (i) => {
    const newArr = Array(mainHotButtonList.length).fill(false);
    newArr[i] = true;
    setChecked(newArr);
    console.log(i);
    if (i === 0) {
      setCategory("hospital");
      // dispatch(clearTradeItem());
      dispatch(mainList(mainHotButtonList[i].category));
    } else if (i === 1) {
      setCategory("room");
      // dispatch(clearTradeItem());
      dispatch(mainList(mainHotButtonList[i].category));
    } else if (i === 2) {
      setCategory("trade");
      dispatch(
        mainTrade({
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
        mainCommunity({
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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <StyledMainBanner background={"#0000ff50"}>배너1</StyledMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <StyledMainBanner background={"#00ff0050"}>배너2</StyledMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <StyledMainBanner>배너3</StyledMainBanner>
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
              style={{
                width: "10em",
                height: "10em",
                bg_color: "#FEF8EC",
                mg_left: "30px",
                mg_right: "30px",
                mg_bottom: "14px",
                bd_radius: "50%",
                bd_color: "transparent",
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
              hv_color: "#000",
              hv_bd_color: "#000",
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
          ? dataList.map(
              (data, i) => (
                <Card
                  key={i}
                  rank={i + 1}
                  _onClick={() => navigate(`/detail/${data.mapNo}`)}
                  // _onClick={() => navigate(`/tradeDetail/${data.tradeNo}`)}
                  data={data}
                  category={data.category}
                />
              )
              // console.log(category)
            )
          : category === "room"
          ? dataList.map((data, i) => <Card key={i} rank={i + 1} _onClick={() => alert("준비 중 입니다..")} data={data} category={data.category} />)
          : category === "trade"
          ? dataList.map((data, i) => (
              <Card key={i} rank={i + 1} _onClick={() => navigate(`/tradeDetail/${data.tradeNo}`, )} data={data} category={data.category} />
            ))
          : dataList.map((data, i) => (
              <Card key={i} rank={i + 1} _onClick={() => navigate(`/${category}/${data.communityNo}`)} data={data} category={data.category} />
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
      <StyledMenuTitle margin={"3em 0 2em 0"}>댕과사전 이용후기</StyledMenuTitle>
      <StyledMainCommentWrap>
        {mainCommentList.map((commentList, i) => (
          <Comment key={i} text={commentList.text} info={commentList.info} />
        ))}
      </StyledMainCommentWrap>
      <ChatFloatButton />
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
`;
const StyledSwiper = styled(Swiper)`
  background: #ff000050;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 36em;
`;
const StyledMainBanner = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  height: 36em;
`;
const StyledMainButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* width: 50%;
  height: auto; */

  margin: 80px 0;
`;
const StyledMainButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px;
  /* width: 25%; */
  height: auto;
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
  justify-content: center;
  /* flex-basis: 25%;
  flex-grow: 1; */

  width: 70%;
  height: 32em;

  margin: 60px 0;
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

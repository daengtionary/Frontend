import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Card from "../../components/card/Card";
import Comment from "../../components/comment/Comment";
import Button from "../../elements/button/Button";
import Header from "../../components/header/Header"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useDispatch, useSelector } from "react-redux";
import { mainList } from "../../redux/modules/mainPage";
import { useEffect } from "react";
SwiperCore.use([Pagination, Autoplay, Navigation]);

const Main = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.mainPage.mainList);
  console.log(dataList);
  // const category = ["hospital", "shop"];
  useEffect(() => {
    dispatch(mainList());
  }, []);
  const mainButtonList = ["병원", "호텔", "쇼핑", "장터", "커뮤니티"];
  const mainCardList = ["인기 병원", "인기 숙소", "인기 장터", "인기 게시물"];
  const mainHotButtonList = ["#동물병원", "#애견호텔", "#중고장터"];
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
  return (
    <MainWrap>
      <>
        <Header/>
      </>
      <StyledSwiper
        className="swiper-container"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
      <MainButtonWrap>
        {mainButtonList.map((mainButton, i) => (
          <MainButtonBox>
            <Button
              key={i}
              type={"button"}
              style={{
                width: "10em",
                height: "10em",
                bg_color: "#999",
                mg_left: "30px",
                mg_right: "30px",
                mg_bottom: "14px",
                bd_radius: "50%",
                bd_color: "transparent",
              }}
            />
            <div>{mainButton}</div>
          </MainButtonBox>
        ))}
      </MainButtonWrap>
      <h2>#HOT TREND</h2>
      <MainHotButtonbWrap>
        {mainHotButtonList.map((hotButtonList, i) => (
          <Button
            key={i}
            type={"button"}
            text={hotButtonList}
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
              ft_weight: "400",
              f_ft_weight: "700",
              hv_ft_weight: "700",
            }}
          />
        ))}
      </MainHotButtonbWrap>
      <MainCardWrap>
        {dataList &&
          dataList.map((data, i) => (
            <Card
              key={i}
              text={data.title}
              data={data}
              category={data.category}
            />
          ))}
      </MainCardWrap>
      <div>댕과사전 이용후기</div>
      <MainCommentWrap>
        {mainCommentList.map((commentList, i) => (
          <Comment key={i} text={commentList.text} info={commentList.info} />
        ))}
      </MainCommentWrap>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
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
  width: 84%;
  height: 36em;
`;
const MainBanner = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  height: 36em;
`;
const MainButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* width: 50%;
  height: auto; */

  margin: 80px 0;
`;
const MainButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px;
  /* width: 25%; */
  height: auto;
`;
const MainHotTrend = styled.div``;
const MainHotButtonbWrap = styled.div`
  display: inline-block;
  margin: 10px 0;
  height: 3em;
`;
const MainCardWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* flex-basis: 25%;
  flex-grow: 1; */

  width: 70%;
  height: 24em;

  margin: 60px 0;
`;
const MainCommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 70%;
`;
const MainCommentCard = styled.div``;

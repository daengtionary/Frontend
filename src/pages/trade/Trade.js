import { useState, useEffect, useRef } from "react";
import TradeCard from "../../components/card/TradeCard";
import { useSelector, useDispatch } from "react-redux";
import { getTrade, clearTradeItem } from "../../redux/modules/tradeSlice";
import { useCallback } from "react";

// 스타일 컴포넌트
import { TradeAll, TradeFullBox, CardList, StyledSerchFilterBox } from "./Trade.styled";

import { StyledSerchWrap, StyledSerchBox, StyledSerchImg, StyledFilter, StyledFilterBox } from "../animalhospital/List";

import { useNavigate } from "react-router-dom";
import Input from "../../elements/input/Input";
import searchIcon from "../../static/image/search.png";
// import 글작성 from '../../static/image/글작성.png'

const Trade = () => {
  const [page, setPage] = useState(0);
  const [tradeSort, setTradeSort] = useState("new");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(state => state.trade.getTrade);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 1;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(clearTradeItem);
  }, []);

  useEffect(() => {
    dispatch(clearTradeItem())
  },[])

  useEffect(() => {
   async function fetchTrade(){ 
     await dispatch(getTrade({
        page: page,
        size: "12",
        sort: tradeSort,
        direction: "asc",
      })
    )};
    fetchTrade();
  }, [page]);


  // const onChangeHandeler = useCallback(
  //   (e) => {
  //     if (tradeSort !== e.target.value) {
  //       setTradeSort(e.target.value);       
  //       dispatch(
  //         getTrade({
  //           page: page,
  //           size: "12",
  //           sort: tradeSort,
  //           direction: "asc",
  //         })
  //       );
  //     } else {
  //       alert("현재 선택된 정렬입니다.");
  //     }
  //   },
  //   [page, tradeSort]
  // );
  // console.log(tradeSort);

  return (
    <TradeAll>
      <StyledSerchFilterBox>
        <StyledSerchWrap>
          <StyledSerchBox>
            <h2>중고 장터</h2>
            <Input
              // _onKeyPress={onKeyPressHandler}
              // _onChange={onChangeHandler}
              placeholder={"어떤 물건을 찾으세요?"}
              style={{
                width: "40%",
                mg_left: "3.6em;",
                bd_radius: "3em",
                bg_color: "#eee",
                bd: "none",
                bd_bottom: "none",
                pd_left: "1.6em",
                pd_right: "5em",
                height: "3.4em",
              }}
            />
            <StyledSerchImg
              // onClick={onClickHandler}
              src={searchIcon}
            />
          </StyledSerchBox>
          <StyledFilterBox>
          <span
            className="postItem"
            onClick={() => {
              navigate("/tradePosting");
            }}
          >
            상품 등록하기
          </span>
        </StyledFilterBox>
        </StyledSerchWrap>
      </StyledSerchFilterBox>
      <TradeFullBox>

        <CardList>
          {items.map(item => {
            return (
              <TradeCard
                key={item.tradeNo}
                id={item.tradeNo}
                tradeImg={item.tradeImg}
                title={item.title}
                status={item.status}
                nick={item.nick}
                price={item.price}
              />
            );
          })}
        </CardList>
      </TradeFullBox>
    </TradeAll>
  );
};

export default Trade;

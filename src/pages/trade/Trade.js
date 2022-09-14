import { useState } from "react";
import { useEffect } from "react";
import TradeCard from "../../components/card/TradeCard";
import { useSelector, useDispatch } from "react-redux";
import { getTrade, clearTradeItem } from "../../redux/modules/tradeSlice";

// 스타일 컴포넌트
import {
  TradeAll,
  TradeFullBox,
  CardList
} from "./Trade.styled";


const Trade = () =>{
  const [page,setPage] = useState(0)

  const dispatch = useDispatch()
  const items = useSelector((state)=>state.trade.getTrade)

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page)=>(page + 1));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  useEffect(() => {
    dispatch(getTrade({
    page: page,
    size: "12",
    sort: "new",
    direction: "asc",}))
  },[page]);
  console.log(page)


  return(
  <TradeAll>
    <TradeFullBox>
      <span>중고장터 인기 상품</span>
      <span >정렬방식</span>
      <CardList>
        {items.map((item)=>{
          return(
          <TradeCard
            key={item.tradeNo}
            id={item.tradeNo}
            tradeImg={item.tradeImg}
            title={item.title}
            status={item.status}
            nick={item.nick} 
            />
          );
        })}
      </CardList>
    </TradeFullBox>
  </TradeAll> 
  )
};

export default Trade
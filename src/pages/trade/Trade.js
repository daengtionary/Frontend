import { useState } from 'react';
import { useEffect } from 'react';
import TradeCard from '../../components/card/TradeCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTrade, clearTradeItem } from '../../redux/modules/tradeSlice';
import { useCallback } from 'react';

// 스타일 컴포넌트
import { 
  TradeAll, 
  TradeFullBox, 
  CardList,
  TopFilterBox 
} from './Trade.styled';

import {
  TopLayout,
  SearchBar,
} from '../community/Community.styled';

import {
  Fiter
} from '../animalhospital/List.js'


const Trade = () => {
  const [page, setPage] = useState(0);
  const [tradeSort, setTradeSort] = useState('new')

  const dispatch = useDispatch();
  const items = useSelector((state) => state.trade.getTrade);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 1 ;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(
      getTrade({
        page: page,
        size: '12',
        sort: tradeSort,
        direction: 'asc',
      })
    );
  }, [page]);
  console.log(page)

  const onChangeHandeler = useCallback((e) =>{
    if( tradeSort !== e.target.value){
      setTradeSort(e.target.value);
    dispatch(clearTradeItem);
    dispatch(getTrade({
      page: page,
      size: '12',
      sort: tradeSort,
      direction: 'asc',
    }))}else{
      alert("현재 선택된 정렬입니다.")
    }
  },[page, tradeSort]
  );
  console.log(tradeSort)


  return (
    <TradeAll>
        <TopLayout style={{width:"70%", marginTop:"30px"}}>
          <h3>애견 장터</h3>
          <SearchBar>
            <input type="text" placeholder="어떤 물건을 찾으세요?" />
          </SearchBar>
          <TopFilterBox>
            <Fiter style={{width:"100px"}} onChange={onChangeHandeler}>
              <option select ="true" defaultValue={"최근순"}>
                정렬방식
              </option>
              <option value="title">이름순</option>
              <option value="new">최근순</option>
            </Fiter>
          </TopFilterBox>
        </TopLayout>


      <TradeFullBox>
        <CardList>
          {items.map((item) => {
            return (
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
  );
};

export default Trade;

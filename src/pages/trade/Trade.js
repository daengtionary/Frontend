import { useState } from 'react';
import { useEffect } from 'react';
import TradeCard from '../../components/card/TradeCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTrade } from '../../redux/modules/tradeSlice';
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
        sort: 'new',
        direction: 'asc',
      })
    );
  }, [page]);
  console.log(page)

  return (
    <TradeAll>
        <TopLayout style={{width:"70%", marginTop:"30px"}}>
          <h3>애견 장터</h3>
          <SearchBar>
            <input type="text" placeholder="어떤 물건을 찾으세요?" />
          </SearchBar>
          <TopFilterBox>
            <Fiter style={{width:"100px"}}>
              <option select ="true">
                정렬방식
              </option>
              <option value="인기순">인기순</option>
              <option value="최근순">최근순</option>
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

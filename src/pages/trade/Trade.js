import { useState, useEffect } from 'react';
import TradeCard from '../../components/card/TradeCard';
import { useSelector, useDispatch } from 'react-redux';
import { getTrade, clearTradeItem } from '../../redux/modules/tradeSlice';

// 스타일 컴포넌트
import { TradeAll, TradeFullBox, CardList, StyledSerchFilterBox, StyledTradeFilterBox, StyledSerchImg, StyledSerchBox } from './Trade.styled';

import { StyledSerchWrap } from '../animalhospital/List';

import { useNavigate } from 'react-router-dom';
import Input from '../../elements/input/Input';
import Button from '../../elements/button/Button';
import searchIcon from '../../static/image/search.png';
// import 글작성 from '../../static/image/글작성.png'

const Trade = () => {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.trade.getTrade);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 1;
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
    dispatch(clearTradeItem());
  }, []);

  useEffect(() => {
    async function fetchTrade() {
      await dispatch(
        getTrade({
          page: page,
          size: '12',
          sort: 'new',
          direction: 'asc',
        })
      );
    }
    fetchTrade();
  }, [page]);

  return (
    <TradeAll>
      <StyledSerchFilterBox>
        <StyledSerchWrap style={{borderBottom: "none"}}>
          <StyledSerchBox>
            <span>
              애견장터
            </span>
            <Input
              placeholder={'검색은 현재 준비중입니다'}
              style={{
                width: '140px',
                bd_radius: '3em',
                bg_color: '#eee',
                bd: 'none',
                bd_bottom: 'none',
                pd_left: '1.6em',
                pd_right: '5em',
                height: '3.4em',
              }}
            />
            <StyledSerchImg
              src={searchIcon}
            />
          </StyledSerchBox>
        </StyledSerchWrap>
      </StyledSerchFilterBox>
      <TradeFullBox>
        <StyledTradeFilterBox>
          <Button
            _onClick={() => {
              navigate('/tradePosting');
            }}
            text={'상품 등록하기'}
            style={{
              width: 'auto',
              height: 'auto',
              color: '#fff',
              bg_color: '#6563ff',
              mg_left: '5px',
              mg_right: '5px',
              bd_radius: '10px',
              bd_color: '#ccc',
              pd_top: '8px',
              pd_bottom: '8px',
              pd_left: '20px',
              pd_right: '20px',
            }}
          />
        </StyledTradeFilterBox>
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

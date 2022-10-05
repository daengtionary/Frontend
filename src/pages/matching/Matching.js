import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMatchingAll } from './Matching.styled';

// import { chatApis } from '../../shared/api';
import MatchingCard from '../../components/card/MatchingCard';
import searchIcon from '../../static/image/search.png';
import { StyledSerchImg } from '../animalhospital/List';
import { StyledSerchFilterBox, StyledSerchWrap, StyledSerchBox, StyledTradeFilterBox, TradeAll, TradeFullBox } from '../trade/Trade.styled';
import Input from '../../elements/input/Input';
import Button from '../../elements/button/Button';
import { useNavigate } from 'react-router-dom';
import { getMatching, clearMatchingItem, pageUp } from '../../redux/modules/matchingSlice';

const Matching = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.matching.getMatching);
  const pageNum = useSelector((state) => state.matching.pageNum);
  console.log(items);
  const listEnd = useSelector((state) => state.community.isEnd);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 1;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(pageUp(1));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(()=>{
    dispatch(
      clearMatchingItem()
    );
  },[])

  
  useEffect(() => {
    dispatch(
      getMatching({
        pagenum: pageNum,
        size: '4',
      })
    );
  }, [pageNum]);

  return (
    <TradeAll>
      <StyledSerchFilterBox>
        <StyledSerchWrap style={{borderBottom: "none"}}>
          <StyledSerchBox>
            <span>
              댕 매칭
            </span>
            <Input
              // _onKeyPress={onKeyPressHandler}
              // _onChange={onChangeHandler}
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
            style={{right: '0'}}
              // onClick={onClickHandler}
              src={searchIcon}
            />
          </StyledSerchBox>
        </StyledSerchWrap>
      </StyledSerchFilterBox>
      <TradeFullBox>
        <StyledTradeFilterBox>
          <Button
            _onClick={() => {
              navigate('/matchingPosting');
            }}
            text={'글 쓰기'}
            style={{
              width: 'auto',
              height: 'auto',
              color: '#fff',
              bg_color: '#6563ff',
              mg_left: '5px',
              mg_bottom: '20px',
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
        </TradeFullBox>
      {items.map((item) => {
        return (
          <MatchingCard
            key={item.friendNo}
            id={item.friendNo}
            limit={item.maxCount}
            member={item.member}
            roomNo={item.roomNo}
            title={item.title}
            address={item.address}
            content={item.content}
            status={item.status}
            count={item.count}
            image={item.image}
            category={item.category}
          />
        );
      })}
     </TradeAll>
  );
};

export default Matching;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMatchingAll } from './Matching.styled';

// import { chatApis } from '../../shared/api';
import MatchingCard from '../../components/card/MatchingCard';
import searchIcon from '../../static/image/search.png';
import { StyledSerchWrap, StyledSerchBox, StyledSerchImg, StyledFilter, StyledFilterBox } from '../animalhospital/List';
import { StyledSerchFilterBox } from '../trade/Trade.styled';
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
    <StyledMatchingAll>
      <StyledSerchFilterBox>
        <StyledSerchWrap>
          <StyledSerchBox>
            <h2>지금 가장 핫한</h2>
            <Input
              // _onKeyPress={onKeyPressHandler}
              // _onChange={onChangeHandler}
              placeholder={'어떤 물건을 찾으세요?'}
              style={{
                width: '40%',
                mg_left: '3.6em;',
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
              // onClick={onClickHandler}
              src={searchIcon}
            />
          </StyledSerchBox>

          <StyledFilterBox>
            <Button
              _onClick={() => {
                navigate('/matchingPosting');
              }}
              text={'글쓰기'}
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
          </StyledFilterBox>
        </StyledSerchWrap>
      </StyledSerchFilterBox>
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
          />
        );
      })}
      {!listEnd ? null : <h3 style={{ textAlign: "center" }}>데이터가 모두 로딩 되었습니다.</h3>}
    </StyledMatchingAll>
  );
};

export default Matching;

import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledMatchingAll } from './Matching.styled';

import { chatApis } from '../../shared/api';
import { useState } from 'react';
import MatchingCard from "../../components/card/MatchingCard"
import searchIcon from '../../static/image/search.png';
import { StyledSerchWrap, StyledSerchBox, StyledSerchImg, StyledFilter, StyledFilterBox } from '../animalhospital/List';
import { StyledSerchFilterBox } from '../trade/Trade.styled';
import Input from '../../elements/input/Input';
import { useNavigate } from 'react-router-dom';

const Matching = () => {
  const id = window.localStorage.getItem('nick');

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <StyledFilter
              name="sort"
              width={'60px'}
            >
              <option select="true">
                정렬
              </option>
              <option value="new">최신 순</option>
              <option value="hot">인기 순</option>
            </StyledFilter>
            <span onClick={()=>{navigate('/MatchingPosting')}}>
              글 작성
            </span>
          </StyledFilterBox>
        </StyledSerchWrap>
      </StyledSerchFilterBox>
      <MatchingCard/>
      <MatchingCard/>
      <MatchingCard/>
      <MatchingCard/>
    </StyledMatchingAll>
  );
};

export default Matching;

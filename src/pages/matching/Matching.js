import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../elements/button/Button';
import { StyledMatchingAll,
   StyledMatchingWrapBox,
   StyledButtonWrap,
   StyledInputButtonWrap 
  } from './Matching.styled';

import { chatApis } from '../../shared/api';
import { useState } from 'react';
import MatchingCard from '../../components/card/MatchingCard';


const Matching = () => {

  const id = window.localStorage.getItem("nick")
  const [roomName,setRoomName] = useState('')
  const [view, setView] = useState(false)
    // const dispatch = useDispatch();

    


  return (
    <StyledMatchingAll>
          <MatchingCard></MatchingCard>
          <MatchingCard></MatchingCard>
          <MatchingCard></MatchingCard>
          <MatchingCard></MatchingCard>
    </StyledMatchingAll>
  );
};

export default Matching;

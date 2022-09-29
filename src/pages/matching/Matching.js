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


const Matching = () => {

  const id = window.localStorage.getItem("nick")
  const [roomName,setRoomName] = useState('')
  const [view, setView] = useState(false)
    // const dispatch = useDispatch();
    
    const addMatchingRoom = async () => {
      try {
        const response = await chatApis.addMatchingRoom(id);
        // Navigate(`/chat/${response.data.data.chatNo}`);
      } catch (error) {}
      setRoomName('')
    };

  return (
    <StyledMatchingAll>
      <StyledMatchingWrapBox>
        <StyledButtonWrap>
          <Button text={'방 만들기'} _onClick={()=>{setView(!view)}} />
          <Button text={'댕 친구 랜덤 매칭'} />
          <Button text={'댕 친구 대기방 보러가기 '} />
        </StyledButtonWrap>
        {view &&
        <StyledInputButtonWrap>
        <input type={"text"} value={roomName} onChange={(e)=>{setRoomName(e.target.value)}}/>
        <Button text={'생성하기'} _onClick={addMatchingRoom}/>
        </StyledInputButtonWrap>
        }
      </StyledMatchingWrapBox>
    </StyledMatchingAll>
  );
};

export default Matching;

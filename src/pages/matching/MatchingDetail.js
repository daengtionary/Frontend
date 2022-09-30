import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRoomListDB } from '../../redux/modules/chatSlice';


const MatchingRoom = () => {

  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getRoomListDB);
    }
    );

  return (
    <div>
      
    </div>
  );
};

export default MatchingRoom;
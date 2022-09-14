// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { chatApis } from '../../shared/api';
import { useSelector } from 'react-redux';

import {
  TradeDetailAll,
  TradeDetailFullBox,
  ItemDetailImg,
  ItemContentBox,
  ItemTitleBox,
  AddWishButton,
  ChatStartButton,
  ButtonWrap,
  ImgBox
} from './TradeDetail.styled';

const TradeDetail = () => {
  const location = useLocation();

  const memberId = useSelector((state) => state.user);
  console.log(memberId)

  const tradeImg = location.state.tradeImg;
  const title = location.state.title;
  const nick = location.state.nick;

  //채팅 룸 생성
  const onClickChat = async () => {
    try{
      const response = await chatApis.addRoom(memberId);
      Navigate(`/chat/${response.data}`,{
        state: {backgroundLocation: location},
      });
    } catch(error){}
  };

  return (
    <TradeDetailAll>
      <TradeDetailFullBox>
        <ImgBox>
          <ItemDetailImg src={tradeImg} />
        </ImgBox>
        <ItemContentBox>
          <ItemTitleBox>
            상품명: {title}
            <br />
            판매자: {nick}
          </ItemTitleBox>
          <ButtonWrap>
            <AddWishButton>찜</AddWishButton>
            <ChatStartButton onClick={onClickChat}>채팅하기</ChatStartButton>
          </ButtonWrap>
        </ItemContentBox>
      </TradeDetailFullBox>
    </TradeDetailAll>
  );
};

export default TradeDetail;

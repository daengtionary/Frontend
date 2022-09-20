// import { useState } from "react";
// import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { chatApis } from "../../shared/api";
import { useSelector } from "react-redux";

import {
  TradeDetailAll,
  TradeDetailFullBox,
  ItemDetailImg,
  ItemContentBox,
  ItemTitleBox,
  AddWishButton,
  ChatStartButton,
  ButtonWrap,
  ImgBox,
  ItemNameInfoText,
  ItemDetailInfoText,
} from "./TradeDetail.styled";

const TradeDetail = () => {
  const location = useLocation();

  

  const tradeImg = location.state.tradeImg;
  const title = location.state.title;
  const nick = location.state.nick;
  const id = location.state.id;

  //채팅 룸 생성
  const onClickChat = async () => {
    try {
      const response = await chatApis.addRoom(id);
      Navigate(`/chat/${response.data.data.chatRoomNo}`);
    } catch (error) {}
  };

  return (
    <TradeDetailAll>
      <TradeDetailFullBox>
        <ImgBox>
          <ItemDetailImg src={tradeImg} />
        </ImgBox>
        <ItemContentBox>
          <ItemTitleBox>
            <ItemNameInfoText>
              <span className="itemName">{title}</span>
              <span className="price">
                10,000<span className="won">원</span>
              </span>
            </ItemNameInfoText>
            <ItemDetailInfoText>
              <span>
                판매자 <span className="sellerNick">{nick}</span>
              </span>
              <span>
                상품상태 <span className="sellInfo">거의 새것</span>
              </span>
              <span>
                교환여부교환 <span className="sellInfo">불가능</span>
              </span>
              <span>
                배송비 <span className="sellInfo">배송비 미포함</span>
              </span>
              <span>
                거래지역 <span className="sellInfo">전국</span>
              </span>
            </ItemDetailInfoText>
            <ButtonWrap>
              <AddWishButton>찜하기</AddWishButton>
              <ChatStartButton onClick={onClickChat}>댕톡</ChatStartButton>
            </ButtonWrap>
          </ItemTitleBox>
        </ItemContentBox>
      </TradeDetailFullBox>
    </TradeDetailAll>
  );
};

export default TradeDetail;

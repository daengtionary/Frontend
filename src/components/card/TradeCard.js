import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import {
  TradeCardFullBox,
  ItemImageBox,
  ItemTextBox,
  ItemIconBox,
  ItemNameSpan,
  ItemPriceSpan

} from './TradeCard.styled';
import { useNavigate } from 'react-router-dom';

const TradeCard = ({ id, title, tradeImg, status, nick }) => {
  const navigate = useNavigate();
  return (
    <TradeCardFullBox key={id}>
      <ItemImageBox
        src={tradeImg}
        onClick={() =>
          navigate(`/tradeDetail/${id}`, {
            state: { title: title, nick: nick, tradeImg: tradeImg, id: id },
          })
        }
      />
      <ItemTextBox>
        <ItemNameSpan>{title}</ItemNameSpan>
        <ItemPriceSpan>10,000<span className='won'>원</span></ItemPriceSpan>
      </ItemTextBox>
      <ItemIconBox>
        <FiHeart className="busket" />
      </ItemIconBox>
    </TradeCardFullBox>
  );
};

export default TradeCard;

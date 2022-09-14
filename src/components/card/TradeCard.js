import { useState } from "react";
import {FiHeart} from "react-icons/fi";
import {
  TradeCardFullBox,
  ItemImageBox
}from "./TradeCard.styled";
import {useNavigate} from 'react-router-dom'; 

const TradeCard = ({id, title, tradeImg, status, nick }) =>{
  const navigate= useNavigate();
  console.log({id,title,tradeImg})
  return(
    
    <TradeCardFullBox key={id}>
      <ItemImageBox src={tradeImg} onClick={()=> navigate(`/tradeDetail/${id}`,{state:{title:title, nick:nick, tradeImg:tradeImg}})}/>
      <span>{title}</span>
      <span>10000원</span>
      <span>{status}</span>
      <FiHeart/>
    </TradeCardFullBox>
  )
};

export default TradeCard
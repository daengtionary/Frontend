import { useState, useEffect, useCallback } from "react";
import {
  TradePostingAll,
  TradePostingTop
} from './TradePosting.styled';



const TradePosting =()=>{

  

  return(
    <>
      <TradePostingAll>
        중고상품 등록하기
        <TradePostingTop>
          상품 이미지
        </TradePostingTop>
      </TradePostingAll>
    </>
  );
};

export default TradePosting;
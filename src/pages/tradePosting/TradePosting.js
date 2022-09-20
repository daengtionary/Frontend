import { useState, useEffect, useCallback } from 'react';
import Button from '../../elements/button/Button';
import {
  StyleTradePostingAll,
  StyleTradePostingImageBox,
  StyleTradePageTopTitle,
  StyleTradeItemTitleBox,
  StyleTradePlaceBox,
  StyleTradeStatusBox,
  StyleTradePriceBox,
  StyleTradeDetailBox,
  StyleSubmitButton,
  StyleTradePlaceInputGroup,
  StyleTradePlaceSpanBox,
} from './TradePosting.styled';
import { Input } from '../../components/communityPost/CommunityPost.styled';

const TradePosting = () => {
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail] = useState('');

  return (
    <>
      <StyleTradePageTopTitle>
        <span>중고상품 등록하기</span>
      </StyleTradePageTopTitle>
      <StyleTradePostingAll>
        <StyleTradePostingImageBox>
          <span>상품 이미지</span>
          <input type="file" accept="image/*" />
        </StyleTradePostingImageBox>
        <StyleTradeItemTitleBox>
          <span>제목</span>
          <Input
            type={'text'}
            value={title}
            _onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '80%',
              height: '20px',
              pd_left: '10px',
              mg_right: '0px',
              bd: '0px',
              bd_bottom: 'gray',
            }}
            placeholder={'아이디를 입력하세요'}
          />
        </StyleTradeItemTitleBox>
        <StyleTradePlaceBox>
          <span>거래지역</span>
          <StyleTradePlaceInputGroup>
            <StyleTradePlaceSpanBox>
              <Button text={'내위치'} />
              <Button text={'위치검색'} />
              <Button text={'지역설정 안함'} />
            </StyleTradePlaceSpanBox>
            <Input
              type={'text'}
              value={place}
              _onChange={(e) => setPlace(e.target.value)}
              style={{
                width: '80%',
                height: '20px',
                pd_left: '10px',
                bd: '0px',
                bd_bottom: 'gray',
              }}
              placeholder={'아이디를 입력하세요'}
            />
          </StyleTradePlaceInputGroup>
        </StyleTradePlaceBox>
        <StyleTradeStatusBox>
          <span>상태</span>
          <Input
            type={'text'}
            value={status}
            _onChange={(e) => setStatus(e.target.value)}
            style={{
              width: '30%',
              height: '20px',
              pd_left: '10px',
              bd: '0px',
              bd_bottom: 'gray',
            }}
            placeholder={'아이디를 입력하세요'}
          />
        </StyleTradeStatusBox>
        <StyleTradePriceBox>
          <span>가격</span>
          <Input
            type={'text'}
            value={price}
            _onChange={(e) => setPrice(e.target.value)}
            style={{
              width: '30%',
              height: '20px',
              pd_left: '10px',
              bd: '0px',
              bd_bottom: 'gray',
            }}
            placeholder={'아이디를 입력하세요'}
          />
        </StyleTradePriceBox>
        <StyleTradeDetailBox>
          <span>설명</span>
          <Input
            type={'text'}
            value={detail}
            _onChange={(e) => setDetail(e.target.value)}
            style={{
              width: '50%',
              height: '20px',
              pd_left: '10px',
              bd: '0px',
              bd_bottom: 'gray',
            }}
            placeholder={'아이디를 입력하세요'}
          />
        </StyleTradeDetailBox>
        <StyleSubmitButton>등록하기</StyleSubmitButton>
      </StyleTradePostingAll>
    </>
  );
};

export default TradePosting;

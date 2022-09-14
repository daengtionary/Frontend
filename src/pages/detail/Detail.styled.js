import styled from "styled-components";
import { Swiper } from "swiper/react";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainBanner = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  height: 36em;
`;

export const StyledSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 36em;
  border-radius: 10px;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
  }
`;

export const BusinessTitle = styled.div`
  width: 80vw;
  margin: 20px 0 5px 0;

  span {
    font-size: 28px;
  }
`
export const MapAddress = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  color: gray;
  padding-bottom: 20px;
  margin-bottom: 50px;
  border-bottom: 1px solid #dbdbdb;

  span:first-child {
    display: flex;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
  }

`
export const MapMark = styled.img`
  width: 24px;
  height: 24px;
`

export const BusinessInfo = styled.div`
  width: 80vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

export const BusinessDescription = styled.div`
  width: 50%;
  box-sizing: border-box;
`

export const DescriptionTitle = styled.div`
`

export const Description = styled.div`
`

export const Infotmations = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  span:first-child{
    padding: 15px;
    border: none;
    background-color: #f1f1f1;
    border-radius: 50%;
    box-sizing: border-box;
    width: 62px;
    height: 62px;
    margin-right: 30px;
  }
`

export const ReviewWrap = styled.div`
  width: 80vw;
`

export const StarRating = styled.div`
  width: 80vw;
  display: flex;
  margin-bottom: 10px;

`

export const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const CalendarWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
`
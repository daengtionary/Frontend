import styled from "styled-components";
import { Swiper } from "swiper/react";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const DetailMainImg = styled.img`
  object-fit: fill;
`

export const MainBanner = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  height: 36em;
`;

export const StyledSwiper = styled(Swiper)`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  width: 80%;
  height: 36em;
  border-radius: 10px;
  z-index: 0;

  img {
    /* width: auto;
    height: 100%; */
    object-fit: contain;
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
  margin-bottom: 40px;
`

export const BusinessDescription = styled.div`
  width: 100%;
  box-sizing: border-box;
`

export const DescriptionTitle = styled.h3`
  margin-bottom: 30px;
`
export const StyledDescriptionContents = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 15px;
`

export const Description = styled.div`
  margin: 30px 0 50px 0;
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
  margin-top: 60px;
  
`
export const ReviewCard = styled.div`
 display: flex;
 align-items: center;
 padding: 15px 0 50px 0;
 border-bottom: 1px solid gray;
 gap: 15px;
`
export const ProfileImg = styled.div`
  background-image: url(${props => props.url});
  background-color: gray;
  background-size: 30px;
  background-position: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;

`
export const Nick = styled.div`

`
export const Star = styled.div`
`

export const StarRating = styled.div`
  width: 80vw;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;

`

export const StarIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const ReservationWrap = styled.div`
  display: flex;
  width: 80vw;
  height: 30vh;
`

export const ResevationTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
`

export const ResevationBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const TimeBox = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 10%;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 80%;
  /* border: 1px solid cyan; */
`
export const StyledTimeRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
  
  div {
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    border: 1px solid #DBDBDB;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  div:hover {

  }

  div:focus{
    background-color: yellow;
  }
`
export const StyledTimeCol = styled.div`
  box-sizing: border-box;
  width: 25%;
  height: 33%;
`

export const CalendarWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
`

export const TimeWrap = styled.div`
  box-sizing: border-box;
  width: 50%;
  display: flex;
  flex-direction: column;
`
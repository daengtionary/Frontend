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
  /* background: #ff000050; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84%;
  height: 36em;
  z-index: 0;
`;

export const BusinessTitle = styled.div`
  width: 84vw;
  margin: 20px 0;

  span {
    font-size: xx-large;
  }
`
export const MapAddress = styled.div`
  width: 84vw;
  display: flex;
  align-items: center;
  span:first-child {
    margin-right: 20px;
    cursor: pointer;
  }

`

export const BusinessDescription = styled.div`
  width: 84vw;
`

export const ReviewWrap = styled.div`
  width: 84vw;
`
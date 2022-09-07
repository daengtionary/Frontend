import styled from "styled-components";

export const CardBox = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* flex: 1 1 0; */
`;
export const CardImgBox = styled.div`
  border-bottom: 30px solid #cccccc50;
  border-top: 30px solid #cccccc50;
  /* background-color: #999; */
  background: ${(props) =>
    `url(${props.background}) center / cover no-repeat `};
  height: 16em;
  width: 18em;
  flex: 3 3;
`;
// export const CardImg = styled.img``;
export const CardTextBox = styled.div`
  flex: 1 1;
`;

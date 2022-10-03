import styled from 'styled-components';

export const HeaderFullBox = styled.div`
  width: 100%;
  height: auto;
  max-height: 150px;
  min-height: 100px;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  box-shadow:0 0 3px black;
  @media screen and (max-width: 768px) {
    width: 425px;
    height: auto;
    min-height: 60px;
    border-radius: 0;
    box-shadow: 0 0 0px white;
  }
`;

export const HeaderLogoBox = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
  background: ${(props) => `url(${props.backgroundImg}) center / contain no-repeat`};
  @media screen and (max-width: 768px) {
    left: 5%;
    font-size: 15px;
    width: 100px;
     height: 50px;

  }
`;

export const HeaderTextBox = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  position: absolute;
  right: 10%;
  @media screen and (max-width: 768px) {
    width: 170px;
    right: 5%;
    text-align: right;
  }
`;

export const HeaderLoginText = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;
  margin: auto;
  line-height: 30px;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 60px;
    margin: 1 1 1 1;
  }
`;

export const HeaderMypageText = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;
  margin: auto;
  line-height: 30px;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 60px;
    margin: 1 1 1 1;
  }
`;

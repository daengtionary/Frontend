import styled from "styled-components";

export const StyledDetailWrap = styled.div`
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const StyledPostContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: auto;
  min-height: 45vh;
  margin-top: ${(props) => props.marginTop};

  @media screen and (max-width: 768px) {
    border: none;
    border-radius: 0px;
    margin-top: 30px;
  }
`;

export const StyledTitle = styled.div`
  height: 13%;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #d9d9d9;

  @media screen and (max-width: 768px) {
    padding: 0 0 10px 0;
    font-size: 20px;
  }
`;
export const StyledPostInfo = styled.div`
  display: flex;
  height: 7%;
  align-items: center;
  padding: 0 15px;
  gap: 10%;
  border-bottom: 1px solid #d9d9d9;
  font-size: 12px;

  div {
    padding: 5px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
    color: #797979;
    border-bottom: none;

    div:nth-child(4) {
      display: none;
    }
  }
`;
export const StyledContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;

  p {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    /* border: 1px solid cyan; */
    height: 80%;
    p {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledImgList = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;

  img {
    border-radius: 10px;
    max-width: 80%;
    margin: 20px 0;
  }

  div {
    border-radius: 10px;
    max-width: 80%;
    height: 300px;
    margin: 20px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
    border-bottom: none;

    img {
      border-radius: 10px;
      width: 90vw;
    }
  }
`;

export const StyledShowRiples = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const StyledRiple = styled.form`
  margin-top: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 50px;
    background-color: #f1f1f5;
    border-radius: 10px;
  }
`;

export const StyledWriteRiple = styled.textarea`
  width: 88%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d9d9d9;

  @media screen and (max-width: 768px) {
    background-color: #f1f1f5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;

    &::placeholder {
      font-size: 0%;
    }
  }
`;

export const StyledRipleBtn = styled.button`
  width: 9%;
  background-color: #d9d9d9;
  color: #fff;
  border: none;

  @media screen and (max-width: 768px) {
    width: 10%;
    background-color: #f1f1f5;
    font-size: 0%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    background-image: url("img/pen.png");
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const StyledBottomBtn = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;

  button {
    border: none;
    width: 220px;
    height: 45px;
    border-radius: 10px;
    background-color: #9493ff;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

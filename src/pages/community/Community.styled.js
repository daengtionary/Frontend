import styled from "styled-components";

export const StyledCommunityTop = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* margin: 15px 0; */

  @media screen and (max-width: 768px) {

  }
`

export const TopLayout = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
  gap: 30px;
  align-items: center;
  /* padding-bottom: 15px; */
  border-bottom: 1px solid #d9d9d9;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 88%;
    display: flex;
    /* justify-content: space-between; */
    gap: 10%;
    box-sizing: border-box;
    /* border: 1px solid red; */

    h3 {
      /* margin: 10px 0; */
    }

  }
`

export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 84px;
  cursor: pointer;
  padding: 6px 20px 6px 0;
`;

export const StyledPageTitle = styled.div`
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
    width: 100%;
    padding: 15px 15px 0 15px;
    gap: 37%;
    font-weight: bold;
    

  }

`

export const StyledCommunityContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    
  }
`

export const StyledContentsLayout = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop + 'px'};

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

`

export const StyledCommunityWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 425px) {
    /* border: 1px solid blue; */
  }
` 

export const StyledCards = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 88%;
  }
`

export const StyledButtonWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;

  button {
    width: 80px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #6563ff;
    color: #fff;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 88%;

    button {
    width: 80px;
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #6563ff;
    color: #fff;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }
  }
`


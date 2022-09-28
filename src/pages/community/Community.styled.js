import styled from "styled-components";

export const StyledCommunityTop = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* margin: 15px 0; */
`

export const TopLayout = styled.div`
  margin-top: 10px;
  width: 80%;
  display: flex;
  gap: 30px;
  align-items: center;
  /* padding-bottom: 15px; */
  border-bottom: 1px solid #d9d9d9;
`

export const SearchBar = styled.div`
  input {
    border: none;
    background-color: #f1f1f1;
    padding: 10px 15px;
    border-radius: 20px;
    width: 400px;

    background-image: url('/img/search.png');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 390px center;
  }
`

export const StyledSerchImg = styled.img`
  width: 2em;
  position: absolute;
  right: 84px;
  cursor: pointer;
  padding: 6px 20px 6px 0;
`;

export const StyledCommunityContainer = styled.div`
  /* margin-top: 5px; */
  width: 100%;
  /* height: 100vh; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StyledContentsLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`

export const StyledCommunityWrap = styled.div`
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
` 

export const StyledSideBar = styled.div`
  width: 20%;
  min-width: 200px;
  box-sizing: border-box;

  ul {
    list-style: none;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  ul li {
    border-radius: 10px;
    background-color: #888;
    padding: 10px;
    margin-right: 30px;
    color: #fff;
  }
`

export const StyledCards = styled.div`
  width: 60%;
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
    background-color: #797979;
    color: #fff;
    cursor: pointer;
  }
`


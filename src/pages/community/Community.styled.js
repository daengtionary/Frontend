import styled from "styled-components";

export const CommunityTop = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* margin: 15px 0; */
`

export const TopLayout = styled.div`
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

export const CommunityContainer = styled.div`
  /* margin-top: 130px; */
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ContentsLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`

export const CommunityWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  box-sizing: border-box;
` 

export const SideBar = styled.div`
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

export const Cards = styled.div`
  width: 60%;
`

export const ButtonWrap = styled.div`
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


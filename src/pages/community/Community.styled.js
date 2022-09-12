import styled from "styled-components";

export const CommunityContainer = styled.div`
  margin-top: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
` 
export const CommunityWrap = styled.div`
  /* border: cyan solid 1px; */
  width: 80vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
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
  width: 79%;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;

  button {
    width: 220px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #797979;
    color: #fff;
    cursor: pointer;
  }
`


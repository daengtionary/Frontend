import styled from "styled-components";

export const HeaderFullBox = styled.div`
width: 100%;
height: auto;
max-height: 150px;
min-height: 100px;
background-color: white;
position: relative;
display: flex;
align-items: center;
font-size: 15px;
box-shadow: 0 0 3px black;
`

export const HeaderLogoBox = styled.div`
width: 200px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 10%;
font-size: 30px;
`

export const HeaderTextBox = styled.div`
width: 200px;
height: 80px;
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
position: absolute;
right: 10%;
`

export const HeaderLoginText = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;
  margin: auto;
  line-height: 30px;

`

export const HeaderMypageText = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 30px;
  margin: auto;
  line-height: 30px;
`
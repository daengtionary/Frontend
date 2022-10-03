import styled from 'styled-components';


export const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 110;

  @media screen and (max-width: 768px){
    
  }
`

export const StyledMapContainer = styled.div`
  width: 70vw;
  height: 70vh;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 25px;
  
  @media screen and (max-width: 768px){
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
  }
`

export const StyledMapWrap = styled.div`
  margin: 15px 0;
  width: 100%;
  height: 50vh;
  
  @media screen and (max-width: 768px){
    margin: 20px 0;
    height: 75vh;
  }
`

export const StyledCloseBtm = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    background-color: white;
  }

  @media screen and (max-width: 768px){
    margin-top: 20px;
  }
`

export const StyledMapInfo = styled.div`
  display: flex;
`

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;

  background-image: url("/img/mapLocation.png");
  background-size: 20px;

  @media screen and (max-width: 768px){
  }
  
`

export const StyledMapTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`

export const StyledMapAddress = styled.div`
  color: #797979;
  font-size: 14px;
`
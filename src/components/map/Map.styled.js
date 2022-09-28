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
`

export const StyledMapContainer = styled.div`
  width: 70vw;
  height: 70vh;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const StyledMapWrap = styled.div`
  margin: 15px 0;
  width: 100%;
  height: 50vh;
`

export const StyledCloseBtm = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    background-color: white;
  }
`
export const StyledIcon = styled.span`
  width: 20px;
  height: 20px;

  background-image: url("/img/mapLocation.png");
  background-size: 20px;
  
`

export const StyledMapTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`

export const StyledMapAddress = styled.div`
  color: #797979;
  font-size: 14px;
`
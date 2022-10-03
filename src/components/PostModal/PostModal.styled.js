import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

export const PostModalContainer = styled.div`
  width: 60vw;
  height: 70vh;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 25px 0 25px;

  @media screen and (max-width: 425px){
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    padding: 0 10px;

  }
`

export const CloseBtm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;

  button {
    border: none;
    background-color: white;
  }

  @media screen and (max-width: 425px){
    margin: 10px 0 20px 0;
  }
`

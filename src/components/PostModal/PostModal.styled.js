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
`;

export const PostModalContainer = styled.div`
  width: 60vw;
  height: 60vh;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 15px 25px 0 25px;
`

export const CloseBtm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;

  button {
    border: none;
    background-color: white;
  }
`

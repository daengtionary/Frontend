import styled from "styled-components";

export const StyledDetailWrap = styled.div`
  width: 60%;
`;
export const StyledPostContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: auto;
  margin-top: ${props => props.marginTop};
`;

export const StyledTitle = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #d9d9d9;
`;
export const StyledPostInfo = styled.div`
  display: flex;
  height: 5%;
  align-items: center;
  padding: 0 15px;
  gap: 15%;
  border-bottom: 1px solid #d9d9d9;
  font-size: 12px;
`;
export const StyledContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 87%;

  p {
    margin: 0;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
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
`;

export const StyledWriteRiple = styled.textarea`
  width: 88%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
`;

export const StyledRipleBtn = styled.button`
  width: 9%;
  background-color: #d9d9d9;
  color: #fff;
  border: none;
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
    background-color: #d9d9d9;
    color: #fff;
    cursor: pointer;
  }
`;

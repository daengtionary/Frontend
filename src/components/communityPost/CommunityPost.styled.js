import styled from "styled-components";

export const CommunityPostForm = styled.form`
  width: 80%;
  height: 50vh;
  border: 1px solid #797979;
  border-radius: 10px;
`;
export const Category = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
`;
export const UserName = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  height: 70%;
  align-items: flex-start;
`;

export const Label = styled.div`
  box-sizing: border-box;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-left-radius: ${(props) => props.topLeftRadius};
  border-bottom-left-radius: ${(props) => props.bottomLeftRadius};
  border-top: ${(props) => props.borderTop};
  /* border-bottom: ${(props) => props.borderBottom}; */
  background-color: #f1f1f1;
`;

export const Posts = styled.div`
  box-sizing: border-box;
  width: 85%;
  padding: 0 25px;
  height: 100%;
  border-top: ${(props) => props.borderTop};
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  border: 1px solid #f1f1f1;
  padding: 10px;
  border-radius: 10px;
`

export const Input = styled.input`
  border: none;
  padding: 10px;
  width: 100%;
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: 95%;
  border: none;
  padding: 10px;
`
export const ButtonWrap = styled.div`
  margin-top: 5vh;
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  
  button {
    border: none;
    width: 220px;
    height: 45px;
    border-radius: 10px;
    background-color: #d9d9d9;
    color: #fff;
  }
`
import styled from "styled-components";

export const DetailWrap = styled.div`
  width: 60%;
`;
export const PostContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: 40vh;
`;

export const Title = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #d9d9d9;
`;
export const PostInfo = styled.div`
  display: flex;
  height: 5%;
  align-items: center;
  padding: 0 15px;
  gap: 15%;
  border-bottom: 1px solid #d9d9d9;
  font-size: 12px;
`;
export const Content = styled.div`
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

export const ShowRiples = styled.div`
  margin-top: 15px;
  width: 100%;
`;


export const Riple = styled.form`
  margin-top: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const WriteRiple = styled.textarea`
  width: 88%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d9d9d9;
`;

export const RipleBtn = styled.button`
  width: 9%;
  background-color: #d9d9d9;
  color: #fff;
  border: none;
`;

export const BottomBtn = styled.div`
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

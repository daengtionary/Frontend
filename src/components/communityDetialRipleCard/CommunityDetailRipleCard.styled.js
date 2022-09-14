import styled from "styled-components";

export const RipleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
`;

export const ProfilePhoto = styled.div`
  border-radius: 50%;
  background-color: #ddd;
  width: 57px;
  min-width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const UserInfo = styled.div`
  margin-right: 20px;
  min-width: 60px;

  div:first-child {
    color: gray;
    font-size: 12px;
  }
  div:last-child {
    font-weight: bold;
  }
`;

export const RipleContent = styled.div`
  height: 60px;
  width: 90%;
  background-color: #d9d9d9;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  p {
    margin: 0;
    overflow-y: auto;
  }
`;

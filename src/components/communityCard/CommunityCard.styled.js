import styled from "styled-components";

export const CommunityCardWrap = styled.div`
  border: 1px solid #797979;
  border-radius: 10px;
  margin-bottom: 20px;
`
export const CardContents = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`

export const IconWrap = styled.div`
  display: flex;
  justify-content: end;
  margin: 15px 0 0 0;
  gap: 8px;
`

export const RepleCircle =  styled.div`
  border: none;
  border-radius: 50%;
  background-color: #797979;
  font-size: 10px;
  color: #ffffff;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -14px;
  top: -8px;
`

export const ProfilePhoto = styled.div`
  border-radius: 50%;
  background-color: #ddd;
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px
`

export const Names = styled.div`
  margin: 0 20px 0 0;
`

export const Category = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 5px 15px;
  font-size: 16px;
  margin-right: 20px;
`

export const Title = styled.div`
  font-size: 16px;
`
export const Dog = styled.div`
  color: #797979;
  font-size: 12px;
`

export const User = styled.div`
  font-size: 12px;
  font-weight: bold;
`
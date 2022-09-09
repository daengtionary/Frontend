import styled from "styled-components";

export const List = styled.div`
  padding: 30px;
  color: ${({ selected }) => selected && "#fff"};
  background-color: ${({ selected, theme }) => selected && theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  span {
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Nickname = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20px;
`;
export const Date = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;
export const Message = styled.div`
  width: 100%;
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.gray};
`;
export const NotiCount = styled.div`
  width: fit-content;
  color: #fff;
  padding: 5px 8px 4px 8px;
  border-radius: 30px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
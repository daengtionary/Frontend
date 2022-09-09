import styled from 'styled-components';

export const MessageWrap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  padding: 30px 30px 0 30px;
  overflow-y: auto;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    padding: 10px 10px 0 10px;
  }
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ me }) => me && 'flex-end'};
  margin: ${({ me }) => (me ? '0 0 0 10%' : '0 10% 0 0')};
`;
export const NickAndDate = styled.div`
  display: flex;
  flex-direction: ${({ me }) => me && 'row-reverse'};
  justify-content: ${({ me }) => (me ? 'end' : 'start')};
  align-items: center;
  margin: 10px 0;
  text-align: ${({ me }) => (me ? 'end' : 'start')};
`;
export const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
export const Date = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ me }) => (me ? '0 20px 0 0' : '0 0 0 20px')};
`;
export const Bubble = styled.div`
  width: fit-content;
  margin: 0;
  background-color: #f2f2f2;
  border-radius: ${({ me }) => (me ? '15px 0 15px 15px' : '0 15px 15px 15px')};
  padding: 20px 30px;
  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.mobile}) {
    padding: 15px 25px;
  }
`;
export const ChatListDate = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSizes.l};
`;
export const Status = styled(ChatListDate)`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.gray};
`;

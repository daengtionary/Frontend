import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, Nickname, Date, Message } from './ChatRoomList.styled';

// 채팅 > 채팅방 목록
const ChatRoomList = () => {
  const roomList = useSelector((state) => state.chat.roomList);
  const location = useLocation();
  const nick = window.localStorage.getItem('nick');

  console.log(roomList);

  return (
    <>
      {roomList.data?.map((room, index) => {
        return (
          <Link to="/chat" style={{ textDecoration: 'none' }} state={{ background: location, roomNo: room.roomNo, index: index }} key={room.roomNo}>
            <List>
              <span>
                {room.type === "group"? (<Nickname>{room.title}</Nickname>) : (nick === room.chatRoomMembers[0]?.nick ? (
                  <Nickname>{room.chatRoomMembers[1]?.nick}</Nickname>
                ) : (
                  <Nickname>{room.chatRoomMembers[0]?.nick}</Nickname>
                ))}
                <Date>{room.lastDate?.split('요일')[1]}</Date>
              </span>
              <span>
                <Message>{room.lastMessage}</Message>
              </span>
            </List>
          </Link>
        );
      })}
      {roomList.data?.length < 1 && <List>진행 중인 채팅이 없습니다.</List>}
    </>
  );
};

export default ChatRoomList;

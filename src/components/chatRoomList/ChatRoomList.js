import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { List, Nickname, Date, Message } from "./ChatRoomList.styled";

// 채팅 > 채팅방 목록
const ChatRoomList = () => {
  const roomList = useSelector(state => state.chat.roomList);
  const nick = window.localStorage.getItem("nick");
  const navigate = useNavigate();

  console.log(roomList);

  return (
    <>
      {roomList.data?.map((room, index) => {
        return (
          <List
            onClick={() =>
              navigate(`/chat/${room.roomNo}`, {
                state: { index: index, targetNo: room.chatRoomMembers[1].memberNo, targetNick: room.chatRoomMembers[1].nick, roomKey: room.roomKey },
              })
            }
            key={room.roomNo}
          >
            <span>
              {nick === room.chatRoomMembers[0].nick ? (
                <Nickname>{room.chatRoomMembers[1].nick}</Nickname>
              ) : (
                <Nickname>{room.chatRoomMembers[0].nick}</Nickname>
              )}
              <Date>{room.lastDate?.split(" ")[3].substring(0, 5)}</Date>
            </span>
            <span>
              <Message>{room.lastMessage}</Message>
            </span>
          </List>
        );
      })}
      {roomList.data?.length < 1 && <List>진행 중인 채팅이 없습니다.</List>}
    </>
  );
};

export default ChatRoomList;

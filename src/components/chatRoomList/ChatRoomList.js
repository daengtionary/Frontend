import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  List,
  Nickname,
  Date,
  Message,
  NotiCount
} from "./ChatRoomList.styled"
import moment from "moment";

// 채팅 > 채팅방 목록
const ChatRoomList = ({ location, roomId }) => {
  const roomList = useSelector((state) => state.chat.roomList);
  const memberId = useSelector((state) => state.user.user.id);

  return (
    <>
      {roomList.map((room, index) => {
        const isExit = room.type === "STATUS" && +room.senderName === +memberId;
        return (
          <Link
            to={`/chat/${room.roomId}`}
            key={`roomList${room.roomId}`}
            state={{
              backgroundLocation: location.state.backgroundLocation,
              index: index,
            }}
          >
            <List selected={+room.roomId === +roomId}>
              <span>
                <Nickname>{room?.nickname}</Nickname>
                <Date>{!isExit && moment(room.date).format("HH:mm")}</Date>
              </span>
              <span>
                <Message>
                  {isExit ? "채팅 내역이 없습니다." : room?.message}
                </Message>
                {room?.unreadCnt > 0 && +roomId !== +room.roomId && (
                  <NotiCount>{room.unreadCnt}</NotiCount>
                )}
              </span>
            </List>
          </Link>
        );
      })}
      {roomList.length < 1 && <List>진행 중인 채팅이 없습니다.</List>}
    </>
  );
};

export default ChatRoomList;

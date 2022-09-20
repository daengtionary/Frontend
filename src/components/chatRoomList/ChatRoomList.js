import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  List,
  Nickname,
  Date,
  Message,
  NotiCount
} from "./ChatRoomList.styled"
import moment from "moment";
import { useState, useEffect } from "react";



// 채팅 > 채팅방 목록
const ChatRoomList = ({ roomId }) => {
  console.log(roomId)
  const roomList = useSelector((state) => state.chat.roomList);
  const memberNo = window.localStorage.getItem("memberNo");
  const navigate = useNavigate();

  console.log(roomList)



  return (

    <> 
      {roomList.data?.map((room, index) => {
        const isExit = room.type === "STATUS" && +room.senderName === +memberNo;
        return (
          // <Link
          //   to={`/chat/${room.chatNo}`}
          //   key={`roomList${room.chatNo}`}
          //   state={{
          //     index: index
          //   }}
          // >
            <List onClick={()=>navigate(`/chat/${room.chatNo}`, {state:{index: index}})}
            // selected={+room.chatNo === +roomId}
            key={room.chatNo}
            >
              <span>
                <Nickname>{room.target.nick}</Nickname>
                {/* <Nickname>kim</Nickname> */}
                <Date>{!isExit && moment(room.date).format("HH:mm")}</Date>
                {/* <Date>{moment(room.date).format("HH:mm")}</Date> */}
                <Date>today</Date>
              </span>
              <span>
                <Message>
                  {/* {isExit ? "채팅 내역이 없습니다." : room?.message} */}
                  채팅 내역을 확인해주세요
                </Message>
                {/* {room?.unreadCnt > 0 && +roomId !== +room.roomId && (
                  <NotiCount>{room.unreadCnt}</NotiCount>
                )} */}
              </span>
            </List>
          // </Link>
        );
      })}
      {roomList.data?.length < 1 && <List>진행 중인 채팅이 없습니다.</List>}
  </>
   );
};

export default ChatRoomList;

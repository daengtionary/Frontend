import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  MessageWrap,
  Message,
  NickAndDate,
  Nickname,
  Date,
  Bubble,
  ChatListDate,
  Status
} from "./ChatList.styled"
import moment from "moment";

import {
  cleanUpMessage,
  getMessageListDB,
  getRoomListDB,
} from "../redux/modules/chat";

// 채팅 > 채팅방 > 채팅 내역
const ChatList = () => {
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const scrollRef = useRef();
  const user = useSelector((state) => state.user.user);
  let messageList = useSelector((state) => state.chat.messageList);

  useEffect(() => {
    dispatch(cleanUpMessage());
    dispatch(getMessageListDB(roomId));
  }, [roomId]);

  useEffect(() => {
    // 채팅 메시지 내역 자동 스크롤
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

    // 새로운 채팅방인 경우, 메시지 보내는 순간 방이 생성되기 때문에
    // 좌측 채팅방 리스트에 표시해주기 위해 GET 요청 보냄.
    if (messageList.length === 1) {
      dispatch(getRoomListDB());
    }
  }, [messageList]);

  // 채팅방 나간 경우 이전 메시지 숨김 처리.
  (() => {
    let slicedList = [];
    messageList.forEach((message) => {
      slicedList = [...slicedList, message];
      if (message.type === "STATUS" && message.senderName === user.username) {
        slicedList = [];
      }
    });
    messageList = slicedList;
  })();

  return (
    <MessageWrap>
      {messageList.map((chat, index) => {
        const date = moment(chat.date).format("HH:mm");
        const isMe = chat?.senderName === user?.username;
        return (
          <>
            {chat.date.split("T")[0] !==
              messageList[index - 1]?.date?.split("T")[0] && (
              <ChatListDate key={chat.date}>
                {moment(chat.date).format("YYYY.MM.DD")}
              </ChatListDate>
            )}
            {chat.type === "TALK" ? (
              <Message key={chat.messageId} me={isMe}>
                {(chat.senderName !== messageList[index - 1]?.senderName ||
                  messageList[index - 1].type === "STATUS" ||
                  date !==
                    moment(messageList[index - 1]?.date).format("HH:mm")) && (
                  <NickAndDate me={isMe}>
                    <Nickname>{chat?.senderNickname}</Nickname>
                    <Date me={isMe}>{date}</Date>
                  </NickAndDate>
                )}
                <Bubble me={isMe}>{chat?.message}</Bubble>
              </Message>
            ) : (
              <Status>{chat?.message}</Status>
            )}
          </>
        );
      })}
      <div ref={scrollRef} />
    </MessageWrap>
  );
};



export default ChatList;

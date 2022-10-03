import React, { useEffect, useRef, useState } from "react";
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
import "moment/locale/ko";

import {
  cleanUpMessage,
  getMessageListDB,
  getRoomListDB,
} from "../../redux/modules/chatSlice";


// 채팅 > 채팅방 > 채팅 내역
const ChatList = () => {
  const dispatch = useDispatch();
  const { roomNo } = useParams();
  const scrollRef = useRef();
  const user = window.localStorage.getItem("nick");

  const messageList = useSelector((state) => state.chat.messageList);
  console.log(messageList)


  

  useEffect(() => {
    dispatch(cleanUpMessage());
    dispatch(getMessageListDB(roomNo));
  }, [roomNo]);

  useEffect(() => {
    // 채팅 메시지 내역 자동 스크롤
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });

  }, [messageList]);

  useEffect(() => {
    document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  // 채팅방 나간 경우 이전 메시지 숨김 처리.
  // (() => {
  //   let slicedList = [];
  //   messageList.forEach((message) => {
  //     slicedList = [...slicedList, message];
  //     if (message.type === "STATUS" && message.senderName === user) {
  //       slicedList = [];
  //     }
  //   });
  //   messageList = slicedList;
  // })();

  return (
    <MessageWrap>
      {messageList.data?.map((chat, index) => {
        const date = chat.date?.split("년")[1].substring(1, 8)
        console.log(date)
        const isMe = chat?.sender === user;
        return (
          <div key={chat.messageNo} >
            {chat.date?.split("년")[1].substring(1, 8) !==
              messageList.data[index - 1]?.date.split("년")[1].substring(1, 8) && (
              <ChatListDate>
                {chat.date.split("년")[1].substring(1, 8)}
              </ChatListDate>
            )}
            {chat.type === "TALK" ? (
              <Message  me={isMe}>
                {(chat.sender !== messageList.data[index - 1]?.sender ||
                  date !==
                   (chat.date.split(" ")[0])) && (
                  <NickAndDate me={isMe}>
                    <Nickname>{chat?.sender}</Nickname>
                  </NickAndDate>
                  
                )}
                <Bubble me={!isMe}>{chat?.message}</Bubble>
                <Date me={isMe}>{chat.date.split("요일")[1]}</Date>
              </Message>
            ) : (
              <Status>{chat?.message}</Status>
            )}
          </div>
        );
      })}
      <div ref={scrollRef} />

    </MessageWrap>
  );
};



export default ChatList;

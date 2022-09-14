import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ChatInputWrap,
  ChatInput,
  SendButton,
  ExitButton
} from "./ChatRoom.styled"

import {
  addMessage,
  getRoomListDB,
  readMessage,
  updateRoomMessage,
} from "../../redux/modules/chatSlice";
import { chatApis } from "../../shared/api";
import ChatList from "../chatList/ChatList";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

// import { Input } from "../elements/Inputs";
// import { Button } from "../elements/Buttons";

// 채팅 모달 > 채팅방
const ChatRoom = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const inputRef = useRef();
  let stompClient = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);

  // 웹소켓 연결 요청 & 구독 요청
  const socketConnect = () => {
    const webSocket = new SockJS(`${process.env.REACT_APP_CHAT_API_IP}/ws-stomp`);
    stompClient.current = Stomp.over(webSocket);

    // STOMPJS console log 지워주는 부분
    stompClient.current.debug = null;

    stompClient.current.connect(
      {
        Authorization: `Bearer ${sessionStorage.getItem("authorization")}`,
        type: "TALK",
      },

      // 연결 성공 시 실행되는 함수
      () => {
        stompClient.current.subscribe(
          `/sub/chat/room/${roomId}`,
          (response) => {
            const messageFromServer = JSON.parse(response.body);
            dispatch(addMessage(messageFromServer));
            dispatch(
              updateRoomMessage({
                ...messageFromServer,
                index: location.state.index ?? 0,
              })
            );
          },
          { Authorization: `Bearer ${sessionStorage.getItem("authorization")}` }
        );
        setIsLoading(false);
      }
    );
  };

  // 웹소켓 연결 해제
  const socketDisconnect = () => {
    stompClient.current.disconnect();
    stompClient.current = null;
  };

  // 메시지 전송
  const sendMessage = (event) => {
    event.preventDefault();

    const message = event.target.chat.value;

    if (message === "" || message.trim() === "") return false;

    const messageObj = {
      roomId: roomId,
      senderId: user.id,
      message: event.target.chat.value,
      isRead: false,
      type: "TALK",
      nickname: user.nickname,
    };

    stompClient.current.send(
      `/pub/chat/message`,
      { Authorization: `Bearer ${sessionStorage.getItem("authorization")}` },
      JSON.stringify(messageObj)
    );

    event.target.chat.value = null;
  };

  useEffect(() => {
    setIsLoading(true);
    inputRef.current.value = "";

    // 채팅방 전환 시 기존 연결 해제 후 새 연결 요청
    if (stompClient.current) {
      socketDisconnect();
    }
    socketConnect();

    return () => {
      // 언마운트 시 연결 해제
      if (stompClient.current) socketDisconnect();
      dispatch(readMessage(location.state.index));
    };
  }, [roomId]);

  // 채팅방 나가기
  const exitRoom = async () => {
    const confirm = window.confirm("채팅방을 나가시겠어요?");
    if (confirm) {
      await chatApis.exitRoom(roomId);
      dispatch(getRoomListDB()).then(() => navigate(-1));
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <ChatInputWrap>
        <form onSubmit={sendMessage}>
          <ChatInput
            ref={inputRef}
            name="chat"
            autoComplete="off"
            placeholder="메시지를 입력해주세요."
            maxLength={150}
          />
          <SendButton>보내기</SendButton>
        </form>
      </ChatInputWrap>
      <ChatList />
      <ExitButton onClick={exitRoom}>나가기</ExitButton>
    </>
  );
};

export default ChatRoom;

import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useEffect, useRef } from "react";
import { useDispatch} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
//스타일 컴포넌트
import { ChatInputWrap, ChatInput, SendButton, ChatRoomFullBox, ChatRoomAll, ChatInputForm } from "./ChatRoom.styled";
import { Dim, Title, FloatWrap } from "../chatModal/ChatModal.styled";

import { addMessage, readMessage, updateRoomMessage } from "../../redux/modules/chatSlice";
import ChatList from "../chatList/ChatList";

//아이콘
import cencel from "../../static/image/cencel.png";

// 채팅 모달 > 채팅방
const ChatRoom = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const stompClient = useRef(null);
  const roomNo = location.state.roomNo;

  const nick = window.localStorage.getItem("nick");




  const onClickBack = () => {
    navigate(-1);
  };

  // 웹소켓 연결 요청 & 구독 요청
  const socketConnect = () => {
    const webSocket = new SockJS(`https://${process.env.REACT_APP_REST_API_IP}/wss/chat`);
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
          `/sub/chat/room/${roomNo}`,
          response => {
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
        stompClient.current.send(`/pub/chat/message`, { nick }, JSON.stringify({ type: "ENTER", roomNo: roomNo, sender: nick}));
      }
    );
  };

  // 웹소켓 연결 해제
  const socketDisconnect = () => {
    stompClient.current.disconnect();
    stompClient.current = null;
  };

  // 메시지 전송
  const sendMessage = event => {
    event.preventDefault();

    const message = event.target.chat.value;

    if (message === "") return false;

    const messageObj = {
      roomNo: roomNo,
      message: message,
      type: "TALK",
      sender: nick,
    };

    stompClient.current.send(`/pub/chat/message`, { Authorization: `Bearer ${sessionStorage.getItem("authorization")}` }, JSON.stringify(messageObj));

    event.target.chat.value = [];
  };

  useEffect(() => {
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
  }, [roomNo]);


  return (
    <FloatWrap>
      <Dim>
        <ChatRoomAll>
          <Title>
            댕톡
            <img src={cencel} alt="exit" onClick={onClickBack} />
          </Title>
          <ChatRoomFullBox>
            <ChatList id={roomNo} />
          </ChatRoomFullBox>
          <ChatInputWrap>
            <ChatInputForm onSubmit={sendMessage}>
              <ChatInput name="chat" autoComplete="off" placeholder="메시지를 입력해주세요." maxLength={150} />
              <SendButton>보내기</SendButton>
            </ChatInputForm>
          </ChatInputWrap>
        </ChatRoomAll>
      </Dim>
      </FloatWrap>
  );
};

export default ChatRoom;

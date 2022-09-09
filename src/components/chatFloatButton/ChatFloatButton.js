import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useMatch } from "react-router-dom";
import {
  FloatWrap,
  ChatButtonWrap,
  ChatButton,
  NewNoti
} from "./ChatFloatButton.styled";

import { setNotification } from "../../redux/modules/chatSlice";
import { SmileChatSVG} from "../../elements/svg/SVG"

// 우측 하단 채팅 플로팅 버튼
const ChatFloatButton = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isChatModalOn = useMatch("/chat/*");
  const notification = useSelector((state) => state.chat.notification);
  const userId = useSelector((state) => state.user.user?.id);
  const eventSource = useRef();

  useEffect(() => {
    if (userId) {
      // SSE 구독 요청
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_CHAT_URL}/user/subscribe/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // 서버에서 메시지가 전송될 때 실행되는 함수
      eventSource.current.onmessage = (message) => {
        if (!message.data.includes("EventStream Created")) {
          dispatch(setNotification(true));
        }
      };
    }
    return () => {
      // 언마운트 시 연결 종료
      if (eventSource.current) {
        eventSource.current.close();
        eventSource.current = null;
      }
    };
  }, [userId, dispatch]);

  return (
    <>
      {/* {userId && !isChatModalOn && ( */}
        <FloatWrap>
          <Link to="/chat" state={{ backgroundLocation: location }}>
            <ChatButtonWrap>
              <ChatButton>
                {notification && <NewNoti />}
                <SmileChatSVG />
                <span>채팅</span>
              </ChatButton>
            </ChatButtonWrap>
          </Link>
        </FloatWrap>
      {/* )} */}
    </>
  );
};


export default ChatFloatButton;

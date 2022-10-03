import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useLocation, Outlet } from "react-router-dom";
import { FloatWrap, ChatButtonWrap, ChatButton, NewNoti } from "./ChatFloatButton.styled";

import { setNotification } from "../../redux/modules/chatSlice";
import { SmileChatSVG } from "../../elements/svg/SVG";

// 우측 하단 채팅 플로팅 버튼
const ChatFloatButton = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isChatModalOn = useMatch("/chat/*");
  const notification = useSelector((state) => state.chat.notification);
  const memberNo = window.localStorage.getItem("memberNo");
  console.log(memberNo);
  const eventSource = useRef();

  // useEffect(() => {
  //   if (memberNo) {
  //     // SSE 구독 요청
  //     eventSource.current = new EventSource(
  //       `https://${process.env.REACT_APP_CHAT_API_IP}/member/subscribe/${memberNo}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem("authorization")}`,
  //         },
  //       }
  //     );

  //     // 서버에서 메시지가 전송될 때 실행되는 함수
  //     eventSource.current.onmessage = (message) => {
  //       if (!message.data.includes("EventStream Created")) {
  //         dispatch(setNotification(true));
  //       }
  //     };
  //   }
  //   return () => {
  //     // 언마운트 시 연결 종료
  //     if (eventSource.current) {
  //       eventSource.current.close();
  //       eventSource.current = null;
  //     }
  //   };
  // }, [memberNo, dispatch]);

  return (
    <>
      {memberNo && isChatModalOn && (
        <FloatWrap>
          <Link to={`/chat`}>
            <ChatButtonWrap>
              <ChatButton>
                {notification && <NewNoti />}
                <SmileChatSVG />
              </ChatButton>
            </ChatButtonWrap>
          </Link>
        </FloatWrap>
      )}
    </>
  );
};

export default ChatFloatButton;

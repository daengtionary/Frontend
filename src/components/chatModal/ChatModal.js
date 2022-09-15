import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  FloatWrap,
  Dim,
  Wrap,
  Title,
  LeftWrap,
  ListWrap,
  RoomWrap,
  Header,
  HelpMessage
} from './ChatModal.styled';
import { setNotification, getRoomListDB } from "../../redux/modules/chatSlice";
import ChatRoom from "../chatRoom/ChatRoom";
import ChatRoomList from "../chatRoomList/ChatRoomList"

import { OrangeChatSVG, XSVG } from "../../elements/svg/SVG";

// 채팅 모달
const ChatModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isMatchChat = useMatch("/chat");
  const { roomId } = useParams();

  const onClickClose = () => {
    navigate(-1);
  };

  const onClickBack = () => {
    navigate("/chat");
  };

  useEffect(() => {
    dispatch(getRoomListDB());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setNotification(false));
    };
  }, [dispatch]);

  // 화면 스크롤 방지
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

  return (
    <FloatWrap>
      <Dim />
      <Wrap>
        <LeftWrap isRoom={roomId}>
          <Title>
            채팅
            <span onClick={onClickClose}>
              <XSVG />
            </span>
          </Title>
          <ListWrap>
            <ChatRoomList location={location} roomId={roomId} />
          </ListWrap>
        </LeftWrap>
        <RoomWrap isRoom={roomId}>
          {isMatchChat && (
            <HelpMessage>
              <div>
                <OrangeChatSVG />
              </div>
              <>
                왼쪽 채팅 목록을 클릭하여 <br />
                채팅 내용을 확인해주세요!
              </>
            </HelpMessage>
          )}
          {roomId && <ChatRoom roomId={roomId} />}
          <Header isRoom={roomId}>
            <span onClick={onClickClose}>
              <XSVG />
            </span>
            {roomId && <div onClick={onClickBack}>{"<"}</div>}
          </Header>
        </RoomWrap>
      </Wrap>
    </FloatWrap>
  );
};


export default ChatModal;

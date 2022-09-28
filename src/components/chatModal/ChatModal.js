import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
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

} from './ChatModal.styled';
import { setNotification, getRoomListDB } from "../../redux/modules/chatSlice";
import ChatRoomList from "../chatRoomList/ChatRoomList"


// 채팅 모달
const ChatModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roomNo = window.localStorage.getItem("memberNo");


  
  const onClickClose = () => {
    navigate("/");
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
        <LeftWrap isRoom={roomNo}>
          <Title>
            댕톡
          </Title>
          <ListWrap>
            <ChatRoomList 
            roomId={roomNo} />
          </ListWrap>
        </LeftWrap>
       
      </Wrap>
    </FloatWrap>
  );
};


export default ChatModal;

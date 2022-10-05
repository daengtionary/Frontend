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
import jwtDecode from "jwt-decode";
import { setNotification, getRoomListDB } from "../../redux/modules/chatSlice";
import ChatRoomList from "../chatRoomList/ChatRoomList"

//아이콘
import cencel from "../../static/image/cencel.png";


// 채팅 모달
const ChatModal = ({setModalOn, modalOn, setRoomOn, roomOn}) => {
  const dispatch = useDispatch();
  const roomNo = window.localStorage.getItem("memberNo");

  // let token = window.sessionStorage.getItem("authorization");
  // // 토큰 decode 하는 부분
  // let decoded = token && jwtDecode(token);
  // // 토큰 만료시간
  // let exp = token && Number(decoded.exp + "000");
  // let expTime = new Date(exp);
  // console.log(expTime, "만료 시간");
  // let now = new Date();
  // console.log(now, "현재 시간");
  // const checkToken = () => {
  //   if (expTime <= now || token === null) {
  //     token && window.sessionStorage.removeItem("authorization");
  //     alert("로그인이 필요합니다!");
  //     navigate("/signin");
  //   } 
  // };

  // useEffect(() => {
  //   checkToken();
  // }, []);


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
    <>
    <FloatWrap>
      <Dim />
      <Wrap>
        <LeftWrap>
          <Title>
            댕톡
            <img src={cencel} alt="exit" onClick={()=>{setModalOn(!modalOn)}}/>
          </Title>
          <ListWrap>
            <ChatRoomList 
            setRoomOn={setRoomOn} roomOn={roomOn} />
          </ListWrap>
        </LeftWrap>
      </Wrap>
    </FloatWrap>
    </>
  );
};


export default ChatModal;

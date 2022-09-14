import axios from "axios";

const SERVER_IP = process.env.REACT_APP_REST_API_IP;

export const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

api_auth.interceptors.request.use(
  function (config) {
    config.headers["authorization"] = `Bearer ${window.sessionStorage.getItem(
      "authorization"
    )}`;
    config.headers["refresh-token"] = `${window.sessionStorage.getItem(
      "refresh-token"
    )}`;
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export const api = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});



export const chatApi = axios.create({
  baseURL: process.env.REACT_APP_CHAT_API_IP,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

chatApi.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("authorization");
  if (token !== undefined) {
    config.headers.common["Authorization"] = token;
  }
  return config;
});


export const chatApis = {

  // 채팅
  getRoomList: () => chatApi.get("/chat/rooms"),
  getMessageList: (roomId) => chatApi.get("/chat/room/" + roomId),

  addRoom: (memberId) => chatApi.post("/chat/room", { memberId }),

  enterRoom: (roomId) => chatApi.get(`/chat/room/${roomId}`),
  exitRoom: (roomId) => chatApi.get(`chat/room/exit/${roomId}`),
};
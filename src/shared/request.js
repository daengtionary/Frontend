import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});


const token = sessionStorage.getItem("token");
// const token = localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default instance;
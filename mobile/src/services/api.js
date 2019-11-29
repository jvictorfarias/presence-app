import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.127.101:3333"
});

export default api;

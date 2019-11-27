import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.122.100:3333"
});

export default api;

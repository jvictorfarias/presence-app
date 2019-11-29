import axios from "axios";
import config from "../config/env";

const api = axios.create({
  baseURL: config.SERVER_URL
});

export default api;

import axios from "axios";
import Cookie from "cookie-universal";
import { BASE_URL } from "./API";
const cookie = Cookie();
const token = cookie.get("mulhm-token");

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

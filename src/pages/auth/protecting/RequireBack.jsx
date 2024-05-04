import { Outlet } from "react-router-dom";
import Cookie from "cookie-universal";
import { jwtDecode } from "jwt-decode";

export default function RequireBack() {
  //
  const cookie = Cookie();
  const token = cookie.get("mulhm-token");
  const decodedToken = token ? jwtDecode(token) : {};
  //
  return token && decodedToken.Role === "ADMIN" ? window.history.back() : <Outlet />;
}

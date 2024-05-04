import { Navigate, Outlet } from "react-router-dom";
import Cookie from "cookie-universal";
import { jwtDecode } from "jwt-decode";

export default function RequireAuth() {
  // Handle Cookies
  const cookies = Cookie();
  const token = cookies.get("mulhm-token");

  const decodedToken = token ? jwtDecode(token) : {};

  console.log(decodedToken);

  // email: decodedToken.sub

  // Edditting in the token prevent it
  return token && decodedToken.Role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace={true} />
  );
}

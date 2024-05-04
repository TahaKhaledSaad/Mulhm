import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AUTH, BASE_URL, LOGIN } from "../../../api/API";
import { toast, ToastContainer } from "react-toastify";
import Cookie from "cookie-universal";
import { jwtDecode } from "jwt-decode";

import google from "./../../../assets/google.svg";
import facebook from "./../../../assets/facebook.svg";
import test from "./../../../assets/test.svg";
import "./style.css";

export default function Login() {
  // *** States ***

  const [form, setForm] = useState({
    email: "",
    password: "",
    deviceToken: "",
  });

  const navigate = useNavigate();

  const cookies = new Cookie();

  // *** Functions ***

  // [1] handleChange
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // [2] sendData
  const sendData = (e) => {
    e.preventDefault();
    console.log(form);
    const loadingToastId = toast.loading("Please wait while we register you", {
      position: "bottom-right",
      autoClose: false,
    });
    axios
      .post(`${BASE_URL}/${AUTH}/${LOGIN}`, form)
      .then((res) => {
        console.log(res.data);
        // remove old mulhm-token
        cookies.remove("mulhm-token");
        // Decode token
        const decodedToken = jwtDecode(res.data.data);
        // Set token in cookie
        decodedToken.Role === "ADMIN" &&
          cookies.set("mulhm-token", res.data.data);
        // Check if user is not an admin
        decodedToken.Role !== "ADMIN"
          ? toast.info("You are not authorized to enter.", {
              position: "bottom-right",
              autoClose: 3000,
            })
          : null;
        // Stop loading toast
        toast.dismiss(loadingToastId);
        // Start success toast
        decodedToken.Role === "ADMIN" &&
          toast.success(res.data.message, {
            position: "bottom-right",
            autoClose: 3000,
          });
        setTimeout(() => {
          navigate("/home/dashboard");
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.dismiss(loadingToastId);
        if (err.response.data.message === "User is disabled") {
          toast.info("Check email to verify account.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else {
          toast.error(err.response.data.message, {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      });
  };

  return (
    <div className="parent">
      <ToastContainer />
      <div className="parent-content">
        <div className="main-info">
          <div className="form-data">
            <h2>Login</h2>
            <p className="desc">How do i get started lorem ipsum dolor at?</p>
            <form onSubmit={sendData}>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder=". . . . . . . . . . . . ."
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <p style={{ textAlign: "right", fontSize: "14.22px" }}>
                <Link to="/forget-password">
                  <span>Forget Password</span>
                </Link>
              </p>
              <button>Sign in</button>
            </form>
            <div className="sign-with">
              <img src={google} alt="google image" />
              Sign in with Google
            </div>
            <div className="sign-with">
              <img src={facebook} alt="facebook image" />
              Sign in with Facebook
            </div>
            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register">
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="image-cover">
          <img src={test} alt="Mulhm" />
        </div>
      </div>
    </div>
  );
}

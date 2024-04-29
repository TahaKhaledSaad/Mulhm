import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AUTH, BASE_URL, LOGIN } from "../../../api/API";

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

  // *** Functions ***
  // [1] handleChange
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // [2] sendData
  const sendData = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post(`${BASE_URL}/${AUTH}/${LOGIN}`, form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="parent">
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
              />
              <input
                type="password"
                placeholder=". . . . . . . . . . . . ."
                name="password"
                value={form.password}
                onChange={handleChange}
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

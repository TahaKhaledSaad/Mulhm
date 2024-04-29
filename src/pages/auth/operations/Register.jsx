import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AUTH, BASE_URL, REGISTER } from "../../../api/API";

import img from "./../../../assets/signup.svg";
import "./style.css";

export default function Register() {
  // *** States ***
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    deviceToken: "",
  });
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState(false);

  // *** Functions ***
  // [1] handleChange
  const handleChange = (e) => {
    if (e.target.name === "password") {
      validatePassword(e.target.value);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // [2] validatePassword
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,32}$/;
    if (!regex.test(password)) {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  };
  // [3] sendData
  const sendData = (e) => {
    e.preventDefault();
    setError(true);
    if (!validatePassword(form.password)) {
      return;
    }
    console.log(form);
    axios
      .post(`${BASE_URL}/${AUTH}/${REGISTER}`, form)
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
            <h2>Sign up</h2>
            <p className="desc">Start your 30-day free trial.</p>
            <form onSubmit={sendData}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              {passwordError && error && (
                <div className="pass-rules">
                  <p className="heading">Rules for Password</p>
                  <ul className="pb-0">
                    <li>Minimum 8 character</li>
                    <li>At least one special character as (!@#$&*)</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li className="m-0">At least one number</li>
                  </ul>
                </div>
              )}
              <p>
                You are agreeing to the <span>Terms of Services</span> <br />{" "}
                and <span>Privacy Policy</span>
              </p>
              <button>Get started</button>
            </form>
            <p>
              Already a member?{" "}
              <Link to="/login">
                <span>Sign in</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="image-cover">
          <img src={img} alt="Mulhm" />
        </div>
      </div>
    </div>
  );
}

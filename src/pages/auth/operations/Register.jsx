import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AUTH, BASE_URL, REGISTER } from "../../../api/API";
import { toast, ToastContainer } from "react-toastify";

import img from "./../../../assets/signup.svg";
import "./style.css";

export default function Register() {
  // *** States ***

  // [1] form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    deviceToken: "",
  });

  // [2] passwordError
  const [passwordError, setPasswordError] = useState(false);

  // [3] error
  const [error, setError] = useState(false);

  // [4] navigate
  const navigate = useNavigate();

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
    const loadingToastId = toast.loading("Please wait while we register you", {
      position: "bottom-right",
      autoClose: false,
    });
    axios
      .post(`${BASE_URL}/${AUTH}/${REGISTER}`, form)
      .then((res) => {
        console.log(res.data);
        toast.dismiss(loadingToastId);
        toast.success(res.data.message, {
          id: "success",
          position: "bottom-right",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.dismiss(loadingToastId);
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className="parent">
      <ToastContainer />
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
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
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
              <Link to="/">
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

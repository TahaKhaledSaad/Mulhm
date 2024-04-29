import img from "./../../../assets/login.svg";
import google from "./../../../assets/google.svg";
import facebook from "./../../../assets/facebook.svg";
import "./style.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="parent">
      <div className="parent-content">
        <div className="main-info">
          <div className="form-data">
            <h2>Login</h2>
            <p className="desc">How do i get started lorem ipsum dolor at?</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder=". . . . . . . . . . . . ." />
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
          <p>
            Very good works are <br />
            waiting for you
          </p>
          <img
            src={img}
            alt="Sign In Image"
            style={{
              position: "absolute",
              bottom: "0",
              width: "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

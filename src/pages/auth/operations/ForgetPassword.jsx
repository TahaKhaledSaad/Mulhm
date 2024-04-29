import { Link } from "react-router-dom";
import "./style.css";

export default function ForgetPassword() {
  return (
    <div className="parent">
      <div
        className="parent-content"
        style={{
          width: "fit-content",
          height: "auto",
          padding: "50px 30px",
        }}
      >
        <div className="main-info">
          <div className="form-data">
            <h2 className="text-center">Forgot password?</h2>
            <p className="desc text-center">
              No worries, we’ll send you reset instruction.
            </p>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
              <button>Reset Password</button>
            </form>
            <p style={{ textAlign: "center", fontSize: "14.22px" }}>
              <Link to="/login">
                <span>Back to login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

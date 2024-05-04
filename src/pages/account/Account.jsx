import Topbar from "../../components/dashboard/topbar/Topbar";
import avatar from "./../../assets/avatar.png";
import googleword from "./../../assets/googleword.svg";
import "./style.css";

export default function Account() {
  // ─── States ──────────────────────────────────────────────────────────────

  // ─── Functions ───────────────────────────────────────────────────────────

  // ─── UseEffect ───────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="new-user">
      <Topbar title="Account/Setting" />

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="main-heading">Setting Details</p>
          <p className="main-desc">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="d-flex gap-5">
        {/* Main Data */}
        <div>
          <div className="user-info pb-5 mb-2">
            <p className="heading">Personal information</p>
            <hr />

            <div className="user-details">
              <div className="input-elem">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" placeholder="eg. Malik" />
              </div>

              <div className="input-elem">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" placeholder="eg. Ali" />
              </div>

              <div className="input-elem">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="eg. Team@gmail.com"
                />
              </div>

              <div className="input-elem">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="eg. TahaKh33" />
              </div>

              <div className="input-elem">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="eg. 966 5887 4888" />
              </div>

              <div className="input-elem">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="eg. Riyadh" />
              </div>
            </div>
          </div>

          <div className="user-info pb-5 mb-5">
            <p className="heading">Password</p>
            <hr />

            <div className="user-details">
              <div className="input-elem">
                <label htmlFor="currentPass">Current Password</label>
                <input
                  type="password"
                  id="currentPass"
                  placeholder="Current Password"
                />
              </div>
            </div>

            <div className="user-details">
              <div className="input-elem">
                <label htmlFor="newPass">New Password</label>
                <input type="password" id="newPass" placeholder="ma56kl90" />
              </div>

              <div className="input-elem">
                <label htmlFor="confirmNewPass">Confirm Password</label>
                <input
                  type="password"
                  id="confirmNewPass"
                  placeholder="ma56kl90"
                />
              </div>
            </div>

            <div className="pass-rules">
              <p className="heading">Rules for Password</p>
              <p className="desc">
                To create a new password, you have to meet <br /> all of the
                following requirements.
              </p>
              <ul>
                <li>Minimum 8 character</li>
                <li>At least one special character</li>
                <li>At least one number</li>
                <li>Can”t be the same as a previous</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary Data */}
        <div>
          <div className="user-info">
            <p className="heading">Your Photo</p>
            <hr />
            <div className="user-profile d-flex gap-2 align-items-center">
              <img src={avatar} alt="mulhm" />
              <div>
                <p>Edit your photo</p>
                <p>
                  <span>Delete</span>
                  <span>Update</span>
                </p>
              </div>
            </div>
            <label className="upload-photo" htmlFor="upload">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M4.05 14.2997C1.81406 14.2997 0 12.4856 0 10.2497C0 8.48346 1.13062 6.98158 2.70562 6.42752C2.70281 6.35158 2.7 6.27564 2.7 6.19971C2.7 3.71346 4.71375 1.69971 7.2 1.69971C8.86781 1.69971 10.3219 2.60533 11.1009 3.95533C11.5284 3.66846 12.0459 3.49971 12.6 3.49971C14.0906 3.49971 15.3 4.70908 15.3 6.19971C15.3 6.54283 15.2353 6.86908 15.12 7.17283C16.7625 7.50471 18 8.95877 18 10.6997C18 12.6881 16.3884 14.2997 14.4 14.2997H4.05ZM6.27187 9.60283L8.52187 11.8528C8.78625 12.1172 9.21375 12.1172 9.47531 11.8528L11.7253 9.60283C11.9897 9.33846 11.9897 8.91096 11.7253 8.64939C11.4609 8.38783 11.0334 8.38502 10.7719 8.64939L9.675 9.74627V5.97471C9.675 5.60064 9.37406 5.29971 9 5.29971C8.62594 5.29971 8.325 5.60064 8.325 5.97471V9.74627L7.22812 8.64939C6.96375 8.38502 6.53625 8.38502 6.27469 8.64939C6.01312 8.91377 6.01031 9.34127 6.27469 9.60283H6.27187Z"
                  fill="#345995"
                />
              </svg>
              <p>
                Click to upload <span>or drag and drop</span>
              </p>
              <p>SVG, PNG, JPG or GIF</p>
              <p>(max, 800x400px)</p>
            </label>
            <input type="file" hidden id="upload" />
          </div>

          <div className="user-info">
            <div className="google d-flex justify-content-between align-items-center">
              <img src={googleword} alt="mulhm" />
              <p className="connected">Connected</p>
            </div>
            <div className="google-desc">
              Use Google to sign in to your
              <br /> account. <span> Click here to learn more.</span>
            </div>
          </div>
          <div className="user-info">
            <p className="heading">Devices</p>
            <p className="desc">
              The Last Pass password generator creates random passwords based on
              parameters set by you.
            </p>
            <p className="sign-out">Sign out from all devices</p>
            <hr className="my-4" />

            <div className="phone-elem">
              <div>
                <p>iPhone 11</p>
                <p>London, UK-Oct12 at 2:30AM</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12.3711C9.9315 12.3711 10.6875 13.1271 10.6875 14.0586C10.6875 14.9901 9.9315 15.7461 9 15.7461C8.0685 15.7461 7.3125 14.9901 7.3125 14.0586C7.3125 13.1271 8.0685 12.3711 9 12.3711ZM9 7.30859C9.9315 7.30859 10.6875 8.06459 10.6875 8.99609C10.6875 9.92759 9.9315 10.6836 9 10.6836C8.0685 10.6836 7.3125 9.92759 7.3125 8.99609C7.3125 8.06459 8.0685 7.30859 9 7.30859ZM9 2.24609C9.9315 2.24609 10.6875 3.00209 10.6875 3.93359C10.6875 4.86509 9.9315 5.62109 9 5.62109C8.0685 5.62109 7.3125 4.86509 7.3125 3.93359C7.3125 3.00209 8.0685 2.24609 9 2.24609Z"
                  fill="#3A3541"
                />
              </svg>
            </div>
            <div className="phone-elem">
              <div>
                <p>Galaxy M31</p>
                <p>Berlain, Nov23 at 2:30pM</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12.3711C9.9315 12.3711 10.6875 13.1271 10.6875 14.0586C10.6875 14.9901 9.9315 15.7461 9 15.7461C8.0685 15.7461 7.3125 14.9901 7.3125 14.0586C7.3125 13.1271 8.0685 12.3711 9 12.3711ZM9 7.30859C9.9315 7.30859 10.6875 8.06459 10.6875 8.99609C10.6875 9.92759 9.9315 10.6836 9 10.6836C8.0685 10.6836 7.3125 9.92759 7.3125 8.99609C7.3125 8.06459 8.0685 7.30859 9 7.30859ZM9 2.24609C9.9315 2.24609 10.6875 3.00209 10.6875 3.93359C10.6875 4.86509 9.9315 5.62109 9 5.62109C8.0685 5.62109 7.3125 4.86509 7.3125 3.93359C7.3125 3.00209 8.0685 2.24609 9 2.24609Z"
                  fill="#3A3541"
                />
              </svg>
            </div>
            <div className="phone-elem">
              <div>
                <p>Vivo y21</p>
                <p>London, UK-Oct12 at 2:30AM</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12.3711C9.9315 12.3711 10.6875 13.1271 10.6875 14.0586C10.6875 14.9901 9.9315 15.7461 9 15.7461C8.0685 15.7461 7.3125 14.9901 7.3125 14.0586C7.3125 13.1271 8.0685 12.3711 9 12.3711ZM9 7.30859C9.9315 7.30859 10.6875 8.06459 10.6875 8.99609C10.6875 9.92759 9.9315 10.6836 9 10.6836C8.0685 10.6836 7.3125 9.92759 7.3125 8.99609C7.3125 8.06459 8.0685 7.30859 9 7.30859ZM9 2.24609C9.9315 2.24609 10.6875 3.00209 10.6875 3.93359C10.6875 4.86509 9.9315 5.62109 9 5.62109C8.0685 5.62109 7.3125 4.86509 7.3125 3.93359C7.3125 3.00209 8.0685 2.24609 9 2.24609Z"
                  fill="#3A3541"
                />
              </svg>
            </div>
            <div className="phone-elem">
              <div>
                <p>Mi Pro u12</p>
                <p>London, UK-Oct12 at 2:30AM</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12.3711C9.9315 12.3711 10.6875 13.1271 10.6875 14.0586C10.6875 14.9901 9.9315 15.7461 9 15.7461C8.0685 15.7461 7.3125 14.9901 7.3125 14.0586C7.3125 13.1271 8.0685 12.3711 9 12.3711ZM9 7.30859C9.9315 7.30859 10.6875 8.06459 10.6875 8.99609C10.6875 9.92759 9.9315 10.6836 9 10.6836C8.0685 10.6836 7.3125 9.92759 7.3125 8.99609C7.3125 8.06459 8.0685 7.30859 9 7.30859ZM9 2.24609C9.9315 2.24609 10.6875 3.00209 10.6875 3.93359C10.6875 4.86509 9.9315 5.62109 9 5.62109C8.0685 5.62109 7.3125 4.86509 7.3125 3.93359C7.3125 3.00209 8.0685 2.24609 9 2.24609Z"
                  fill="#3A3541"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

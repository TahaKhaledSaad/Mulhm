import { useState } from "react";
import Topbar from "../../../components/dashboard/topbar/Topbar";

import "./style.css";

export default function AddUser() {
  // ─── States ──────────────────────────────────────────────────────────────
  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showLoaction, setShowLoaction] = useState(false);
  const [showAllData, setShowAllData] = useState(false);

  // ─── Functions ───────────────────────────────────────────────────────────

  // ─── UseEffect ───────────────────────────────────────────────────────────

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="new-user">
      <Topbar title="Users/New User" />

      <div className="compelete-status">
        <div className="elem">
          {!showUserInfo && (
            <div className="checked-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4961 5.24951L7.87109 14.8745L3.49609 10.4995"
                  stroke="white"
                  strokeWidth="3.02229"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {showUserInfo && (
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11"
                r="10.5"
                fill="#C0CCDE"
                stroke="#C0CCDE"
              />
            </svg>
          )}
          <p>User Info</p>
        </div>

        <div className="elem">
          {!showLoaction && !showUserInfo && (
            <div className="checked-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4961 5.24951L7.87109 14.8745L3.49609 10.4995"
                  stroke="white"
                  strokeWidth="3.02229"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {(showLoaction || showUserInfo) && (
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11"
                r="10.5"
                fill="#C0CCDE"
                stroke="#C0CCDE"
              />
            </svg>
          )}
          <p>User Info</p>
        </div>

        <div className="elem">
          {!showAllData && !showUserInfo && !showLoaction && (
            <div className="checked-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4961 5.24951L7.87109 14.8745L3.49609 10.4995"
                  stroke="white"
                  strokeWidth="3.02229"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {(showAllData || showUserInfo || showLoaction) && (
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.5"
                cy="11"
                r="10.5"
                fill="#C0CCDE"
                stroke="#C0CCDE"
              />
            </svg>
          )}
          <p>User Info</p>
        </div>

        <div className="line"></div>
      </div>

      {showUserInfo && (
        <div className="user-info pb-5 mb-2">
          <p className="heading">About the New user</p>
          <p className="desc">Mandatory Information</p>

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
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="eg. 966 5887 4888" />
            </div>

            <div className="input-elem">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="eg. Team@gmail.com" />
            </div>

            <div className="input-elem">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="ma56kl90" />
            </div>

            <div className="input-elem">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="ma56kl90"
              />
            </div>
          </div>
          <button
            onClick={() => {
              setShowUserInfo(false);
              setShowLoaction(true);
              setShowAllData(false);
            }}
          >
            Next
          </button>
        </div>
      )}

      {showLoaction && (
        <div className="user-info pb-5 mb-5">
          <p className="heading">About the New user</p>
          <p className="desc">Mandatory Information</p>

          <div className="user-details">
            <div className="input-elem">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="eg. Riyadh" />
            </div>

            <div className="input-elem">
              <label htmlFor="neighbourhood">Neighbourhood</label>
              <input type="text" id="neighbourhood" placeholder="eg. olaya" />
            </div>

            <div className="input-elem">
              <label htmlFor="houseNumber">House Number</label>
              <input type="text" id="houseNumber" placeholder="eg. 34884" />
            </div>

            <div className="input-elem">
              <label htmlFor="floor">Floor</label>
              <input type="text" id="floor" placeholder="eg. 3" />
            </div>
          </div>
          <div className="input-elem mb-4">
            <label htmlFor="location">Set Location</label>
            <div style={{ width: "calc(100% - 40px)" }}>
              <iframe
                width="100%"
                height="200"
                style={{ border: 0 }}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Riyadh%20olaya%2034884+(Your%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
            </div>
          </div>
          <button
            onClick={() => {
              setShowUserInfo(false);
              setShowLoaction(false);
              setShowAllData(true);
            }}
          >
            Add
          </button>
        </div>
      )}

      {showAllData && (
        <div className="user-info pb-5 mb-4">
          <p className="heading">About the New user</p>
          <p className="desc">Mandatory Information</p>

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
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="eg. 966 5887 4888" />
            </div>

            <div className="input-elem">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="eg. Team@gmail.com" />
            </div>

            <div className="input-elem">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="ma56kl90" />
            </div>

            <div className="input-elem">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="ma56kl90"
              />
            </div>

            <div className="input-elem">
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="eg. Riyadh" />
            </div>

            <div className="input-elem">
              <label htmlFor="neighbourhood">Neighbourhood</label>
              <input type="text" id="neighbourhood" placeholder="eg. olaya" />
            </div>

            <div className="input-elem">
              <label htmlFor="houseNumber">House Number</label>
              <input type="text" id="houseNumber" placeholder="eg. 34884" />
            </div>

            <div className="input-elem">
              <label htmlFor="floor">Floor</label>
              <input type="text" id="floor" placeholder="eg. 3" />
            </div>
          </div>
          <button
            onClick={() => {
              setShowUserInfo(false);
              setShowLoaction(false);
              setShowAllData(false);
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

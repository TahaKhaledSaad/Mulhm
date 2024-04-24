import Topbar from "./../../components/dashboard/topbar/Topbar";
import "./chat.css";

import avatar from "./../../assets/avatar.png";
import search from "./../../assets/search.svg";
import pic from "./../../assets/pic.svg";

export default function Chat() {
  return (
    <div style={{ flexGrow: "999", marginRight: "20px", position: "relative" }}>
      <Topbar title="Chat" />

      <div className="mulhm-profile d-flex gap-2 align-items-center my-3">
        <img src={avatar} alt="mulhm" />
        <div>
          <p>Mulhem</p>
          <p>anita@commerce.com</p>
        </div>
      </div>

      <div className="d-flex gap-4">
        <div className="search-container">
          <input type="text" className="chat-search" placeholder="Search" />
          <img src={search} alt="search" className="search-icon" />
        </div>
        <div className="some-info">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="9" fill="#6FB07F" />
            </svg>
            <span>Home Repair Technician</span>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="9" fill="#345995" />
            </svg>
            <span>User</span>
          </p>
        </div>
      </div>

      <div className="d-flex gap-4 mb-3">
        {/* Details Chats */}
        <div className="users-chats">
          <div className="chats">
            {/* Elem */}
            <div className="chat-elem unreaded">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Taha Khaled</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Omar Redwan</p>
                    <p>Backend Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Mohammed Ali</p>
                    <p>Mobile Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Ahmed Khaled</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem unreaded">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Saad Khaled</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Adel Osama</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem unreaded">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Taha Khaled</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
            {/* Elem */}
            <div className="chat-elem unreaded">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={avatar} alt="mulhem" />
                  <div className="name-desc">
                    <p>Taha Khaled</p>
                    <p>Web Developer</p>
                  </div>
                </div>
                <p className="time">5m</p>
              </div>
              <p className="content">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* Chatting */}
        <div className="chatting">
          <div className="type-box">
            <input type="text" placeholder="Write a message" />
            <label htmlFor="uploadImg">
              <img src={pic} alt="mulhm" />
            </label>
            <input type="file" hidden id="uploadImg" />
          </div>
        </div>

        {/* --------------- */}
      </div>
    </div>
  );
}

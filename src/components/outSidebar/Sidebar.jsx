import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/logo.svg";
import avatar from "./../../assets/avatar.png";

import "./style.css";

export default function Sidebar() {
  // States
  const [openUsers, setOpenUsers] = useState(false);
  const [openService, setOpenService] = useState(false);

  return (
    <div className="sidebar m-0">
      <div>
        <img src={logo} alt="Mulhm" className="logo" />
        <p className="heading">Pages</p>

        {/* Links */}

        <NavLink to="/home/dashboard" className="link d-flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
              fill="#E8E8E8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
              fill="#C7C7C7"
            />
          </svg>
          <p>Dashboard</p>
        </NavLink>

        <div
          className={`users d-flex justify-content-between ${
            openUsers && !openService && "active"
          }`}
          onClick={() => {
            setOpenUsers(!openUsers);
            setOpenService(false);
          }}
        >
          <div className="d-flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.9488 14.54C8.49884 14.54 5.58789 15.1038 5.58789 17.2795C5.58789 19.4562 8.51765 20.0001 11.9488 20.0001C15.3988 20.0001 18.3098 19.4364 18.3098 17.2606C18.3098 15.084 15.38 14.54 11.9488 14.54Z"
                fill="#C7C7C7"
              />
              <path
                opacity="0.4"
                d="M11.9495 12.467C14.2856 12.467 16.1588 10.5831 16.1588 8.23351C16.1588 5.88306 14.2856 4 11.9495 4C9.61342 4 7.74023 5.88306 7.74023 8.23351C7.74023 10.5831 9.61342 12.467 11.9495 12.467Z"
                fill="#C7C7C7"
              />
              <path
                opacity="0.4"
                d="M21.0886 9.21972C21.693 6.84225 19.9209 4.70703 17.6645 4.70703C17.4192 4.70703 17.1846 4.73405 16.9554 4.77998C16.9249 4.78718 16.8909 4.80249 16.873 4.82951C16.8524 4.86373 16.8676 4.90966 16.89 4.93937C17.5678 5.89577 17.9573 7.06018 17.9573 8.31016C17.9573 9.5079 17.6001 10.6246 16.9733 11.5513C16.9088 11.6467 16.9661 11.7755 17.0798 11.7953C17.2374 11.8232 17.3986 11.8376 17.5634 11.8421C19.2064 11.8854 20.6811 10.8218 21.0886 9.21972Z"
                fill="#C7C7C7"
              />
              <path
                d="M22.8094 14.8165C22.5086 14.1717 21.7824 13.7295 20.6783 13.5125C20.1572 13.3846 18.747 13.2045 17.4352 13.2288C17.4155 13.2315 17.4048 13.245 17.403 13.254C17.4003 13.2666 17.4057 13.2882 17.4316 13.3017C18.0378 13.6034 20.3811 14.9155 20.0865 17.6829C20.074 17.8027 20.1698 17.9063 20.2888 17.8883C20.8655 17.8054 22.3492 17.4848 22.8094 16.4861C23.0637 15.9584 23.0637 15.3451 22.8094 14.8165Z"
                fill="#C7C7C7"
              />
              <path
                opacity="0.4"
                d="M7.04508 4.77998C6.81675 4.73315 6.58126 4.70703 6.33592 4.70703C4.0795 4.70703 2.3075 6.84225 2.91279 9.21972C3.31931 10.8218 4.79403 11.8854 6.4371 11.8421C6.60185 11.8376 6.76392 11.8223 6.92061 11.7953C7.03433 11.7755 7.09164 11.6467 7.02717 11.5513C6.40039 10.6237 6.04312 9.5079 6.04312 8.31016C6.04312 7.05928 6.43352 5.89486 7.11134 4.93937C7.13283 4.90966 7.14894 4.86373 7.12745 4.82951C7.10954 4.80159 7.07642 4.78718 7.04508 4.77998Z"
                fill="#C7C7C7"
              />
              <path
                d="M3.32156 13.5127C2.21752 13.7297 1.49225 14.1719 1.19139 14.8167C0.936203 15.3453 0.936203 15.9586 1.19139 16.4872C1.65163 17.4851 3.13531 17.8066 3.71195 17.8885C3.83104 17.9065 3.92595 17.8038 3.91342 17.6832C3.61883 14.9167 5.9621 13.6046 6.56918 13.3029C6.59425 13.2885 6.59962 13.2677 6.59694 13.2542C6.59515 13.2452 6.5853 13.2317 6.5656 13.2299C5.25294 13.2047 3.84358 13.3848 3.32156 13.5127Z"
                fill="#C7C7C7"
              />
            </svg>
            <p>Users</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{ transform: openUsers ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12Z"
              fill="#C7C7C7"
            />
          </svg>
        </div>

        {openUsers && (
          <div className="p-3 py-0">
            <NavLink to="/home/users/profile" className="link d-flex gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="11.9873" r="5" fill="#C7C7C7" />
              </svg>

              <p>Users Profile</p>
            </NavLink>
            <NavLink to="/home/users/hrt" className="link d-flex gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="11.9873" r="5" fill="#C7C7C7" />
              </svg>
              <p>H.R.T</p>
            </NavLink>
          </div>
        )}

        <div
          className={`users d-flex justify-content-between ${
            !openUsers && openService && "active"
          }`}
          onClick={() => {
            setOpenService(!openService);
            setOpenUsers(false);
          }}
        >
          <div className="d-flex gap-2">
            <svg
              className="service-list"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1667 2H7.83333C4.42889 2 2.5 3.92889 2.5 7.33333V16.6667C2.5 20.0622 4.42 22 7.83333 22H17.1667C20.5711 22 22.5 20.0622 22.5 16.6667V7.33333C22.5 3.92889 20.5711 2 17.1667 2Z"
                fill="#C7C7C7"
              />
              <path
                d="M15.8205 12.7083H13.2495V15.257C13.2495 15.6673 12.9139 16 12.5 16C12.0861 16 11.7505 15.6673 11.7505 15.257V12.7083H9.17955C8.79342 12.6687 8.5 12.3461 8.5 11.9613C8.5 11.5765 8.79342 11.2539 9.17955 11.2143H11.7424V8.67365C11.7824 8.29088 12.1078 8 12.496 8C12.8842 8 13.2095 8.29088 13.2495 8.67365V11.2143H15.8205C16.2066 11.2539 16.5 11.5765 16.5 11.9613C16.5 12.3461 16.2066 12.6687 15.8205 12.7083Z"
                fill="#fff"
              />
            </svg>
            <p>Services</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: openService ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5858 12L9.29289 16.2929C8.90237 16.6834 8.90237 17.3166 9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289C8.90237 6.68342 8.90237 7.31658 9.29289 7.70711L13.5858 12Z"
              fill="#C7C7C7"
            />
          </svg>
        </div>

        {openService && (
          <div className="p-3 py-0">
            <NavLink
              to="/home/service/service-list"
              className="link d-flex gap-2"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="11.9873" r="5" fill="#C7C7C7" />
              </svg>

              <p>Services List</p>
            </NavLink>
            <NavLink to="/home/service/calender" className="link d-flex gap-2">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="11.9873" r="5" fill="#C7C7C7" />
              </svg>
              <p>Calender</p>
            </NavLink>
          </div>
        )}

        <NavLink to="/home/chat" className="link d-flex gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M12.52 2C6.71 2 2.5 6.74 2.5 12C2.5 13.68 2.99 15.41 3.85 16.99C4.01 17.25 4.03 17.58 3.92 17.89L3.25 20.13C3.1 20.67 3.56 21.07 4.07 20.91L6.09 20.31C6.64 20.13 7.07 20.36 7.581 20.67C9.041 21.53 10.86 21.97 12.5 21.97C17.46 21.97 22.5 18.14 22.5 11.97C22.5 6.65 18.2 2 12.52 2Z"
              fill="#C7C7C7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4802 13.2901C11.7702 13.2801 11.2002 12.7101 11.2002 12.0001C11.2002 11.3001 11.7802 10.7201 12.4802 10.7301C13.1902 10.7301 13.7602 11.3001 13.7602 12.0101C13.7602 12.7101 13.1902 13.2901 12.4802 13.2901ZM7.86984 13.2901C7.16984 13.2901 6.58984 12.7101 6.58984 12.0101C6.58984 11.3001 7.15984 10.7301 7.86984 10.7301C8.57984 10.7301 9.14984 11.3001 9.14984 12.0101C9.14984 12.7101 8.57984 13.2801 7.86984 13.2901ZM15.81 12.0101C15.81 12.7101 16.38 13.2901 17.09 13.2901C17.8 13.2901 18.37 12.7101 18.37 12.0101C18.37 11.3001 17.8 10.7301 17.09 10.7301C16.38 10.7301 15.81 11.3001 15.81 12.0101Z"
              fill="#C7C7C7"
            />
          </svg>
          <p>Chat</p>
        </NavLink>

        <NavLink to="/home/notifications" className="link d-flex gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2695 11.6453C19.539 10.7923 19.2071 10.0531 19.2071 8.79716V8.37013C19.2071 6.73354 18.8304 5.67907 18.0115 4.62459C16.7493 2.98699 14.6244 2 12.5442 2H12.4558C10.4194 2 8.36106 2.94167 7.077 4.5128C6.21333 5.58842 5.79293 6.68822 5.79293 8.37013V8.79716C5.79293 10.0531 5.48284 10.7923 4.73049 11.6453C4.17691 12.2738 4 13.0815 4 13.9557C4 14.8309 4.28723 15.6598 4.86367 16.3336C5.61602 17.1413 6.67846 17.6569 7.76375 17.7466C9.33505 17.9258 10.9063 17.9933 12.5005 17.9933C14.0937 17.9933 15.665 17.8805 17.2372 17.7466C18.3215 17.6569 19.384 17.1413 20.1363 16.3336C20.7118 15.6598 21 14.8309 21 13.9557C21 13.0815 20.8231 12.2738 20.2695 11.6453Z"
              fill="#C7C7C7"
            />
            <path
              opacity="0.4"
              d="M14.5078 19.2285C14.0079 19.1217 10.9617 19.1217 10.4618 19.2285C10.0344 19.3272 9.57227 19.5568 9.57227 20.0604C9.59711 20.5408 9.87837 20.9648 10.268 21.2337L10.267 21.2347C10.7709 21.6275 11.3622 21.8773 11.9814 21.9669C12.3113 22.0122 12.6473 22.0102 12.9892 21.9669C13.6073 21.8773 14.1987 21.6275 14.7026 21.2347L14.7016 21.2337C15.0912 20.9648 15.3724 20.5408 15.3973 20.0604C15.3973 19.5568 14.9351 19.3272 14.5078 19.2285Z"
              fill="#C7C7C7"
            />
          </svg>
          <p>Notifications</p>
        </NavLink>

        <NavLink to="/home/payment" className="link d-flex gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.4964 8.37513H18.2618C16.2911 8.37859 14.6947 9.93514 14.6911 11.8566C14.6884 13.7823 16.2867 15.3458 18.2618 15.3484H22.5V15.6543C22.5 19.0136 20.4636 21 17.0173 21H7.98356C4.53644 21 2.5 19.0136 2.5 15.6543V8.33786C2.5 4.97862 4.53644 3 7.98356 3H17.0138C20.46 3 22.4964 4.97862 22.4964 8.33786V8.37513ZM7.23956 8.36733H12.8796H12.8831H12.8902C13.3124 8.36559 13.6538 8.03019 13.652 7.61765C13.6502 7.20598 13.3053 6.87318 12.8831 6.87491H7.23956C6.82 6.87664 6.47956 7.20858 6.47778 7.61852C6.476 8.03019 6.81733 8.36559 7.23956 8.36733Z"
              fill="#C7C7C7"
            />
            <path
              opacity="0.4"
              d="M16.5374 12.2966C16.7465 13.2478 17.5805 13.917 18.5326 13.8996H21.7825C22.1787 13.8996 22.5 13.5715 22.5 13.166V10.6344C22.4991 10.2297 22.1787 9.90077 21.7825 9.8999H18.4561C17.3731 9.90338 16.4983 10.8024 16.5 11.9102C16.5 12.0398 16.5128 12.1695 16.5374 12.2966Z"
              fill="#C7C7C7"
            />
            <circle cx="18.5" cy="11.8999" r="1" fill="#C7C7C7" />
          </svg>
          <p>Payment</p>
        </NavLink>

        <NavLink to="/home/coupons" className="link d-flex gap-2">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M21.75 13.4764C20.929 13.4764 20.261 12.8145 20.261 12.001C20.261 11.1865 20.929 10.5246 21.75 10.5246C21.949 10.5246 22.14 10.4463 22.28 10.3076C22.421 10.1679 22.5 9.97864 22.5 9.78146L22.499 7.10415C22.499 4.84102 20.64 3 18.356 3H6.644C4.36 3 2.501 4.84102 2.501 7.10415L2.5 9.86766C2.5 10.0648 2.579 10.2541 2.72 10.3938C2.86 10.5325 3.051 10.6108 3.25 10.6108C4.099 10.6108 4.739 11.2083 4.739 12.001C4.739 12.8145 4.071 13.4764 3.25 13.4764C2.836 13.4764 2.5 13.8093 2.5 14.2195V16.8949C2.5 19.158 4.358 21 6.643 21H18.357C20.642 21 22.5 19.158 22.5 16.8949V14.2195C22.5 13.8093 22.164 13.4764 21.75 13.4764Z"
              fill="#C7C7C7"
            />
            <path
              d="M15.9298 11.5887L14.7508 12.7367L15.0298 14.3597C15.0778 14.6407 14.9648 14.9177 14.7338 15.0837C14.5048 15.2517 14.2058 15.2727 13.9538 15.1387L12.4988 14.3737L11.0408 15.1397C10.9328 15.1967 10.8148 15.2267 10.6978 15.2267C10.5448 15.2267 10.3938 15.1787 10.2638 15.0847C10.0338 14.9177 9.92085 14.6407 9.96885 14.3597L10.2468 12.7367L9.06785 11.5887C8.86385 11.3907 8.79285 11.0997 8.88085 10.8287C8.96985 10.5587 9.19985 10.3667 9.48085 10.3267L11.1068 10.0897L11.8358 8.61268C11.9628 8.35868 12.2168 8.20068 12.4988 8.20068H12.5008C12.7838 8.20168 13.0378 8.35968 13.1628 8.61368L13.8918 10.0897L15.5208 10.3277C15.7988 10.3667 16.0288 10.5587 16.1168 10.8287C16.2058 11.0997 16.1348 11.3907 15.9298 11.5887Z"
              fill="#C7C7C7"
            />
          </svg>
          <p>Coupons</p>
        </NavLink>
      </div>

      {/* Profile */}
      <div className="profile">
        <img src={avatar} alt="Mulhm Profile Image" />
        <div>
          <p>Mulhm</p>
          <p>tahakhsaad55@gmail.com</p>
        </div>
        <Link to="/home/account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 9.62207C7.7245 9.62207 8.3125 10.2101 8.3125 10.9346C8.3125 11.6591 7.7245 12.2471 7 12.2471C6.2755 12.2471 5.6875 11.6591 5.6875 10.9346C5.6875 10.2101 6.2755 9.62207 7 9.62207ZM7 5.68457C7.7245 5.68457 8.3125 6.27257 8.3125 6.99707C8.3125 7.72157 7.7245 8.30957 7 8.30957C6.2755 8.30957 5.6875 7.72157 5.6875 6.99707C5.6875 6.27257 6.2755 5.68457 7 5.68457ZM7 1.74707C7.7245 1.74707 8.3125 2.33507 8.3125 3.05957C8.3125 3.78407 7.7245 4.37207 7 4.37207C6.2755 4.37207 5.6875 3.78407 5.6875 3.05957C5.6875 2.33507 6.2755 1.74707 7 1.74707Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

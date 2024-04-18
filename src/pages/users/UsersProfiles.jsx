import DataTable from "react-data-table-component";
import { useState } from "react";

import Topbar from "../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";
import msg from "./../../assets/msg.svg";
import edit from "./../../assets/edit.svg";
import del from "./../../assets/delete.svg";
import date from "./../../assets/date.svg";
import pen from "./../../assets/pen.svg";
import whiteMsg from "./../../assets/whiteMsg.svg";

import "./style.css";
import { Link } from "react-router-dom";

export default function UsersProfiles() {
  //
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  //
  const columns = [
    {
      name: "Name",
      cell: (row) => (
        <div className="name-cell d-flex gap-2 align-items-center">
          <img src={row.image} alt={row.name} className="profile-img" />
          <span className="defualt-cell">{row.name}</span>
        </div>
      ),
    },
    {
      name: "Total Orders",
      selector: (row) => <span className="defualt-td">{row.totalOrders}</span>,
    },
    {
      name: "Location",
      selector: (row) => <span className="defualt-td">{row.location}</span>,
    },
    {
      name: "Phone",
      selector: (row) => <span className="defualt-td">{row.phone}</span>,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="action-icons d-flex gap-3">
          <img src={msg} alt="Msg User" />
          <img
            src={edit}
            alt="Edit User"
            onClick={() => {
              setShowEdit(true);
              console.log(row.id);
            }}
          />
          <img
            src={del}
            alt="Delete User"
            onClick={() => {
              setShowDelete(true);
              console.log(row.id);
            }}
          />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      totalOrders: 5,
      location: "Lagos, Nigeria",
      phone: "+234 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 2,
      name: "Jane Doe",
      totalOrders: 10,
      location: "Nairobi, Kenya",
      phone: "+254 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 3,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 4,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 5,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 6,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 7,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 8,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 9,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 10,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 11,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
    {
      id: 12,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",
      action: "Edit",
      image: avatar,
    },
  ];

  return (
    <div className="user-profiles">
      <div className="header">
        <Topbar title="Users Profile" />
        <Link to="/users/add-user">
          <button>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7831 7.836H6.94706V12.936H5.03906V7.836H0.227063V6.06H5.03906V0.983999H6.94706V6.06H11.7831V7.836Z"
                fill="white"
              />
            </svg>
            <span>Create New</span>
          </button>
        </Link>
      </div>

      <div className="table-container">
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          // fixedHeader
        />
      </div>

      {showEdit && (
        <div className="editing">
          <div className="editing-container">
            <p className="heading">
              Let&apos;s Start with the basic informaion
            </p>

            <div className="profile">
              {/* 1 */}
              <div className="photo">
                <img src={avatar} alt="avatar" />
                <span>Profile Photo</span>
                <div>
                  <img src={pen} alt="pen" />
                </div>
              </div>
              {/* 2 */}
              <div className="house-shifting">
                <p className="heading">House Shifting</p>
                <p className="city">Jeddah</p>
                <div>
                  <img src={date} alt="date" />
                  <span>Tuesday, Jan 5, 2022</span>
                </div>
                <span className="label-calender">12am to 2pm</span>
              </div>
            </div>

            <hr />

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="input-elem">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>

              <div className="input-elem">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>

              <div className="input-elem">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="text"
                  id="dateOfBirth"
                  placeholder="Enter your date of birth"
                />
              </div>

              <div className="input-elem">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Enter your phone" />
              </div>

              <div className="input-elem">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter your postal code"
                />
              </div>
            </div>

            <div className="btns">
              <button className="button-action">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.99952 1.22266H7.22185C2.77767 1.22266 1 3.00038 1 7.44469V12.7779C1 17.2222 2.77767 18.9999 7.22185 18.9999H12.5549C16.999 18.9999 18.7767 17.2222 18.7767 12.7779V11.0001"
                    stroke="#EFEFEF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4799 2.12995L6.47582 9.13418C6.20917 9.40083 5.94252 9.92526 5.88919 10.3075L5.50699 12.9829C5.36478 13.9518 6.04918 14.6273 7.01801 14.494L9.69341 14.1118C10.0667 14.0585 10.5911 13.7918 10.8667 13.5252L17.8707 6.52092C19.0795 5.31207 19.6484 3.90767 17.8707 2.12995C16.093 0.352224 14.6887 0.921095 13.4799 2.12995Z"
                    stroke="#EFEFEF"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.4707 3.13477C13.0662 5.25914 14.7283 6.92132 16.8616 7.52574"
                    stroke="#EFEFEF"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Save editing</span>
              </button>

              <button className="button-action">
                <img src={whiteMsg} alt="" />
                <span>Chat</span>
              </button>

              <button
                className="button-action"
                onClick={() => {
                  setShowEdit(false);
                  setShowDelete(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M8.22222 6.20016e-09C8.96012 -4.83082e-05 9.67007 0.28227 10.2064 0.789042C10.7428 1.29581 11.0649 1.98862 11.1067 2.72533L11.1111 2.88889H15.7778C15.9467 2.88894 16.1093 2.95311 16.2327 3.06842C16.3561 3.18373 16.4312 3.3416 16.4427 3.51012C16.4542 3.67863 16.4013 3.84524 16.2947 3.97627C16.1881 4.10729 16.0358 4.19298 15.8684 4.216L15.7778 4.22222H15.0702L13.9324 15.7956C13.8754 16.3725 13.6152 16.9105 13.1982 17.3133C12.7812 17.7161 12.2346 17.9576 11.656 17.9947L11.4996 18H4.94489C4.36485 18 3.80373 17.7937 3.36178 17.418C2.91984 17.0424 2.62588 16.5218 2.53244 15.9493L2.512 15.7947L1.37333 4.22222H0.666667C0.505567 4.22222 0.349918 4.16387 0.228506 4.05798C0.107094 3.9521 0.0281318 3.80583 0.00622219 3.64622L0 3.55556C6.79369e-06 3.39446 0.058349 3.23881 0.164237 3.1174C0.270126 2.99598 0.416397 2.91702 0.576 2.89511L0.666667 2.88889H5.33333C5.33333 2.12271 5.6377 1.38791 6.17947 0.846136C6.72124 0.304364 7.45604 6.20016e-09 8.22222 6.20016e-09ZM13.7307 4.22222H2.71289L3.83911 15.664C3.86405 15.9193 3.97655 16.1581 4.15753 16.3399C4.33851 16.5217 4.57681 16.6353 4.832 16.6613L4.94489 16.6667H11.4996C12.0329 16.6667 12.4853 16.2889 12.5884 15.776L12.6062 15.664L13.7298 4.22222H13.7307ZM9.77778 6.66667C9.93888 6.66667 10.0945 6.72502 10.2159 6.8309C10.3373 6.93679 10.4163 7.08306 10.4382 7.24267L10.4444 7.33333V13.5556C10.4444 13.7245 10.3802 13.8871 10.2649 14.0105C10.1496 14.1339 9.99173 14.209 9.82322 14.2205C9.6547 14.232 9.4881 14.1791 9.35707 14.0725C9.22604 13.9659 9.14036 13.8136 9.11733 13.6462L9.11111 13.5556V7.33333C9.11111 7.15652 9.18135 6.98695 9.30637 6.86193C9.4314 6.73691 9.60097 6.66667 9.77778 6.66667ZM6.66667 6.66667C6.82777 6.66667 6.98342 6.72502 7.10483 6.8309C7.22624 6.93679 7.3052 7.08306 7.32711 7.24267L7.33333 7.33333V13.5556C7.33328 13.7245 7.26912 13.8871 7.1538 14.0105C7.03849 14.1339 6.88062 14.209 6.71211 14.2205C6.54359 14.232 6.37698 14.1791 6.24596 14.0725C6.11493 13.9659 6.02925 13.8136 6.00622 13.6462L6 13.5556V7.33333C6 7.15652 6.07024 6.98695 6.19526 6.86193C6.32029 6.73691 6.48986 6.66667 6.66667 6.66667ZM8.22222 1.33333C7.83183 1.33335 7.45572 1.48015 7.16854 1.7446C6.88136 2.00906 6.70412 2.37182 6.672 2.76089L6.66667 2.88889H9.77778C9.77778 2.47633 9.61389 2.08067 9.32217 1.78895C9.03044 1.49722 8.63478 1.33333 8.22222 1.33333Z"
                    fill="#EFEFEF"
                  />
                </svg>
                <span>Delete this user</span>
              </button>
            </div>

            <span className="hide-profile" onClick={() => setShowEdit(false)}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1015 1.32232C11.3944 1.02943 11.3944 0.554555 11.1015 0.261662C10.8086 -0.0312311 10.3337 -0.0312311 10.0408 0.261662L5.68109 4.6214L1.32135 0.261662C1.02845 -0.0312311 0.553579 -0.0312311 0.260686 0.261662C-0.0322077 0.554555 -0.0322077 1.02943 0.260686 1.32232L4.62043 5.68206L0.260686 10.0418C-0.0322077 10.3347 -0.0322077 10.8096 0.260686 11.1025C0.553579 11.3954 1.02845 11.3954 1.32135 11.1025L5.68109 6.74272L10.0408 11.1025C10.3337 11.3954 10.8086 11.3954 11.1015 11.1025C11.3944 10.8096 11.3944 10.3347 11.1015 10.0418L6.74175 5.68206L11.1015 1.32232Z"
                  fill="#191E3A"
                />
              </svg>
            </span>
          </div>
        </div>
      )}

      {showDelete && (
        <div className="delete-alert">
          <div className="delete-alert-container">
            <div className="photo">
              <img src={avatar} alt="avatar" />
              <span>Profile Photo</span>
            </div>

            <p className="heading">Important Notice:</p>

            <p className="desc">
              Deleting your user profile will permanently erase all associated
              data. This action is irreversible and cannot be undone. Please
              proceed with caution and ensure you have backed up any important
              information before confirming your decision.
            </p>

            <div className="btns">
              <button
                onClick={() => {
                  setShowDelete(false);
                }}
              >
                No, Keep it.
              </button>
              <button
                onClick={() => {
                  setShowDelete(false);
                }}
              >
                Yes, Delete it.
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

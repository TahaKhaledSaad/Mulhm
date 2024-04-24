import DataTable from "react-data-table-component";
import { Calendar } from "primereact/calendar";
import { useState } from "react";

import Topbar from "./../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";
import edit from "./../../assets/edit.svg";
import del from "./../../assets/delete.svg";
import graydateicon from "./../../assets/graydateicon.svg";

import "./style.css";

export default function Notifications() {
  //
  const [showNotification, setShowNotification] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState(null);
  //
  const columns = [
    {
      name: "Notification",
      cell: (row) => (
        <div className="name-cell d-flex gap-2 align-items-center">
          <span
            className="notification-color"
            style={{ backgroundColor: row.color }}
          ></span>
          <span className="defualt-cell">{row.notification}</span>
        </div>
      ),
    },
    {
      name: "Type",
      selector: (row) => <span className="defualt-td">{row.type}</span>,
    },
    {
      name: "Date",
      selector: (row) => <span className="defualt-td">{row.date}</span>,
    },
    {
      name: "End Date",
      selector: (row) => <span className="defualt-td">{row.endDate}</span>,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="action-icons d-flex gap-3">
          <img
            src={edit}
            alt="Edit User"
            onClick={() => {
              showNotification(true);
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
      notification: "Attention ho... miss out!",
      type: "Announcement ",
      endDate: "20/04/2022",
      color: "#345995",
      date: "20/04/2022",
    },
    {
      id: 2,
      notification: "Looking... us today!",
      type: "Discount",
      endDate: "20/04/2022",
      color: "#F18F01",
      date: "20/04/2022",
    },
    {
      id: 3,
      notification: "Is your... now",
      type: "Discount",
      endDate: "20/04/2022",
      color: "#F75555",
      date: "20/04/2022",
    },
    {
      id: 4,
      notification: "Home .... today!",
      type: "Announcement",
      endDate: "20/04/2022",
      color: "#6FB07F",
      date: "20/04/2022",
    },
    {
      id: 5,
      notification: "Attention ... estimate",
      type: "Discount",
      endDate: "20/04/2022",
      color: "#EFEFEF",
      date: "20/04/2022",
    },
  ];

  return (
    <div className="user-profiles">
      <div className="header">
        <Topbar title="Notification List" />

        <button onClick={() => setShowNotification(true)}>
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
          <span>Add New</span>
        </button>
      </div>

      <div className="table-container mb-4">
        <DataTable
          columns={columns}
          data={data}
          pagination
          highlightOnHover
          // fixedHeader
        />
      </div>

      {showNotification && (
        <div className="editing">
          <div className="editing-container">
            <p className="heading">Product Information</p>
            <p>Color</p>

            <div className="categories">
              <div
                className={`elem ${
                  selectedCategory === "Gray" ? "focused" : ""
                }`}
                onClick={() => setSelectedCategory("Gray")}
              >
                <span></span>
                <span>Gray</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Red" ? "focused" : ""
                }`}
                onClick={() => setSelectedCategory("Red")}
              >
                <span></span>
                <span>Red</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Green" ? "focused" : ""
                }`}
                onClick={() => setSelectedCategory("Green")}
              >
                <span></span>
                <span>Green</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Orange" ? "focused" : ""
                }`}
                onClick={() => setSelectedCategory("Orange")}
              >
                <span></span>
                <span>Orange</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Blue" ? "focused" : ""
                }`}
                onClick={() => setSelectedCategory("Blue")}
              >
                <span></span>
                <span>Blue</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="date">Date</label>
                <Calendar
                  id="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  style={{ width: "330px" }}
                />
                <img src={graydateicon} alt="mulhm" />
              </div>

              <div className="input-elem">
                <label htmlFor="cost">End Date</label>
                <Calendar
                  id="date"
                  placeholder="End Date"
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  style={{ width: "330px" }}
                />
                <img src={graydateicon} alt="mulhm" />
              </div>

              <div className="input-elem">
                <label htmlFor="type">Type </label>
                <select name="type" id="type" className="normal-input">
                  <option value="Announcement">Announcement</option>
                  <option value="Discount">Discount</option>
                </select>
              </div>
            </div>

            <div className="textarea-elem my-3">
              <label htmlFor="type">Notification Text </label>
              <textarea
                name="notificationText"
                id="notificationText"
                cols="30"
                rows="10"
                className="normal-input"
                placeholder="Write here "
              ></textarea>
            </div>

            <div className="btns">
              <button
                onClick={() => {
                  setShowNotification(false);
                }}
              >
                Cancel
              </button>

              <button>Add</button>
            </div>
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
              <button onClick={() => setShowDelete(false)}>No, Keep it.</button>
              <button onClick={() => setShowDelete(false)}>
                Yes, Delete it.
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

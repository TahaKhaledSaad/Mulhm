import DataTable from "react-data-table-component";
import { useState } from "react";

import Topbar from "./../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";
import edit from "./../../assets/edit.svg";
import del from "./../../assets/delete.svg";
import category1 from "./../../assets/category1.svg";
import category2 from "./../../assets/category2.svg";
import category3 from "./../../assets/category3.svg";
import category4 from "./../../assets/category4.svg";
import category5 from "./../../assets/category5.svg";
import category6 from "./../../assets/category6.svg";
import category7 from "./../../assets/category7.svg";
import category8 from "./../../assets/category8.svg";
import category9 from "./../../assets/category9.svg";

import "./style.css";

export default function Coupons() {
  //
  const [showNewService, setShowNewService] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      const updatedCategories = [...selectedCategories];
      updatedCategories.splice(index, 1);
      setSelectedCategories(updatedCategories);
    }
  };

  //
  const columns = [
    {
      name: "Coupon",
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
              setShowNewService(true);
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
        <Topbar title="Coupons List" />

        <button onClick={() => setShowNewService(true)}>
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

      {showNewService && (
        <div className="editing">
          <div className="editing-container">
            <p className="heading">Service Information</p>
            <p>Category</p>

            <div className="categories">
              <div
                className={`elem ${
                  selectedCategories.includes("Repairing") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Repairing")}
              >
                <img src={category6} alt="Category Image" />
                <span>Repairing</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Painting") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Painting")}
              >
                <img src={category7} alt="Category Image" />
                <span>Painting</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("AC") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("AC")}
              >
                <img src={category8} alt="Category Image" />
                <span>AC</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Electonics") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Electonics")}
              >
                <img src={category9} alt="Category Image" />
                <span>Electonics</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Shifting") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Shifting")}
              >
                <img src={category1} alt="Category Image" />
                <span>Shifting</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Appliance") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Appliance")}
              >
                <img src={category2} alt="Category Image" />
                <span>Appliance</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Plumbing") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Plumbing")}
              >
                <img src={category3} alt="Category Image" />
                <span>Plumbing</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Vehicle") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Vehicle")}
              >
                <img src={category4} alt="Category Image" />
                <span>Vehicle</span>
              </div>

              <div
                className={`elem ${
                  selectedCategories.includes("Other") ? "focused" : ""
                }`}
                onClick={() => toggleCategory("Other")}
              >
                <img src={category5} alt="Category Image" />
                <span>Other</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="code">Code </label>
                <input type="text" id="code" placeholder=". . . . ." />
              </div>
            </div>

            <div className="btns">
              <button
                onClick={() => {
                  setShowNewService(false);
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

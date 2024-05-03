import { useState } from "react";
import DataTable from "react-data-table-component";

import Topbar from "../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";

import "./style.css";
import { Link } from "react-router-dom";

export default function HRT() {
  //
  const [statusFilter, setStatusFilter] = useState("");

  const columns = [
    {
      name: "Name",
      cell: (row) => (
        <div className="name-cell d-flex gap-2 align-items-center">
          <img src={row.image} alt={row.name} className="profile-img" />
          <div>
            <span>{row.name}</span>
            <span className="text-muted d-block">{row.phone}</span>
          </div>
        </div>
      ),
    },
    {
      name: "Type",
      selector: (row) => <span className="defualt-td">{row.type}</span>,
    },
    {
      name: "Ordered Time",
      selector: (row) => <span className="defualt-td">{row.orderedType}</span>,
    },
    {
      name: "Start location",
      selector: (row) => (
        <span className="defualt-td">{row.startLocation}</span>
      ),
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={`status ${
            row.status === "Finish"
              ? "finish"
              : row.status === "In progress"
              ? "in-progress"
              : row.status === "Cancel"
              ? "cancel"
              : row.status === "Pending"
              ? "pending"
              : row.status === "Upcoming"
              ? "upcoming"
              : "pre-cancelled"
          }`}
        >
          {row.status}
        </span>
      ),
      filter:
        statusFilter === ""
          ? null
          : (rows, filterValue) =>
              rows.filter((row) =>
                row.status.toLowerCase().includes(filterValue.toLowerCase())
              ),
    },
  ];

  const handleFilterClick = (status) => {
    setStatusFilter(status);
  };

  const data = [
    {
      id: 1,
      name: "John Doe",
      totalOrders: 5,
      location: "Lagos, Nigeria",
      phone: "+234 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "In progress",
    },
    {
      id: 2,
      name: "Jane Doe",
      totalOrders: 10,
      location: "Nairobi, Kenya",
      phone: "+254 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 3,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Cancel",
    },
    {
      id: 4,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 5,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 6,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "In progress",
    },
    {
      id: 7,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "In progress",
    },
    {
      id: 8,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Cancel",
    },
    {
      id: 9,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 10,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 11,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Cancel",
    },
    {
      id: 12,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Finish",
    },
    {
      id: 13,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Pending",
    },
    {
      id: 14,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Upcoming",
    },
    {
      id: 15,
      name: "Mary Doe",
      totalOrders: 15,
      location: "Kampala, Uganda",
      phone: "+256 123 456 7890",

      image: avatar,
      type: "Repairing",
      orderedType: "04.12.2021 20:24",
      startLocation: "Al Munsiyah, Riyadh 13246",
      status: "Pending",
    },
  ];

  return (
    <div className="user-profiles">
      <div className="header">
        <Topbar title="Users/Workers" />
        <Link to="/home/users/add-user">
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

      <div className="table-container mb-4">
        <div className="d-flex justify-content-between mb-1">
          <div
            className="topbar-filter"
            onClick={() => handleFilterClick("Pending")}
          >
            <span className="topbar-status">
              Pending ({data.filter((item) => item.status === "Pending").length}
              )
            </span>
          </div>

          <div
            className="topbar-filter d-flex align-items-center gap-2"
            onClick={() => handleFilterClick("In progress")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5002 16.9998C10.2442 16.9998 9.98825 16.9018 9.79325 16.7068C9.40225 16.3158 9.40225 15.6838 9.79325 15.2928L13.0982 11.9878L9.91825 8.69476C9.53525 8.29676 9.54625 7.66376 9.94325 7.28076C10.3413 6.89776 10.9742 6.90876 11.3572 7.30476L15.2193 11.3048C15.5983 11.6978 15.5933 12.3208 15.2073 12.7068L11.2072 16.7068C11.0122 16.9018 10.7563 16.9998 10.5002 16.9998Z"
                fill="#345995"
              />
            </svg>
            <span className="topbar-status">
              In progress (
              {data.filter((item) => item.status === "In progress").length})
            </span>
          </div>

          <div
            className="topbar-filter d-flex align-items-center gap-2"
            onClick={() => handleFilterClick("Finish")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5002 16.9998C10.2442 16.9998 9.98825 16.9018 9.79325 16.7068C9.40225 16.3158 9.40225 15.6838 9.79325 15.2928L13.0982 11.9878L9.91825 8.69476C9.53525 8.29676 9.54625 7.66376 9.94325 7.28076C10.3413 6.89776 10.9742 6.90876 11.3572 7.30476L15.2193 11.3048C15.5983 11.6978 15.5933 12.3208 15.2073 12.7068L11.2072 16.7068C11.0122 16.9018 10.7563 16.9998 10.5002 16.9998Z"
                fill="#345995"
              />
            </svg>
            <span className="topbar-status">
              Completed (
              {data.filter((item) => item.status === "Finish").length})
            </span>
          </div>

          <div
            className="topbar-filter d-flex align-items-center gap-2"
            onClick={() => handleFilterClick("Upcoming")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5002 16.9998C10.2442 16.9998 9.98825 16.9018 9.79325 16.7068C9.40225 16.3158 9.40225 15.6838 9.79325 15.2928L13.0982 11.9878L9.91825 8.69476C9.53525 8.29676 9.54625 7.66376 9.94325 7.28076C10.3413 6.89776 10.9742 6.90876 11.3572 7.30476L15.2193 11.3048C15.5983 11.6978 15.5933 12.3208 15.2073 12.7068L11.2072 16.7068C11.0122 16.9018 10.7563 16.9998 10.5002 16.9998Z"
                fill="#345995"
              />
            </svg>
            <span className="topbar-status">
              Upcoming (
              {data.filter((item) => item.status === "Upcoming").length})
            </span>
          </div>

          <div
            className="topbar-filter d-flex align-items-center gap-2"
            onClick={() => handleFilterClick("Cancel")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5002 16.9998C10.2442 16.9998 9.98825 16.9018 9.79325 16.7068C9.40225 16.3158 9.40225 15.6838 9.79325 15.2928L13.0982 11.9878L9.91825 8.69476C9.53525 8.29676 9.54625 7.66376 9.94325 7.28076C10.3413 6.89776 10.9742 6.90876 11.3572 7.30476L15.2193 11.3048C15.5983 11.6978 15.5933 12.3208 15.2073 12.7068L11.2072 16.7068C11.0122 16.9018 10.7563 16.9998 10.5002 16.9998Z"
                fill="#345995"
              />
            </svg>
            <span className="topbar-status">
              Pre cancelled (
              {data.filter((item) => item.status === "Cancel").length})
            </span>
          </div>

          <div
            className="topbar-filter d-flex align-items-center gap-2"
            onClick={() => handleFilterClick("Cancelled by driver")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5002 16.9998C10.2442 16.9998 9.98825 16.9018 9.79325 16.7068C9.40225 16.3158 9.40225 15.6838 9.79325 15.2928L13.0982 11.9878L9.91825 8.69476C9.53525 8.29676 9.54625 7.66376 9.94325 7.28076C10.3413 6.89776 10.9742 6.90876 11.3572 7.30476L15.2193 11.3048C15.5983 11.6978 15.5933 12.3208 15.2073 12.7068L11.2072 16.7068C11.0122 16.9018 10.7563 16.9998 10.5002 16.9998Z"
                fill="#345995"
              />
            </svg>
            <span className="topbar-status">
              Cancelled by driver (
              {
                data.filter((item) => item.status === "Cancelled by driver")
                  .length
              }
              )
            </span>
          </div>
        </div>
        <hr />
        <DataTable
          columns={columns}
          data={
            statusFilter === ""
              ? data
              : data.filter((d) => d.status === statusFilter)
          }
          pagination
          highlightOnHover
          // fixedHeader
          onFilter={(e) => setStatusFilter(e.target.value)}
        />
      </div>
    </div>
  );
}

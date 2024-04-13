import DataTable from "react-data-table-component";

import Topbar from "../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";
import msg from "./../../assets/msg.svg";
import edit from "./../../assets/edit.svg";
import del from "./../../assets/delete.svg";

import "./style.css";

export default function UsersProfiles() {
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
          <img src={msg} alt="" onClick={() => row} />
          <img src={edit} alt="" />
          <img src={del} alt="" />
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
    </div>
  );
}

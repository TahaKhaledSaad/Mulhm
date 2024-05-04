import DataTable from "react-data-table-component";
import { useState } from "react";

import Topbar from "../../../components/dashboard/topbar/Topbar";

import avatar from "./../../../assets/avatar.png";
import edit from "./../../../assets/edit.svg";
import del from "./../../../assets/delete.svg";
import category1 from "./../../../assets/category1.svg";
import category2 from "./../../../assets/category2.svg";
import category3 from "./../../../assets/category3.svg";
import category4 from "./../../../assets/category4.svg";
import category5 from "./../../../assets/category5.svg";
import category6 from "./../../../assets/category6.svg";
import category7 from "./../../../assets/category7.svg";
import category8 from "./../../../assets/category8.svg";
import category9 from "./../../../assets/category9.svg";

import "./style.css";
import { Axios } from "../../../api/Axios";
import { SERVICE } from "../../../api/API";

export default function ServicesList() {
  //
  const [showNewService, setShowNewService] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //
  const columns = [
    {
      name: "Service",
      cell: (row) => (
        <div className="name-cell d-flex gap-2 align-items-center">
          <img src={row.image} alt={row.service} className="profile-img" />
          <span className="defualt-td">{row.service}</span>
        </div>
      ),
    },
    {
      name: "Category",
      selector: (row) => <span className="defualt-td">{row.category}</span>,
    },
    {
      name: "ID",
      selector: (row) => <span className="defualt-td">{row.catId}</span>,
    },
    {
      name: "Cost",
      selector: (row) => <span className="defualt-td">{row.cost}</span>,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="action-icons d-flex gap-3">
          <img src={edit} alt="Edit User" />
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
      service: "House Shifting",
      category: 5,
      catId: "Lagos, Nigeria",
      cost: "+234 123 456 7890",

      image: category1,
    },
    {
      id: 2,
      service: "Appliance kitchen",
      category: 10,
      catId: "Nairobi, Kenya",
      cost: "+254 123 456 7890",

      image: category2,
    },
    {
      id: 3,
      service: "Bathroom plumbing",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category3,
    },
    {
      id: 4,
      service: "Car repairing",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category4,
    },
    {
      id: 5,
      service: "Other",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category5,
    },
    {
      id: 6,
      service: "Sink",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category6,
    },
    {
      id: 7,
      service: "Room painting",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category7,
    },
    {
      id: 8,
      service: "Install A/C",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category8,
    },
    {
      id: 9,
      service: "Repairing TV",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category9,
    },
    {
      id: 10,
      service: "Repairing TV",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category9,
    },
    {
      id: 11,
      service: "Remove",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category9,
    },
    {
      id: 12,
      service: "Install TV",
      category: 15,
      catId: "Kampala, Uganda",
      cost: "+256 123 456 7890",

      image: category9,
    },
  ];

  // Function to handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const myData = {
    arabicName: "الأسم العربي",
    arabicDescription: "الوصف العربي",
    englishName: "English Name",
    englishDescription: "English Description",
    cost: 300,
    categoryId: 1,
  };

  console.log(myData);
  // console.log(selectedCategoryImgFile);

  //
  const sendData = () => {
    Axios.post(`/${SERVICE}`, myData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-profiles">
      <div className="header">
        <Topbar title="Service List" />

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
                  selectedCategory === "Repairing" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Repairing")}
              >
                <img src={category6} alt="Category Image" />
                <span>Repairing</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Painting" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Painting")}
              >
                <img src={category7} alt="Category Image" />
                <span>Painting</span>
              </div>

              <div
                className={`elem ${selectedCategory === "AC" ? "focused" : ""}`}
                onClick={() => handleCategorySelection("AC")}
              >
                <img src={category8} alt="Category Image" />
                <span>AC</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Electonics" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Electonics")}
              >
                <img src={category9} alt="Category Image" />
                <span>Electonics</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Shifting" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Shifting")}
              >
                <img src={category1} alt="Category Image" />
                <span>Shifting</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Appliance" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Appliance")}
              >
                <img src={category2} alt="Category Image" />
                <span>Appliance</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Plumbing" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Plumbing")}
              >
                <img src={category3} alt="Category Image" />
                <span>Plumbing</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Vehicle" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Vehicle")}
              >
                <img src={category4} alt="Category Image" />
                <span>Vehicle</span>
              </div>

              <div
                className={`elem ${
                  selectedCategory === "Other" ? "focused" : ""
                }`}
                onClick={() => handleCategorySelection("Other")}
              >
                <img src={category5} alt="Category Image" />
                <span>Other</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="serviceName">Service Name </label>
                <input
                  type="text"
                  id="serviceName"
                  placeholder="Installation ....."
                />
              </div>

              <div className="input-elem">
                <label htmlFor="cost">Cost</label>
                <input type="text" id="cost" placeholder="123 SAR" />
              </div>

              <div className="input-elem">
                <label htmlFor="desperation">Desperation </label>
                <input
                  type="text"
                  id="desperation "
                  placeholder="Enter your email"
                />
              </div>

              <div className="custom-input input-elem">
                <label htmlFor="policy">Installation Policy Information </label>
                <div className="d-flex gap-3 mt-3">
                  <input
                    type="checkbox"
                    id="policy "
                    placeholder="Enter your email"
                    style={{ width: "16px", height: "16px", background: "red" }}
                  />
                  <span>
                    By selecting this checkbox, you are indicating whether this
                    <br />
                    product has an install policy in place or not. This
                    information will <br />
                    help users understand whether professional installation is
                    <br /> necessary or if they can proceed with
                    self-installation.
                  </span>
                </div>
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

              <button onClick={sendData}>Add</button>
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

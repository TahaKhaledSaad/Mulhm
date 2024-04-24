import DataTable from "react-data-table-component";
import { useState } from "react";

import Topbar from "./../../components/dashboard/topbar/Topbar";

import avatar from "./../../assets/avatar.png";
import pdf from "./../../assets/pdf.svg";
import visa from "./../../assets/visa.png";
import paypal from "./../../assets/paypal.png";

import "./style.css";

export default function Payment() {
  //
  const [showEditPayment, setShowEditPayment] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  //
  const columns = [
    {
      name: "Billing",
      cell: (row) => (
        <div className="name-cell d-flex gap-2 align-items-center">
          <img src={pdf} alt="" className="pdf-img" />
          <span className="defualt-cell">{row.billing}</span>
        </div>
      ),
    },
    {
      name: "Billing Date",
      selector: (row) => <span className="defualt-td">{row.billingDate}</span>,
    },
    {
      name: "Amount",
      selector: (row) => <span className="defualt-td">{row.amount}</span>,
    },
    {
      name: "Users",
      selector: (row) => <span className="defualt-td">{row.users}</span>,
    },
    {
      name: "",
      cell: (row) => (
        <div className="action-icons d-flex gap-3 align-items-center py-4">
          <button className="download" onClick={() => console.log(row.id)}>
            Download
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            cursor={"pointer"}
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 15.1204C12.1385 15.1204 13.0625 16.0444 13.0625 17.1829C13.0625 18.3214 12.1385 19.2454 11 19.2454C9.8615 19.2454 8.9375 18.3214 8.9375 17.1829C8.9375 16.0444 9.8615 15.1204 11 15.1204ZM11 8.93286C12.1385 8.93286 13.0625 9.85686 13.0625 10.9954C13.0625 12.1339 12.1385 13.0579 11 13.0579C9.8615 13.0579 8.9375 12.1339 8.9375 10.9954C8.9375 9.85686 9.8615 8.93286 11 8.93286ZM11 2.74536C12.1385 2.74536 13.0625 3.66936 13.0625 4.80786C13.0625 5.94636 12.1385 6.87036 11 6.87036C9.8615 6.87036 8.9375 5.94636 8.9375 4.80786C8.9375 3.66936 9.8615 2.74536 11 2.74536Z"
              fill="black"
            />
          </svg>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      billing: "Attention ho... miss out!",
      billingDate: "Dec 23, 2022 ",
      amount: "SAR 12.00",
      users: "Taha Khaled",
    },
    {
      id: 2,
      billing: "Looking... us today!",
      billingDate: "Dec 23, 2022",
      amount: "SAR 12.00",
      users: "Ashton Cox",
    },
    {
      id: 3,
      billing: "Is your... now",
      billingDate: "Dec 23, 2022",
      amount: "SAR 12.00",
      users: "Taha Khaled",
    },
    {
      id: 4,
      billing: "Home .... today!",
      billingDate: "Dec 23, 2022",
      amount: "SAR 12.00",
      users: "Ashton Cox",
    },
    {
      id: 5,
      billing: "Attention ... estimate",
      billingDate: "Dec 23, 2022",
      amount: "SAR 12.00",
      users: "Taha Khaled",
    },
  ];

  return (
    <div className="user-profiles">
      <div className="header">
        <Topbar title="Billing" />
      </div>

      <div className="payment-info mb-3">
        <div className="payment-method">
          <p className="heading">Payment method</p>
          <p className="desc">Change how you pay for your plan.</p>
          <div className="payment-box">
            <div className="d-flex gap-3">
              <img src={visa} alt="mulhm" />
              <div>
                <p>Visa ending in 6789</p>
                <p>Expiry 01/2023</p>
              </div>
            </div>
            <button onClick={() => setShowEditPayment(true)}>Edit</button>
          </div>
        </div>

        <div className="payment-amount">
          <p className="heading">Your earning this month</p>
          <p className="amount">
            735.2 <span>SAR</span>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="vat">
              <span>Vat</span> <span>110.28</span> <span>SAR</span>
            </p>
            <p className="withdraw">Withdraw All Earnings</p>
          </div>
        </div>
      </div>

      <div className="table-container mb-4">
        <div className="billing-history mb-4 d-flex justify-content-between align-items-center">
          <div>
            <p className="heading">Billing history</p>
            <p className="desc">
              Download your previous plan receipts and usage details.
            </p>
          </div>
          <button className="download-all">Download All</button>
        </div>

        <hr />

        <DataTable
          columns={columns}
          data={data}
          highlightOnHover
          selectableRows="single"
          onRowClicked={(row) => {
            console.log("Taha", row.amount);
          }}
        />
      </div>

      {showEditPayment && (
        <div className="editing">
          <div className="editing-container">
            <p className="heading ">Payment Edit</p>
            <hr />
            <p className="heading mb-3">Payment method</p>

            <div className="categories">
              <div
                className={`payment-elem ${
                  selectedCategory === "Visa" ? "focused" : ""
                }`}
              >
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    onClick={() =>
                      selectedCategory === "Visa"
                        ? setSelectedCategory(null)
                        : setSelectedCategory("Visa")
                    }
                    checked={selectedCategory === "Visa"}
                  />
                  <section>
                    <p>347809</p>
                    <p className="d-flex justify-content-between">
                      <span>Visa</span> <span>Edit</span>
                    </p>
                  </section>
                </div>
                <img src={visa} alt="mulhm" height={60} />
              </div>

              <div
                className={`d-flex justify-content-between align-items-center payment-elem ${
                  selectedCategory === "Paypal" ? "focused" : ""
                }`}
              >
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    onClick={() =>
                      selectedCategory === "Paypal"
                        ? setSelectedCategory(null)
                        : setSelectedCategory("Paypal")
                    }
                    checked={selectedCategory === "Paypal"}
                  />
                  <section>
                    <p>347809</p>
                    <p className="d-flex justify-content-between">
                      <span>Visa</span> <span>Edit</span>
                    </p>
                  </section>
                </div>
                <img
                  src={paypal}
                  alt="mulhm"
                  style={{ margin: 0, width: "45px" }}
                />
              </div>

              <div className="payment-elem">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_39952)">
                    <path
                      d="M3.125 1.375C1.6082 1.375 0.375 2.6082 0.375 4.125V17.875C0.375 19.3918 1.6082 20.625 3.125 20.625H16.875C18.3918 20.625 19.625 19.3918 19.625 17.875V4.125C19.625 2.6082 18.3918 1.375 16.875 1.375H3.125ZM8.96875 14.7812V12.0312H6.21875C5.64727 12.0312 5.1875 11.5715 5.1875 11C5.1875 10.4285 5.64727 9.96875 6.21875 9.96875H8.96875V7.21875C8.96875 6.64727 9.42852 6.1875 10 6.1875C10.5715 6.1875 11.0312 6.64727 11.0312 7.21875V9.96875H13.7812C14.3527 9.96875 14.8125 10.4285 14.8125 11C14.8125 11.5715 14.3527 12.0312 13.7812 12.0312H11.0312V14.7812C11.0312 15.3527 10.5715 15.8125 10 15.8125C9.42852 15.8125 8.96875 15.3527 8.96875 14.7812Z"
                      fill="#345995"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_39952">
                      <rect
                        width="19.25"
                        height="22"
                        fill="white"
                        transform="translate(0.375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>New users</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="holderName">Card holder name</label>
                <input type="text" id="holderName" placeholder="John Walden" />
              </div>
            </div>

            <div className="profile-details my-3">
              <div className="input-elem">
                <label htmlFor="billingAddress">Billing address</label>
                <input type="text" id="billingAddress" placeholder="Germany" />
              </div>
            </div>

            <div className="profile-details">
              <div className="input-elem">
                <label htmlFor="zipCode">Zip code</label>
                <input type="text" id="zipCode" placeholder="6789123" />
              </div>
              <div className="input-elem">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="Berlain" />
              </div>
            </div>

            <div className="ivoice-checkbox d-flex gap-2 align-items-center m-0 mt-3">
              <input type="checkbox" name="invoice" id="invoice" />
              <label htmlFor="invoice">Invoice Address</label>
            </div>

            <div className="btns">
              {/* <button
                onClick={() => {
                  setShowEditPayment(false);
                }}
              >
                Cancel
              </button> */}

              <button className="w-100 default-btn">
                Withdraw <span>735.2 SAR</span>{" "}
              </button>
            </div>

            <span
              className="hide-profile"
              onClick={() => setShowEditPayment(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M0 12.5025L2.12175 14.625L9.003 7.62075L15.8783 14.625L18 12.5025L9.003 3.375L0 12.5025Z"
                  fill="#89868D"
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

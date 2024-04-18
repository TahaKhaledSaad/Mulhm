import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Topbar from "../../../components/dashboard/topbar/Topbar";
import "./calender.css";
import category1 from "./../../../assets/category1.svg";
import avatar from "./../../../assets/avatar.png";
import arrows from "./../../../assets/arrows.svg";
import download from "./../../../assets/download.svg";

export default function Calender() {
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const events = [
    {
      title: "House Shifting",
      start: "2024-04-05T08:00:00",
      end: "2024-04-05T23:59:59",
    },
    {
      title: "Appliance kitchen",
      start: "2024-04-20T00:00:00",
      end: "2024-04-20T23:59:59",
    },
    {
      title: "Painting Walls",
      start: "2024-04-25T00:00:00",
      end: "2024-04-25T23:59:59",
    },
    {
      title: "Installation cabin",
      start: "2024-04-10T00:00:00",
      end: "2024-04-10T23:59:59",
    },
    {
      title: "A/C not cooling",
      start: "2024-04-05T00:00:00",
      end: "2024-04-05T23:59:59",
    },
    {
      title: "Clean air conditioner",
      start: "2024-04-08T00:00:00",
      end: "2024-04-08T23:59:59",
    },
    {
      title: "AC/AV",
      start: "2024-04-28T00:00:00",
      end: "2024-04-28T23:59:59",
    },
  ];

  return (
    <div style={{ flexGrow: "999", marginRight: "20px", position: "relative" }}>
      <Topbar title="Calender" />

      <div className="d-flex gap-2">
        {/* Details Day */}
        <div className="details-day">
          <p className="heading">Details Day</p>
          <p className="desc">Don&#39;t miss scheduled events</p>
          <p className="month-events">January 2022</p>
          <div className="events">
            {/* Elem */}
            <div className="elem" onClick={() => setShowServiceDetails(true)}>
              <p className="heading">House Shifting</p>
              <p className="city">Jeddah</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#2DCCFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">Appliance kitchen </p>
              <p className="city">Riyadh</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#1877F2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">Painting Walls</p>
              <p className="city">Jeddah</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#65C234"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">Installat...cabin</p>
              <p className="city">Riyadh</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#8650DD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">A/C not cooling</p>
              <p className="city">Jeddah</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#FBBC05"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">Clean...conditioner</p>
              <p className="city">Jeddah</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#F75555"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>

            {/* Elem */}
            <div className="elem">
              <p className="heading">AC/AV</p>
              <p className="city">Jeddah</p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_917_12125)">
                    <path
                      d="M3.42857 1V2H1.71429C0.767857 2 0 2.67188 0 3.5V5H16V3.5C16 2.67188 15.2321 2 14.2857 2H12.5714V1C12.5714 0.446875 12.0607 0 11.4286 0C10.7964 0 10.2857 0.446875 10.2857 1V2H5.71429V1C5.71429 0.446875 5.20357 0 4.57143 0C3.93929 0 3.42857 0.446875 3.42857 1ZM16 6H0V14.5C0 15.3281 0.767857 16 1.71429 16H14.2857C15.2321 16 16 15.3281 16 14.5V6Z"
                      fill="#2DCCFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_917_12125">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Tuesday, Jan 5, 2022</span>
              </div>
              <span className="label-calender">12am to 2pm</span>
            </div>
          </div>
        </div>

        {/* Calender */}
        <div className="calender">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "title",
              center: "", // dayGridMonth,timeGridWeek,timeGridDay
              right: "prev,next", // today prev,next
            }}
            height={"100%"}
            events={events}
          />
        </div>

        {/* Service Details */}
        {showServiceDetails && (
          <div className="service-elem-details">
            <div className="service-elem-details-container">
              <p className="heading">Service details</p>

              <div className="desc">
                <div>
                  <p>Service no:</p>
                  <p>From:</p>
                  <p>Code:</p>
                </div>
                <div>
                  <p>EL-5414587</p>
                  <p>25 Dec, 2022</p>
                  <p>EL005</p>
                </div>
              </div>

              <div className="main-data">
                {/* Elem */}
                <div className="elem">
                  <p className="heading">Service Details</p>
                  <div className="elem-container">
                    <img src={category1} alt="mulhm" />
                    <div>
                      <p className="head">House Shifting</p>
                      <p className="cost">SAR 200</p>
                      <p className="case">Order was request 2 days ago</p>
                      <span className="order-status">In progress</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_39346)">
                        <path
                          d="M9 0C4.02975 0 0 4.02975 0 9C0 13.9703 4.02975 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02975 13.9703 0 9 0ZM9 13.6875C8.4825 13.6875 8.0625 13.2675 8.0625 12.75C8.0625 12.2325 8.4825 11.8125 9 11.8125C9.51825 11.8125 9.9375 12.2325 9.9375 12.75C9.9375 13.2675 9.51825 13.6875 9 13.6875ZM10.4708 9.2415C9.79275 9.97275 9.7605 10.377 9.7695 10.875H8.26575C8.2605 9.76875 8.28075 9.28125 9.339 8.274C9.76875 7.866 10.1077 7.54275 10.0605 6.90825C10.017 6.3045 9.513 5.98875 9.03675 5.98875C8.505 5.98875 7.88325 6.384 7.88325 7.4985H6.37575C6.37575 5.6985 7.4325 4.536 9.06825 4.536C9.84525 4.536 10.5247 4.79025 10.9808 5.25225C11.4082 5.68575 11.6295 6.28125 11.6213 6.97575C11.6093 8.013 10.9785 8.694 10.4708 9.2415Z"
                          fill="#89868D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_39346">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Elem */}
                <div className="elem">
                  <p className="heading">Billing Informaiton</p>
                  <div className="elem-content">
                    <p className="head">Ahmed Ali</p>
                    <div className="d-flex gap-3">
                      <div>
                        <p>Number:</p>
                        <p>Email Address:</p>
                        <p>VAT number:</p>
                      </div>
                      <div>
                        <p>+966 5647 588</p>
                        <p>Taha Khaled@burrito.com</p>
                        <p>FRB12345</p>
                      </div>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_39346)">
                        <path
                          d="M9 0C4.02975 0 0 4.02975 0 9C0 13.9703 4.02975 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02975 13.9703 0 9 0ZM9 13.6875C8.4825 13.6875 8.0625 13.2675 8.0625 12.75C8.0625 12.2325 8.4825 11.8125 9 11.8125C9.51825 11.8125 9.9375 12.2325 9.9375 12.75C9.9375 13.2675 9.51825 13.6875 9 13.6875ZM10.4708 9.2415C9.79275 9.97275 9.7605 10.377 9.7695 10.875H8.26575C8.2605 9.76875 8.28075 9.28125 9.339 8.274C9.76875 7.866 10.1077 7.54275 10.0605 6.90825C10.017 6.3045 9.513 5.98875 9.03675 5.98875C8.505 5.98875 7.88325 6.384 7.88325 7.4985H6.37575C6.37575 5.6985 7.4325 4.536 9.06825 4.536C9.84525 4.536 10.5247 4.79025 10.9808 5.25225C11.4082 5.68575 11.6295 6.28125 11.6213 6.97575C11.6093 8.013 10.9785 8.694 10.4708 9.2415Z"
                          fill="#89868D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_39346">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="secondary-data">
                <div className="elem">
                  <p className="heading">Payment Details</p>
                  <div className="elem-content">
                    <p>Payment Method</p>
                    <p>Cridt Card</p>
                    <p>Status</p>
                    <p>Paid</p>
                  </div>
                </div>

                <div className="elem">
                  <p className="heading">Order Summary</p>
                  <div className="elem-content2 d-flex gap-4">
                    <div>
                      <p>Service Price:</p>
                      <p>Promo:</p>
                      <p>Taxes:</p>
                      <p>Total:</p>
                    </div>
                    <div>
                      <p>SAR 200</p>
                      <p>SAR 0</p>
                      <p>SAR 0</p>
                      <p>SAR 200</p>
                    </div>
                  </div>
                </div>

                <div className="elem">
                  <p className="heading">Home Repair Technician</p>
                  <div className="elem-content3">
                    <img src={avatar} alt="mulhm" />
                    <p className="name">Name: Taha Khaled</p>
                    <p>
                      <img src={arrows} alt="mulhm" /> Hand the task over to
                      someone else
                    </p>
                  </div>
                </div>
              </div>
              <button>
                <img src={download} alt="" /> Invoice
              </button>

              <span className="hide-service-details" onClick={() => setShowServiceDetails(false)}>
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
                  fill="#F75555"
                />
              </svg>
            </span>
            </div>
          </div>
        )}

        {/* --------------- */}
      </div>
    </div>
  );
}

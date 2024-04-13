// Charts
import ImpressionBarChart from "../../charts/ImpressionBarChart";
import SalesLineChart from "../../charts/SalesLineChart";
import ActiveUsersBarChart from "../../charts/ActiveUsersBarChart";

// Images
import stats from "./../../../assets/stats.svg";
import users from "./../../../assets/users.svg";
import clicks from "./../../../assets/clicks.svg";
import sales from "./../../../assets/sales.svg";
import service from "./../../../assets/service.svg";
import appliance from "./../../../assets/appliance.svg";
import plumbing from "./../../../assets/plumbing.svg";
import repairing from "./../../../assets/repairing.svg";

// Styles
import "./style.css";

function ActiveUsers() {
  return (
    <>
      <div className="d-flex gap-5">
        <div>
          <div className="active-users">
            <p className="desc">Active users right now</p>

            <div className="active-stats d-flex align-items-center gap-2">
              <div>
                <p className="active-num">300</p>
                <div className="active-nums-desc">
                  <svg
                    width="37"
                    height="36"
                    viewBox="0 0 37 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="37" height="36" rx="8" fill="white" />
                    <path
                      d="M19.308 15C19.308 15 20.4495 9 16.8068 9H10.5V27H25.5V17.25C25.5 14.6858 21.5648 14.4412 19.308 15ZM22.5 23.25H13.5V22.5H22.5V23.25ZM22.5 21H13.5V20.25H22.5V21ZM22.5 18.75H13.5V18H22.5V18.75ZM19.926 9.05625C21.5775 9.93675 24.3795 12.7185 25.5 14.217C24.5355 13.542 22.467 12.9743 20.9318 13.3327C21.0983 12.2318 20.793 9.93225 19.926 9.05625Z"
                      fill="#345995"
                    />
                  </svg>
                  <p>
                    Page views per <br />
                    minute
                  </p>
                </div>
                <div className="stats-upgrade">
                  <img src={stats} alt="stats" />
                  <p>
                    Upgrade your payout <br /> method in setting
                  </p>
                </div>
              </div>

              <div className="stats-chart p-2">
                <ActiveUsersBarChart />
              </div>
            </div>

            <div className="stats-numbers">
              {/* Elem */}
              <div className="elem">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={users} alt="mulhm active users" className="m-0" />
                  <p>Users</p>
                </div>
                <p className="number mb-1">35K</p>
                <div className="line" style={{ backgroundColor: "#3459954d" }}>
                  <div
                    className="progress"
                    style={{ width: "75%", background: "#345995" }}
                  ></div>
                </div>
              </div>

              {/* Elem */}
              <div className="elem">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={clicks} alt="mulhm active users" className="m-0" />
                  <p>Clicks</p>
                </div>
                <p className="number mb-1">1m</p>
                <div className="line" style={{ backgroundColor: "#3459954d" }}>
                  <div
                    className="progress"
                    style={{ width: "75%", background: "#345995" }}
                  ></div>
                </div>
              </div>

              {/* Elem */}
              <div className="elem">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={sales} alt="mulhm active users" className="m-0" />
                  <p>Sales</p>
                </div>
                <p className="number mb-1">345$</p>
                <div className="line" style={{ backgroundColor: "#3459954d" }}>
                  <div
                    className="progress"
                    style={{ width: "75%", background: "#345995" }}
                  ></div>
                </div>
              </div>

              {/* Elem */}
              <div className="elem">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <img src={service} alt="mulhm active users" className="m-0" />
                  <p>Services</p>
                </div>
                <p className="number mb-1">
                  68 <span>order</span>
                </p>
                <div className="line" style={{ backgroundColor: "#3459954d" }}>
                  <div
                    className="progress"
                    style={{ width: "75%", background: "#345995" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="sales-service-chart">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p>Sales</p>
              <div className="d-flex align-items-center">
                <p className="d-flex gap-2 align-items-center m-0">
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="8" rx="4" fill="#F18F01" />
                  </svg>
                  <span>Service</span>
                </p>
                <p className="d-flex gap-2 align-items-center m-0">
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width="8" height="8" rx="4" fill="#345995" />
                  </svg>
                  <span>Sales</span>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <SalesLineChart />
            </div>
          </div>
        </div>

        <div className="small-cards">
          {/* Card */}
          <div className="month-earning card">
            <p className="desc">Your earning this month</p>
            <p className="heading">
              735.2<span>SAR</span>
            </p>
            <p className="second-desc">
              Update your payout <br /> method in Payment
            </p>
            <p className="withdraw">Withdraw All Eamings</p>
          </div>

          {/* Card */}
          <div className="most-request card">
            <p className="heading">Most Request</p>
            <div>
              <div className="elem d-flex align-items-center gap-3">
                <img src={appliance} alt="" />
                <div>
                  <p>Appliance</p>
                  <p>Kitchen</p>
                </div>
              </div>
              <div className="elem d-flex align-items-center gap-3 my-4">
                <img src={plumbing} alt="" />
                <div>
                  <p>Plumbing</p>
                  <p>Bathroom</p>
                </div>
              </div>
              <div className="elem d-flex align-items-center gap-3">
                <img src={repairing} alt="" />
                <div>
                  <p>Repairing</p>
                  <p>Skin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className=" card impression">
            <p className="heading mb-3">Impression</p>
            <ImpressionBarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default ActiveUsers;

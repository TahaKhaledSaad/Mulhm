import "./style.css";
import PropTypes from "prop-types";

export default function Topbar({ title }) {
  return (
    <div className="topbar">
      <p>{title}</p>
      <div className="search">
        <input type="text" placeholder="Search anything here..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <g clipPath="url(#clip0_699_10522)">
            <path
              d="M17.8568 16.2345L13.203 11.5807C14.0782 10.377 14.5958 8.8965 14.5958 7.2975C14.5958 3.27375 11.322 0 7.2975 0C3.27375 0 0 3.27375 0 7.2975C0 11.322 3.27375 14.595 7.2975 14.595C8.823 14.595 10.2397 14.1247 11.4128 13.3215L16.0912 18L17.8568 16.2345ZM2.1405 7.2975C2.1405 4.4535 4.45425 2.13975 7.29825 2.13975C10.1423 2.13975 12.456 4.4535 12.456 7.2975C12.456 10.1415 10.1423 12.4552 7.29825 12.4552C4.4535 12.4552 2.1405 10.1415 2.1405 7.2975Z"
              fill="#89868D"
            />
          </g>
          <defs>
            <clipPath id="clip0_699_10522">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
};

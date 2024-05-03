import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Important imports for the project
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

import "./main.css";
import { Store } from "./redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

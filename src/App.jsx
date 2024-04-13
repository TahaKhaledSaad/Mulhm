import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import Register from "./pages/auth/operations/Register";
import Login from "./pages/auth/operations/Login";
import ForgetPassword from "./pages/auth/operations/ForgetPassword";

// Dashboard
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import UsersProfiles from "./pages/users/usersProfiles/UsersProfiles";
import HRT from "./pages/users/hrt/HRT";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users">
              <Route index element={<UsersProfiles />} />
              <Route path="profile" element={<UsersProfiles />} />
              <Route path="hrt" element={<HRT />} />
            </Route>
            <Route path="service" element={<h3>Service</h3>} />
            <Route path="chat" element={<h3>Chat</h3>} />
            <Route path="notifications" element={<h3>Notifications</h3>} />
            <Route path="payment" element={<h3>Payment</h3>} />
            <Route path="coupons" element={<h3>Coupons</h3>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

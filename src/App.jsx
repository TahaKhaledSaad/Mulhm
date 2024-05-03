import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Pages
import Register from "./pages/auth/operations/Register";
import Login from "./pages/auth/operations/Login";
import ForgetPassword from "./pages/auth/operations/ForgetPassword";

// Dashboard
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import UsersProfiles from "./pages/users/UsersProfiles";
import HRT from "./pages/users/HRT";
import AddUser from "./pages/users/addUser/AddUser";
import ServicesList from "./pages/services/servicesList/ServicesList";
import Calender from "./pages/services/calender/Calender";
import Notifications from "./pages/notifications/Notifications";
import Payment from "./pages/payment/Payment";
import Coupons from "./pages/coupons/Coupons";
import Account from "./pages/account/Account";
import Chat from "./pages/chat/Chat";
import Work from "./redux/Work";
import RequireAuth from "./pages/auth/protecting/RequireAuth";
import RequireBack from "./pages/auth/protecting/RequireBack";

const App = () => {
  return (
    <div>
      <Work />
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route element={<RequireBack />}>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Route>

          {/* Dashboard Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users">
                <Route index element={<UsersProfiles />} />
                <Route path="profile" element={<UsersProfiles />} />
                <Route path="hrt" element={<HRT />} />
                <Route path="add-user" element={<AddUser />} />
              </Route>
              <Route path="service">
                <Route index element={<ServicesList />} />
                <Route path="service-list" element={<ServicesList />} />
                <Route path="calender" element={<Calender />} />
              </Route>
              <Route path="chat" element={<Chat />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="payment" element={<Payment />} />
              <Route path="coupons" element={<Coupons />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

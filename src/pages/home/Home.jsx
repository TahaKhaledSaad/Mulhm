import { Outlet } from "react-router-dom";
import Sidebar from "../../components/outSidebar/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <div className="d-flex gap-3">
      <Sidebar />
      <Outlet />
    </div>
  );
}

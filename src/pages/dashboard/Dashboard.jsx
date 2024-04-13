import DashContent from "../../components/dashboard/dashContent/DashContent";
import Topbar from "../../components/dashboard/topbar/Topbar";

export default function Dashboard() {
  return (
    <div>
      <Topbar title="Dashboard" />
      <DashContent />
    </div>
  );
}

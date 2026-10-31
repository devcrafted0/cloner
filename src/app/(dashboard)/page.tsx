import DashboardView from "@/features/dashboard/view/dashboard-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return <DashboardView />;
};

export default DashboardPage;

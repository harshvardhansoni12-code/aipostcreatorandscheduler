import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import ModelsSection from "./components/ModelsSection";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <ModelsSection />
        </main>
      </div>
    </div>
  );
}

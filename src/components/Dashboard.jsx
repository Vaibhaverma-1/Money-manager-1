import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import Menubar from "./Menubar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Card } from "@/components/ui/card"; // shadcn card

const Dashboard = ({ children, activeMenu }) => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-white dark:bg-green-950 text-green-900 dark:text-green-100 transition-colors">
      {/* Top Navbar */}
      <Menubar activeMenu={activeMenu} />

      {/* Main layout */}
      {user && (
        <div className="flex w-full">
          {/* Sidebar for larger screens */}
          <aside className="hidden lg:block w-64 bg-green-50 dark:bg-green-900 border-r border-green-200 dark:border-green-700">
            <Sidebar activeMenu={activeMenu} />
          </aside>

          {/* Main content */}
          <main className="flex-grow px-4 py-6 lg:px-8">
            <Card className="p-4 shadow-md border-green-100 dark:border-green-800 bg-white dark:bg-green-900 transition-all">
              {children}
            </Card>
          </main>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

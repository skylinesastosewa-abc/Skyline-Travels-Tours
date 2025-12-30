import React from "react";
import Sidebar from "./sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your workspace dashboard!</p>
      </div>
    </div>
  );
};

export default Dashboard;

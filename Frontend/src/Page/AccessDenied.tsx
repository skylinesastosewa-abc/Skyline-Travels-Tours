import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const AccessDenied: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-md">
        <Lock className="w-12 h-12 mx-auto text-red-500 mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to view this page.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;

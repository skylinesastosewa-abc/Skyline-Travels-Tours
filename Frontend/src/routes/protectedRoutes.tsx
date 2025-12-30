import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const adminToken = localStorage.getItem("adminToken");
  const staffToken = localStorage.getItem("staffToken");

  if (adminToken || staffToken) {
    return children;
  }

  return <Navigate to="/staff-login" replace />;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import AccessDenied from "../Page/AccessDenied";

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const adminToken = localStorage.getItem("adminToken");

   return adminToken ? children : <AccessDenied />;
};

export default AdminProtectedRoute;

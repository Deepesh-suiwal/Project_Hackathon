import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import { useAuth } from "./context/AdminProvider";

function AdminProtectedRoute({children}) {
  const { isAdminAuthenticated, adminFetchStatus, adminloading } =
    useAuth();

  useEffect(() => {
    adminFetchStatus();
  }, []);

  // console.log(isAuthenticated);

  if (adminloading) return <div>Loading...</div>;

  return isAdminAuthenticated ? children : <Navigate to="/adminlogin" replace />;
}

export default AdminProtectedRoute




import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./First";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./Admin/AdminLogin";
import AdminHome from "./Admin/AdminHome";

import UserProtectedRoute from "./pages/UserProtectedRoute";
import AdminProtectedRoute from "./Admin/AdminProtectedRoute";

import UserProvider from "./pages/context/UserProvider";
import AdminProvider from "./Admin/context/AdminProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    
    children: [
      {
        index: true,

        element: (
          <UserProtectedRoute>
            <Home />
          </UserProtectedRoute>
        ),
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/adminhome",
        element: (
          <AdminProtectedRoute>
            <AdminHome />
          </AdminProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AdminProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AdminProvider>
    </>
  );
}

export default App;

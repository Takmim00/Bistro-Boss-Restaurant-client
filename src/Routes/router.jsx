import { createBrowserRouter } from "react-router-dom";
import Cart from "../DashboardPage/Cart";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import Home from "../page/Home";
import Login from "../page/Login";
import Menu from "../page/Menu";
import Order from "../page/order/Order";
import Register from "../page/Register";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../DashboardPage/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "users",
        element:<AllUsers></AllUsers>
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Menu from "../page/Menu";
import Order from "../page/order/Order";
import Login from "../page/Login";
import Register from "../page/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../DashboardPage/Cart";



export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/register',
          element:<Register/>
        },
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  }
]);

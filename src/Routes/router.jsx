import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import Menu from "../page/Menu";

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
        }
    ]
  },
]);

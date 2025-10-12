import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import About from "../Component/About";
import Home from "../Component/Home";




export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component: Login,
      },
      {
        path:'/about',
        Component: About
      },
      {
        path: '/home',
        Component: Home
      }
    ]
  },
]);




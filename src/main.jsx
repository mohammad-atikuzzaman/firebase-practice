import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Accounts from "./pages/Accounts.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AuthContexComponent from "./AuthContex/AuthContexComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/accounts",
        element: <Accounts></Accounts>,
        children: [
          {
            index: true,
            element: <Register></Register>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContexComponent>
      <RouterProvider router={router} />
    </AuthContexComponent>
  </React.StrictMode>
);

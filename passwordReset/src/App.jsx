import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Logout from "./components/logout";
import ForgotPassword from "./components/forgetPassword";
import ChangePassword from "./components/changePassword";
import Error from "./components/error";

export const App = () => {
  const routes = [
    {
      path: "/",
      element: <Login />, // Correct lowercase 'element'
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/forgetPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/changePassword",
      element: <ChangePassword />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginForm } from "./PageLogin/LoginPage";
import './globals.css'
import { Dashboard } from "./Pages/dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
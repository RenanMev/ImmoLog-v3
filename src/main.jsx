import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./PageLogin/LoginPage";
import './globals.css'
import { Dashboard } from "./Pages/dashboard";
import { RegisterPage } from "./PageLogin/RegisterPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<RegisterPage />} path="/registerpage" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

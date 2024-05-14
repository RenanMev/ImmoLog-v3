import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components-pages/sidebar";
import { HeaderSidebar } from "./components-pages/header-sidebar";
import Imoveis from "./Imoveis";
import ImmobilierRegister from "./components-pages/Immobile/ImmobilierRegister";

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <HeaderSidebar />
      <Routes>
        <Route path="/" element={<Imoveis />} />
        {/* <Route path="/" element={<ImmobilierRegister />} /> */}
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </div>
  );
}

export default Dashboard

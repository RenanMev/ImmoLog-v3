// Arquivo Dashboard.js

import { Sidebar } from './components-pages/sidebar';
import { HeaderSidebar } from './components-pages/header-sidebar';
import { Outlet } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <HeaderSidebar />
      <Outlet />
    </div>
  );
}

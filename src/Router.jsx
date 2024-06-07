
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './Auth/LoginPage';
import { RegisterPage } from './Auth/RegisterPage';
import { Dashboard } from './Pages/DashBoardLayout/dashboard';
import { ImmobilierRegister } from './Pages/PageImmoRegister/ImmobilierRegister';
import ImmobileTable from './Pages/PageImmoTable/TableImmobilerList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}>
      </Route>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<ImmobileTable />} />
        <Route path="registerImmobiler" element={<ImmobilierRegister />} />
      </Route>
    </Routes>
  );
}

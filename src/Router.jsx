
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './PageLogin/LoginPage';
import { RegisterPage } from './PageLogin/RegisterPage';
import { Dashboard } from './Pages/dashboard';
import { ImmobilierRegister } from './Pages/components-pages/Immobile/ImmobilierRegister';
import Imoveis from './Pages/Imoveis';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}>
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Imoveis/>} />
        <Route path="registerImmobiler" element={<ImmobilierRegister />} />
      </Route>
    </Routes>
  );
}

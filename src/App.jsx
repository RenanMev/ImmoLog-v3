import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from '@/theme'; // Corrigido o caminho para o módulo de tema

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
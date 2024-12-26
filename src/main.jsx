import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import './style/fontstyle.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve tu aplicación con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);

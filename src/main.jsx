import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LandingPage from './pages/landingPage';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/tes' element={<App />} />
    </Routes>
  </BrowserRouter>,
);

// tes webhook

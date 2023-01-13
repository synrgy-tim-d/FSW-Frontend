import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import profile from './components/profile/profile'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/profil' element={<profile />} ></Route>
    </Routes>
  </BrowserRouter>
);

// tes webhook

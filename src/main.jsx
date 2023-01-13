import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SignIn from './components/sign_in/sign_in.jsx';
import SignUp from './components/sign_up/sign_up.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/default' element={<App />} />
    </Routes>
  </BrowserRouter>,
);

// tes webhook

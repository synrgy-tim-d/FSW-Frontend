import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Profile from './components/profile/profile'
import EditProfile from './components/profile/editprofile'
import Changepass from './components/profile/changepass'; 
import PopupModals from './components/profile/PopupModals'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/profil' element={<Profile />} ></Route>
      <Route path='/editprofil' element={<EditProfile />} ></Route>
      <Route path='/gantipass' element={<Changepass />} ></Route>
      <Route path='/modal' element={<PopupModals />} ></Route>
    </Routes>
  </BrowserRouter>
);

// tes webhook

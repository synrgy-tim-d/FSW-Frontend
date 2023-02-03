import React from 'react';
import ReactDOM from 'react-dom/client';
// import Profile from './components/profile/profile';
import ProfilePage from './pages/ProfilePage';
// import EditProfile from './components/profile/editprofile';
import EditprofilePage from './pages/EditprofilePage';
import Changepass from './components/profile/changepass';
import SignIn from './components/sign_in/SignIn.jsx';
import SignUp from './components/sign_up/SignUp.jsx';
import History from './components/history/history.jsx';
import HistoryPay from './components/history/historyPayment.jsx';
import HistoryCancel from './components/history/historyCancel.jsx';
import PayNow from './components/history/payNow';
import PayUpload from './components/history/payUpload';
import LandingPage from './pages/landingPage';
import Wishlistpage from './pages/Wishlistpage';
import Homepage from './pages/Homepage';
import Verif from './pages/verif';
import Success from './components/verif/success';
import Forget from './pages/forget';
import Rinciankos from './pages/Rinciankos.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/profil' element={<ProfilePage />} />
          <Route path='/editprofil' element={<EditprofilePage />} />
          <Route path='/gantipassword' element={<Changepass />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/history' element={<History />} />
          <Route path='/history/payment' element={<HistoryPay />} />
          <Route path='/history/cancellation' element={<HistoryCancel />} />
          <Route path='/history/booknow' element={<PayNow />} />
          <Route path='/history/booknow/receipt' element={<PayUpload />} />
          <Route path='/verif' element={<Verif />} />
          <Route path='/verif/success/:otp' element={<Success />} />
          <Route path='/forget/:otp' element={<Forget />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/homepage?city=:city' element={<Homepage />} />
          <Route path='/wishlist' element={<Wishlistpage />} />
          <Route path='/kos/:kosid/:roomid' element={<Rinciankos />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);

// tes webhook

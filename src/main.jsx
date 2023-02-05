import React from 'react';
import ReactDOM from 'react-dom/client';
// import Profile from './components/profile/profile';
import ProfilePage from './pages/ProfilePage';
// import EditProfile from './components/profile/editprofile';
import EditprofilePage from './pages/EditprofilePage';
import Changepass from './components/profile/changepass';
// import SignIn from './components/sign_in/SignIn.jsx';
// import SignUp from './components/sign_up/SignUp.jsx';
import { Login, Register } from './pages/authPage';
import { HistoryBooking, HistoryConfirmation, HistoryPayment, HistoryCancel, HistoryBookingPayNow, HistoryBookingPayUpload, HistoryBookingPaySuccess } from './pages/historyPage';
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
import Ownerprofile from './components/owner-profile/profile';
import EditOwnerProfile from './components/owner-profile/editprofile';
import ChangePassOwner from './components/owner-profile/changepass';
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
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/history' element={<HistoryBooking />} />
          <Route path='/history/confirmation' element={<HistoryConfirmation />} />
          <Route path='/history/payment' element={<HistoryPayment />} />
          <Route path='/history/cancellation' element={<HistoryCancel />} />
          <Route path='/history/booknow' element={<HistoryBookingPayNow />} />
          <Route path='/history/booknow/receipt' element={<HistoryBookingPayUpload />} />
          <Route path='/history/booknow/receipt/success' element={<HistoryBookingPaySuccess />} />
          <Route path='/verif' element={<Verif />} />
          <Route path='/verif/success/:otp' element={<Success />} />
          <Route path='/forget/:otp' element={<Forget />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/homepage?city=:city' element={<Homepage />} />
          <Route path='/wishlist' element={<Wishlistpage />} />
          <Route path='/kos/:kosid/:roomid' element={<Rinciankos />} />
          <Route path='/profilpemilik' element={<Ownerprofile />} />
          <Route path='/profilpemilik/editprofilowner' element={ <EditOwnerProfile /> } />
          <Route path='/profilpemilik/gantipasswordowner' element={ <ChangePassOwner /> } />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);

// tes webhook

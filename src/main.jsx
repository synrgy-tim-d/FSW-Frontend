import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePage from './pages/ProfilePage';
import EditprofilePage from './pages/EditprofilePage';
import Changepass from './components/profile/changepass';
import { Login, Register } from './pages/authPage';
import {
  HistoryBooking,
  HistoryConfirmation,
  HistoryPayment,
  HistoryCancel,
  HistoryBookingPayNow,
  HistoryBookingPayUpload,
  HistoryBookingPaySuccess,
} from './pages/historyPage';
import LandingPage from './pages/landingPage';
import Wishlistpage from './pages/Wishlistpage';
import Homepage from './pages/Homepage';
import Verif from './pages/verif';
import Success from './components/verif/success';
import Forget from './pages/forget';
import Rinciankos from './pages/Rinciankos.jsx';
import { OwnerHistoryPage, OwnerHistoryDetailPage } from './pages/ownerHistoryPage';
import { OwnerPropertyPage } from './pages/ownerPropertyPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Ownerprofile from './components/owner-profile/profile';
import EditOwnerProfile from './components/owner-profile/editprofile';
import ChangePassOwner from './components/owner-profile/changepass';
import OwnerFotokos from './components/owner-constants/OwnerFotokos';
import AddOwnerProfile from './components/owner/dataform/adddataprofile';
import OwnerDataKamar from './components/owner-constants/OwnerDataKamar';
import OwnerDataKos from './components/owner-constants/OwnerDataKos';
import OwnerFasilitasKos from './components/owner-constants/OwnerFasilitasKos';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path='/' element={<LandingPage />} />

          {/* Sign In & Sign Up */}
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />

          {/* Profile Page */}
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/profile/editprofile' element={<EditprofilePage />} />
          <Route path='/profile/changepassword' element={<Changepass />} />

          {/* History */}
          <Route path='/history' element={<HistoryBooking />} />
          <Route path='/history/confirmation' element={<HistoryConfirmation />} />
          <Route path='/history/payment' element={<HistoryPayment />} />
          <Route path='/history/cancellation' element={<HistoryCancel />} />
          <Route path='/history/booknow/:bookid' element={<HistoryBookingPayNow />} />
          <Route path='/history/booknow/receipt/:bookid' element={<HistoryBookingPayUpload />} />
          <Route path='/history/booknow/receipt/success' element={<HistoryBookingPaySuccess />} />

          {/* Verification & Forget Password */}
          <Route path='/verif' element={<Verif />} />
          <Route path='/verif/success/:otp' element={<Success />} />
          <Route path='/forget/:otp' element={<Forget />} />

          {/* Page Cari Kos & Detail Kos */}
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/homepage?city=:city' element={<Homepage />} />
          <Route path='/kos/:kosid/:roomid' element={<Rinciankos />} />

          {/* Wishlist Page */}
          <Route path='/wishlist' element={<Wishlistpage />} />

          {/* ------------------**** HERE GOES THE OWNER PAGE ****------------------ */}

          {/* Owner Form Data */}
          <Route path='/owner/formdata' element={<AddOwnerProfile />} />

          {/* Owner Kost Data */}
          <Route path='/owner/kostdata' element={<OwnerDataKos />} />

          {/* Owner About Kost */}
          <Route path='owner/kostfacility' element={<OwnerFasilitasKos />} />

          {/* Owner About Kost */}
          <Route path='owner/kostphotos' element={<OwnerFotokos />} />

          {/* Owner About Kost */}
          <Route path='owner/roomdetails' element={<OwnerDataKamar />} />

          {/* Owner Property */}
          <Route path='/owner/property' element={<OwnerPropertyPage />} />

          {/* Owner History */}
          <Route path='/owner/history' element={<OwnerHistoryPage />} />
          <Route path='/owner/history/detail' element={<OwnerHistoryDetailPage />} />

          {/* Owner Profile */}
          <Route path='/ownerprofile' element={<Ownerprofile />} />
          <Route path='/ownerprofile/editownerprofile' element={<EditOwnerProfile />} />
          <Route path='/ownerprofile/changepassword' element={<ChangePassOwner />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>,
);

// tes webhook

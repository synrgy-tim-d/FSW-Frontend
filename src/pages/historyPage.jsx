import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import BookingHistory from '../components/history/booking';
import ConfirmationHistory from '../components/history/confirmation';
import PaymentHistory from '../components/history/payment';
import CancellationHistory from '../components/history/cancellation';
import PayNowHistory from '../components/history/payNow';
import PayUploadHistory from '../components/history/payUpload';
import PaySuccessHistory from '../components/history/paySuccess';

export const HistoryBooking = () => {
    return (
        <div>
            <Navbar />
            <BookingHistory />
            <Footer />
        </div>
    );
};

export const HistoryConfirmation = () => {
    return (
        <div>
            <Navbar />
            <ConfirmationHistory />
            <Footer />
        </div>
    );
};

export const HistoryPayment = () => {
    return (
        <div>
            <Navbar />
            <PaymentHistory />
            <Footer />
        </div>
    );
};

export const HistoryCancel = () => {
    return (
        <div>
            <Navbar />
            <CancellationHistory />
            <Footer />
        </div>
    );
};

export const HistoryBookingPayNow = () => {
    return (
        <div>
            <Navbar />
            <PayNowHistory />
            <Footer />
        </div>
    );
};

export const HistoryBookingPayUpload = () => {
    return (
        <div>
            <Navbar />
            <PayUploadHistory />
            <Footer />
        </div>
    );
};

export const HistoryBookingPaySuccess = () => {
    return (
        <div>
            <Navbar />
            <PaySuccessHistory />
            <Footer />
        </div>
    );
};
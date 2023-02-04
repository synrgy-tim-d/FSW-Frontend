import Footer from "../components/footer/footer";
import SignIn from "../components/sign_in/SignIn";
import SignUp from "../components/sign_up/SignUp";

export const Login = () => {
    return (
        <div>
            <SignIn />
            <Footer />
        </div>
    );
};

export const Register = () => {
    return (
        <div>
            <SignUp />
            <Footer />
        </div>
    );
};
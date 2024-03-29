import { useState } from "react";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { validateEmail, forgotPassword } from "../../redux/features/auth/authService";


const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");


  const forgotPassHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const InitialValue = {
      email,
    };

    await forgotPassword(InitialValue);
    setEmail("");
  };

  return (
    <div className="forgotpassword-screen">
      <form
        onSubmit={forgotPassHandler}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title">Forgot Password</h3>
        {/* {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>} */}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button>
        <div className='btn btn-dark w-100 py-3'>
          <p>
            <Link to="/login">- Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../services/authService";
import "./ResetPassword.css";

const initialState = {
  password: "",
  newPassword: "",
};

const ResetPasswordScreen = ({ match }) => {

  const [formData, setformData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      confirmPassword,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };


  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  // const resetPasswordHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   if (password !== confirmPassword) {
  //     setPassword("");
  //     setConfirmPassword("");
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //     return setError("Passwords don't match");
  //   }

  //   try {
  //     const { data } = await axios.put(
  //       `/api/auth/passwordreset/${match.params.resetToken}`,
  //       {
  //         password,
  //       },
  //       config
  //     );

  //     console.log(data);
  //     setSuccess(data.data);
  //   } catch (error) {
  //     setError(error.response.data.error);
  //     setTimeout(() => {
  //       setError("");
  //     }, 5000);
  //   }
  // };

  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={resetPasswordHandler}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Forgot Password</h3>
        {/* {error && <span className="error-message">{error} </span>}
        {success && (
          <span className="success-message">
            {success} <Link to="/login">Login</Link>
          </span>
        )} */}
        <span className="success-message">
           <Link to="/login">Login</Link>
        </span>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
        <hr></hr>
        <button type="submit" className="btn btn-dark">
          <Link to="/login"> Login</Link>
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;

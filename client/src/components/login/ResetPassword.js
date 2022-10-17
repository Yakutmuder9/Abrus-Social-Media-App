import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../redux/features/auth/authService";
import "./ResetPassword.css";

const initialState = {
  password: "",
  password2: "",
};


const ResetPasswordScreen = () => {
  const navigate = useNavigate()
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;

  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    
    e.preventDefault();
  
    // if (password.length > 5) {
    //   return toast.error("Passwords must be up to 6 characters");
    // }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken);
      if(data) {
        navigate('/login')
      toast.success(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="resetpassword-screen">
      <form
        onSubmit={reset}
        className="resetpassword-screen__form"
      >
        <h3 className="resetpassword-screen__title">Reset Password</h3>

       
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm New Password:</label>
          <input
            type="password"
            required
            name="password2"
            id="confirmpassword"
            value={password2}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
        <hr></hr>
        <button type="submit" className="btn btn-dark">
          <Link to="/login"  className="btn btn-dark py-1"> Login</Link>
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordScreen;

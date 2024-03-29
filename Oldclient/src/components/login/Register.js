import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Register.css'
import { toast } from "react-toastify";
import { SET_LOGIN, SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { registerUser, validateEmail } from "../../redux/features/auth/authService";
import Loader from "../loading/Loading";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
  dateOfBirth: "",
  gender: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { firstName, lastName, email, password, password2, dateOfBirth, gender } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      gender
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      if (data) {
        dispatch(SET_LOGIN(true));
        dispatch(SET_NAME(data.firstName));
        dispatch(SET_USER(data));
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        navigate("/login");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (

    <div className="col-md-12 login-screen">
      {isLoading && <Loader />}
      <div className="card signup-max-width"> <div className="row gy-5">
        <div className="login-form col-12 col-md-6 bg-light p-4">
          <div className=''>
            <h2>Register</h2>

            <form onSubmit={register}>
              <div>
                <div className="form-group">
                  <label htmlFor="firstName">first name</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange} className="form-control" />

                  <label htmlFor="lastName">Last name</label>
                  <input name="lastName" type="text"

                    required value={lastName} onChange={handleInputChange} className="form-control" />

                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input

                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Comfirm Password</label>
                  <input

                    type="password"
                    required
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Birth Date</label>
                  <input
                    name="dateOfBirth"
                    type="dateOfBirth"
                    value={dateOfBirth}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <input
                    name="gender"
                    type="gender"
                    value={gender}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            </form>
          </div>

        </div>
        <div className="login-txt col-12 col-md-6 ps-5">
          <div className='' >
            <h1 className='text-primary'>Wina-Social-app</h1>
            <h4>Share your feeling with friends and the world through Wina-app</h4>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;




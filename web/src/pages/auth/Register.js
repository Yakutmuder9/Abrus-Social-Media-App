import { useState } from "react";
import "../../styles/components/Register.css";
import { toast } from "react-toastify";
import Loader from "../../components/loading/Loading";

const initialState = {
  userFullName: "",
  email: "",
  password: "",
  password2: "",
  dateOfBirth: "",
  gender: "",
};

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { userFullName, email, password, password2, dateOfBirth, gender } =
    formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    // if (!firstName || !lastName || !email || !password || !dateOfBirth || !gender) {
    //   return toast.error("All fields are required");
    // }
    // if (password.length < 6) {
    //   return toast.error("Passwords must be up to 6 characters");
    // }
    // if (!validateEmail(email)) {
    //   return toast.error("Please enter a valid email");
    // }
    // if (password !== password2) {
    //   return toast.error("Passwords do not match");
    // }

    const userData = {
      userFullName,
      email,
      password,
      password2,
      dateOfBirth,
      gender,
    };
    setIsLoading(true);
  };

  return (
    <div className="col-md-12 login-screen">
      {isLoading && <Loader />}
      {/* <div className="card signup-max-width">
        <div className="row gy-5">
          <div className="login-txt col-12 col-md-6 ps-5">
            <div className="">
              <h1 className="text-primary"><strong>Abrus</strong> </h1>
              <h4>
                Share your feeling with friends and the world through Abrus-app
              </h4>
            </div>
          </div>
          <div className="login-form col-12 col-md-6 bg-light p-4">
            <div className="">
              <h2>Register</h2>

              <form onSubmit={register}>
                <div>
                  <div className="form-group">
                    <label htmlFor="lastName">User Full Name</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      value={userFullName}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
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
                    <label htmlFor="dateOfBirth">Date Of Birth</label>
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
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            CodingLab
          </a>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Product
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
          <button className="button" id="form-open">
            Login
          </button>
        </nav>
      </header>

      <section className="home">
        <div className="form_container">
          <i className="uil uil-times form_close"></i>

          <div className="form login_form">
            <form action="#">
              <h2>Login</h2>
              <div className="input_box">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <div className="option_field">
                <span className="checkbox">
                  <input type="checkbox" id="check" />
                  <label for="check">Remember me</label>
                </span>
                <a href="#" className="forgot_pw">
                  Forgot password?
                </a>
              </div>
              <button className="button">Login Now</button>
              <div className="login_signup">
                Don't have an account?{" "}
                <a href="#" id="signup">
                  Signup
                </a>
              </div>
            </form>
          </div>

          <div className="form signup_form">
            <form action="#">
              <h2>Signup</h2>
              <div className="input_box">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope-alt email"></i>
              </div>
              <div className="input_box">
                <input type="password" placeholder="Create password" required />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <div className="input_box">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
                <i className="uil uil-lock password"></i>
                <i className="uil uil-eye-slash pw_hide"></i>
              </div>
              <button className="button">Signup Now</button>
              <div className="login_signup">
                Already have an account?{" "}
                <a href="#" id="login">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

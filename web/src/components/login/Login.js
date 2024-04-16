import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApiSlice";
import Loader from "../loading/Loading";
import { Hand } from "../../assets/index";

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // handle submmit
  const onSubmmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ email, password }).unwrap();

      dispatch(setCredentials({ accessToken }));
      setEmail("");
      setPassword("");
      
      navigate("/home");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePwdChange = (e) => setPassword(e.target.value);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <Loader color={"#FFF"} />;

  return (
    <div className="login-screen-page">
      {isLoading && <Loader />}

      <div className="row bg-dark py-3 px-2">
        <div className="login-txt col-12 col-md-6 text-center ">
          <div className="">
            <h1 className="text-light ">
              <span style={{ color: "#E5FC54", fontSize: "48px" }}>Abrus</span>{" "}
              <i>Social Media</i>
            </h1>

            <p className="mb-5 text-light text-break">
              Share your feeling with friends and the world through abrus app
            </p>
            <img
              src={Hand}
              style={{ height: "auto", width: "100%", marginLeft: "-20px" }}
              className="d-none d-md-block"
            />
          </div>
        </div>

        <div className="login-form col-12 col-md-6  p-4 shadow-lg ">
          <div className="login-form-formik">
            <h2 className="text-center my-3 fw-bold text-secondary">
              Login Here
            </h2>
            <p
              ref={errRef}
              className={errClass + "alert alert-danger"}
              role="alert"
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <br />
            <br />

            <form onSubmit={onSubmmitHandler} className="login-form-formik">
              <div className="email">
                <label htmlFor="email">Email Address</label>
                <div className="sec-2">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Username@example.com"
                    ref={emailRef}
                    value={email}
                    onChange={handleEmail}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <br />
              <div className="password mb-2">
                <label htmlFor="password">Password</label>
                <div className="sec-2">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input
                    className="pas text-primary"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="············"
                    onChange={handlePwdChange}
                    value={password}
                    autoComplete="off"
                  />
                  <ion-icon className="show-hide" name="eye-outline"></ion-icon>
                </div>
              </div>
              <div className="d-flex justify-content-between px-2">
                <a type="submit" className="text-decoration-none">
                  Forget password?<hr></hr>
                </a>

                <Link to="/register" className="text-decoration-none">
                  Create new account
                </Link>
              </div>

              <button
                type="submit"
                className="w-100 py-2 px-3 mb-3 btn btn-dark mt-3"
                style={{ color: "#E5FC54" }}
                disabled={isLoading}
              >
                {isLoading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

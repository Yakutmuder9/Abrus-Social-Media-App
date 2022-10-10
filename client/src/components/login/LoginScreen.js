import { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/features/auth";
import { clearMessage } from "../../redux/features/message";

const LoginScreen = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        
        navigate("/");
        // window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-screen">
      <div className=" mb-5 " id='login-max-width'>
        <div className="row gy-5">
          <div className="login-txt col-12 col-md-6">
            <div className='' >
              <h1 className='text-success'>Wina-Social-app</h1>
              <h4>Share your feeling with friends and the world through Wina-app</h4>
            </div>
          </div>
          <div className="login-form col-12 col-md-6 bg-light rounded p-4 shadow-lg ">
            <div className='
                className="login-form-formik"'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
                className="login-form-formik"
              >
                <Form>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter email here"
                    className="w-100 py-2 px-3 mb-3"
                  />
                  <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
                  <Field
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="w-100 py-2 px-3 mb-3" />
                  <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
                  <button type="submit"
                    className="w-100 py-2 px-3 mb-3 btn btn-primary" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span></button>
                  <a type="submit"
                    className="w-100 py-2 px-3 mb-3 btn text-dark">Forget password?<hr></hr></a>

                  <Link to="/register"
                    className="w-100 py-2 px-3 mb-3 btn btn-success" >Create new account</Link>
                </Form>
              </Formik>
              <p></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginScreen;







// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link , useNavigate} from "react-router-dom";
// import "./LoginScreen.css";

// const LoginScreen = () => {
//   let navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("authToken")) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const loginHandler = async (e) => {
//     e.preventDefault();

//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const { data } = await axios.post(
//         "/api/auth/login",
//         { email, password },
//         config
//       );

//       localStorage.setItem("authToken", data.token);

//       navigate("/");
//     } catch (error) {
//       setError(error.response.data.error);
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };

//   return (
//     <div className="login-screen">
//       <form onSubmit={loginHandler} className="login-screen__form">
//         <h3 className="login-screen__title">Login</h3>
//         {error && <span className="error-message">{error}</span>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             required
//             id="email"
//             placeholder="Email address"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             tabIndex={1}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">
//             Password:{" "}
//             <Link to="/forgotpassword" className="login-screen__forgotpassword">
//               Forgot Password?
//             </Link>
//           </label>
//           <input
//             type="password"
//             required
//             id="password"
//             autoComplete="true"
//             placeholder="Enter password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             tabIndex={2}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>

//         <span className="login-screen__subtext">
//           Don't have an account? <Link to="/register">Register</Link>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default LoginScreen;

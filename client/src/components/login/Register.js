import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import './Register.css'
import * as Yup from "yup";
import { toast } from "react-toastify";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import { registerUser, validateEmail } from "../services/authService";
import Loader from "../loading/Loading";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  password: "",
  checkPassword: "",
};


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, email, gender, dateOfBirth, password, checkPassword } = formValue;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    if (!firstName || lastName || !email || gender || dateOfBirth || password || !checkPassword) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== checkPassword) {
      return toast.error("Passwords do not match");
    }

    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      password: "",
      checkPassword: "",
    };
    setIsLoading(true);
    try {
      const data = await registerUser(initialValues);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };




  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    lastName: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
    dateOfBirth: Yup.string()
      .test(
        "len",
        "Date of birth field is required!",
        (val) =>
          val &&
          val.toString().length >= 1
      )
      .required("This field is required!"),
    gender: Yup.string()
      .test(
        "len",
        "gender field is required!",
        (val) =>
          val &&
          val.toString().length >= 1 
      )
      .required("This field is required!"),
  });


  return (
    <div className="col-md-12 login-screen">
      {isLoading && <Loader />}
      <div className="card signup-max-width"> <div className="row gy-5">
        <div className="login-form col-12 col-md-6 bg-light p-4">
          <div className=''>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              <Form>
                  <div>
                    <div className="form-group">
                      <label htmlFor="firstName">first name</label>
                      <Field name="firstName" type="text" className="form-control" />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="alert alert-danger"
                      />
                      <label htmlFor="lastName">Last name</label>
                      <Field name="lastName" type="text" className="form-control" />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Birth Date</label>
                      <Field
                        name="dateOfBirth"
                        type="dateOfBirth"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <Field
                        name="gender"
                        type="gender"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
              </Form>
            </Formik>
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














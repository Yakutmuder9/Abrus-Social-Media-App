import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLogin } from '../../redux/features/auth/authSlice'
import { SET_LOGIN, SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import Loader from "../loading/Loading"
import {validateEmail, loginUser} from '../../redux/features/auth/authService' 

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setformData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const onSubmmitHandler = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
          return toast.error("All fields are required");
        }
    
        if (!validateEmail(email)) {
          return toast.error("Please enter a valid email");
        }
    
        const userData = {
          email,
          password,
        };
        setIsLoading(true);
        try {
            const data = await loginUser(userData);
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
        <div className="login-screen">
            {isLoading && <Loader />}
            
                <div className="row ">
                    <div className="login-txt col-12 col-md-6">
                        <div className='' >
                            <h1 className='text-success'>Wina-Social-app</h1>
                            <h4>Share your feeling with friends and the world through Wina-app</h4>
                        </div>
                    </div>
                    <div className="login-form col-12 col-md-6 bg-light rounded p-4 shadow-lg ">
                        <div className='
                        className="login-form-formik"'>
                            <form onSubmit={onSubmmitHandler}
                                className="login-form-formik">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    className="w-100 py-2 px-3 mb-3"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    className="w-100 py-2 px-3 mb-3"
                                />
                                <button type="submit"
                                    className="w-100 py-2 px-3 mb-3 btn btn-primary" disabled={isLoading}>
                                    {isLoading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Login</span></button>
                                <a type="submit"
                                    className="w-100 py-2 px-3 mb-3 btn text-dark">Forget password?<hr></hr></a>

                                <Link to="/register"
                                    className="w-100 py-2 px-3 mb-3 btn btn-success" >Create new account</Link>
                            </form>
                            <p></p>
                        </div>
                    </div>

               
            </div>
        </div>
    );
}

export default Login

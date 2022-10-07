import './login.css'
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    padding: 20,
    display: "inline-block",
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1.5 },
    exiting: { opacity: -1 },
    exited: { opacity: -1 },
};

const Login = () => {
    const [roller, setRoller] = useState(false)
    const handleRoller = () => {
        setRoller(!roller)
    }
    return (
        <div className='login-screen'>

            {roller ? <></> :
                <div className=" overflow-hidden mb-5 " id='login-max-width'>
                    <div className="row gy-5">
                        <div className="login-txt col-12 col-md-6">
                            <div className='' >
                                <h1 className='text-success'>Wina-Social-app</h1>
                                <h4>Share your feeling with friends and the world through Wina-app</h4>
                            </div>
                        </div>
                        <div className="login-form col-12 col-md-6 bg-light rounded p-4">
                            <div className=''>
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: ''
                                    }}
                                    onSubmit={async (values) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        alert(JSON.stringify(values, null, 2));
                                    }}
                                >
                                    <Form>
                                        <Field
                                            // id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter email here"
                                            className="w-100 py-2 px-3 mb-3"
                                        />
                                        <Field
                                            // id="lastName"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            className="w-100 py-2 px-3 mb-3" />
                                        <button type="submit"
                                            className="w-100 py-2 px-3 mb-3 btn btn-primary">Login</button>
                                        <a type="submit"
                                            className="w-100 py-2 px-3 mb-3 btn text-dark">Forget password?<hr></hr></a>

                                        <button
                                            className="w-100 py-2 px-3 mb-3 btn btn-success" onClick={handleRoller}>Create new account</button>
                                    </Form>
                                </Formik>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>

            }


            <Transition in={roller} timeout={300}>
                {(state) => (
                    <div
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    >
                        <div className={!roller ? "mb-5 d-none" : "mb-5"} id='signup-max-width'>
                            <div className="row gy-5">
                                <div className="login-form col-12 col-md-6 bg-light p-4">
                                    <div className=''>
                                        <Formik
                                            initialValues={{
                                                firstName: '',
                                                lastName: '',
                                                email: '',
                                                password: ''
                                            }}
                                            onSubmit={async (values) => {
                                                await new Promise((r) => setTimeout(r, 500));
                                                alert(JSON.stringify(values, null, 2));
                                            }}
                                        >
                                            <Form>
                                                <h2>Sign Up</h2>
                                                <div className='d-flex'>
                                                    <div className='me-1'>

                                                        <Field id="firstName" name="firstName" placeholder="FinrstName"
                                                            className="w-100 py-2 px-3 mb-3" />
                                                    </div>
                                                    <div>
                                                        <Field
                                                            id="lastName" name="lastName" placeholder="lastName"
                                                            className="w-100 py-2 px-3 mb-3" />

                                                    </div>



                                                </div>


                                                <Field
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter email here"
                                                    className="w-100 py-2 px-3 mb-3"
                                                />
                                                <Field id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    type="password"
                                                    className="w-100 py-2 px-3 mb-3" />
                                                <button type="submit"
                                                    className="w-100 py-2 px-3 mb-3 btn btn-success">Sign Up</button>
                                                <a type="submit"
                                                    className="w-100 py-2 px-3 mb-3 btn text-primary"><hr></hr></a>

                                                <div
                                                    className="w-100 py-2 px-3 mb-3 btn btn-dark " onClick={handleRoller}>Already user Login</div>
                                            </Form>
                                        </Formik>
                                        <p></p>
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
                )}
            </Transition>


            <footer className='bg-light'>
                <a>
                    &copy; copywite 2022
                    <hr></hr>
                    Sign Up  Login Wina
                </a>

            </footer>
        </div>
    )
}

export default Login

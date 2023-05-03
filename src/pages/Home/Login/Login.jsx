import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {

    const { signIn } = useContext(AuthContext)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()

    const toastify = (check, oast) => {
        check ? toast.success(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", }) : toast.error(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", })

    }

    const  handleOnSubmit= e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toastify(true, "Login Successful")
                form.reset()
                navigate(from)

            })
            .catch(error => {
                toastify(true, error)
            })
    }

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                toastify(true, "Login Successful")
                navigate(from)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toastify(true, "Login Successful")
                navigate(from)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:w-[500px] flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="w-[85%] shadow-2xl bg-base-100 rounded-lg">
                    <form onSubmit={handleOnSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className='mx-auto'>
                            <Link to="/register" className="label-text-alt link link-hover text-lg">Already have an account?</Link>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </form>
                    <div className='flex justify-between items-center w-[80%] mx-auto border-2 text-xl my-2  rounded-lg py-2 px-2 bg-indigo-700'>
                        <button className='w-[95%] mx-auto bg-white flex gap-1 rounded-lg py-2 px-3' onClick={handleGoogleSignIn}> <FaGoogle className='text-black w-6 h-6 p2'></FaGoogle>GoogleSignIn</button>
                    </div>
                    <div className='flex justify-between items-center  w-[80%] mx-auto border-2 text-xl my-2  rounded-lg py-2 px-2 bg-indigo-700'>
                        <button onClick={handleGithubSingIn} className='w-[95%] mx-auto bg-white flex gap-1 rounded-lg py-2 px-3' > <FaGithub className='text-black w-6 h-6 p2'></FaGithub>GithubSignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
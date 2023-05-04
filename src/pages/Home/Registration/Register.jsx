import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const { createUser, updateUserData } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const [showorhide, setShoworhide] = useState(false)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()
    
    const toastify = (check, oast) => {
        check ? toast.success(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", }) : toast.error(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", })

    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        if (password.length < 6) {
            return toastify(false, "Please! Password Enter the six character");
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toastify(true, "Register Successful")
                updateUserData(loggedUser, name, photo)
                navigate(from)
                form.reset()

            })
            .catch(error => {
                toastify(false, error)
            })

    }

    const handleAccepted = e => {
        setAccepted(e.target.checked)

    }
console.log(showorhide)
    return (
        <div className="hero min-h-screen bg-indigo-300">
            <div className="hero-content lg:w-[500px]  flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-[#12398d]">Register now!</h1>
                </div>
                <div className="w-[100%] shadow-2xl bg-base-100 rounded-lg">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showorhide ? "text" : "password"} placeholder="password" name='password' className="input input-bordered" required />
                            
                                <label className="flex gap-2 cursor-pointer mt-1">
                                    <input onClick={()=>setShoworhide(!showorhide)} type="checkbox" className="checkbox checkbox-primary" />
                                    <span className="">{showorhide ? "hide password" : "shwo password"}</span>
                                </label>
                            
                        </div>
                        <label className="flex gap-2 cursor-pointer">
                            <input onClick={handleAccepted} type="checkbox" className="checkbox checkbox-primary" />
                            <span className="">Accept Terms and Conditions</span>
                        </label>
                        <label className="label ">
                            <Link to="/login" className="link link-primary">Already have an account?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button disabled={!accepted} className="btn btn-primary">Register</button>
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
                </div>
            </div>
        </div>
    );
};

export default Register;
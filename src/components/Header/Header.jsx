import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav>
            <div className="navbar bg-black text-white px-28">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/orders">Orders</NavLink>
                        </li>
                        {
                            user && <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                        }
                        {
                            !user && <li>
                                <NavLink to="/register">Register</NavLink>
                            </li>
                        }

                    </ul>
                </div>
                <div>
                    {
                        user ? <>
                            <span>{user.email}</span>
                            <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                        </> : <NavLink to="/login" className='font-bold'>Login</NavLink>


                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;
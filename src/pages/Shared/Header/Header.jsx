import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className="navbar  bg-indigo-700 lg:px-32">
            <div className="navbar-start text-white">
                <Link to="/" className="btn btn-ghost normal-case text-2xl lg:text-3xl">Healthy Foods</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                <ul className="menu menu-horizontal px-1 lg:flex lg:gap-4 lg:mr-10">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>

                    {
                        user && <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    }
                    {
                        user ? <button onClick={() => logOut()}>logout</button> : <nav className='flex gap-3'>
                            <NavLink to='/login'><button>login</button></NavLink>
                            <NavLink to='/registration'>Registration</NavLink>
                        </nav>
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user && <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:hidden">
                        <button className='text-white'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        {
                            user ? <button onClick={() => logOut()}>logout</button> : <nav className='flex gap-3'>
                                <NavLink to='/login'><button>login</button></NavLink>
                                <NavLink to='/registration'>Registration</NavLink>
                            </nav>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};
{/* <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/login'>login</NavLink>
                    <NavLink to='/registration'>Registration</NavLink> */}

//         <div className="w-10 rounded-full">
//     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//   </div>
export default Header;
{/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:hidden">
                        <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/login'>login</NavLink>
                        <NavLink to='/registration'>Registration</NavLink>
                    </ul>
                </div> */}
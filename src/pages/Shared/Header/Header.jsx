import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar text-white bg-indigo-700 lg:px-32">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-3xl">Healthy Foods</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:flex lg:gap-4 lg:mr-10">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/login'>login</NavLink>
                    <NavLink to='/registration'>Registration</NavLink>
                </ul>
                {/* {
                    user && <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                } */}
                {/* {
                    user ? <button>Logout</button> : <NavLink to='/login'><button>login</button></NavLink>
                } */}
            </div>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar lg:hidden">
                        <button> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/login'>login</NavLink>
                        <NavLink to='/registration'>Registration</NavLink>
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
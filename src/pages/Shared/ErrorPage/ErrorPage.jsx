import React from 'react';
import { Link } from 'react-router-dom';

const Rrrorpage = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-indigo-600 to-blue-400 ">
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
            <div className="flex flex-col items-center">
                <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.2019634279.1674132989&semt=ais" alt="" />
                    <Link href="/" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">Go home</Link>
            </div>
        </div>
        </div>
    );
};

export default Rrrorpage;
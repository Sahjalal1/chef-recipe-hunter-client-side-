import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56 mx-auto my-52"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/Home/login" replace></Navigate>

};

export default PrivateRoute;
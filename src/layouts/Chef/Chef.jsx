import React from 'react';
import Header from '../../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Chef = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Chef;
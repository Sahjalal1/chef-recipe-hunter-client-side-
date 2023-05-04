import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import OurService from '../pages/Home/OurService/OurService';
import Aboutus from '../pages/Home/Aboutus/Aboutus';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <OurService></OurService>
            <Aboutus></Aboutus>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
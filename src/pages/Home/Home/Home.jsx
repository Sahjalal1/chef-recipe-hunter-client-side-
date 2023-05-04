import React from 'react';
import img from '../../../assets/Beef-Biriyani-Mumo-Kitchen-13-scaled.webp'
import { Link, useLoaderData } from 'react-router-dom';
import ChefsCard from '../ChefsCard/ChefsCard';

const Home = () => {
    const chefs = useLoaderData()

    return (
        /**/
        <>
            <div className="hero h-[600px]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Welcome to our website, here you will get fresh foods and if you order many, you will get an attractive reward</p>
                        <button className="">🙂🙂🙂🙂🙂🙂🙂🙂</button>
                    </div>
                </div>
            </div>

            <div className='w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-7 mx-auto mt-12'>
                {
                    chefs.map(chef => <ChefsCard
                        key={chef.id}
                        
                        chefs={chef}
                    ></ChefsCard>)
                }
            </div>
        </>
    );
};

export default Home;
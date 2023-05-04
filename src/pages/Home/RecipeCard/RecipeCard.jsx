import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const { id, recipe_picture, recipe_name, beef, spice, souryogurt, oil, water, ratinge, cookingMethod } = recipe;

    const toastify = (check, oast) => {
        check ? toast.success(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", }) : toast.error(oast, { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", })

    }

    const [favorite, setFavorite] = useState(false)
    
    return (

        <div className="hero-content flex flex-col lg:flex-row text-[#f3ebeb] mx-auto mt-12">
            <img src={recipe_picture} className="w-[450px] h-[530px] rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">{recipe_name}</h1>
                <div className='border-2 px-10 py-2 mt-3'>
                    <h2 className='text-2xl font-semibold mb-2'>The Minimum Required:</h2>
                    <p>* {beef}</p>
                    <p>* {spice}</p>
                    <p>* {souryogurt}</p>
                    <p>* {oil}</p>
                    <p>* {water}</p>
                </div>
                <div className='flex-grow-1 mt-3'>
                    <Rating
                        placeholderRating={ratinge}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <span>{ratinge}</span>
                </div>
                <p className="py-6"><span className='font-bold text-2xl'> Cooking Method : </span>{cookingMethod}</p>
                <button  onClick={() => setFavorite(true)} disabled={favorite} className='btn'><span onClick={()=>toastify(true, 'Add Your Favorite Recipe')}>Favorite</span></button>
                   
            </div>
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

    );
};

export default RecipeCard;
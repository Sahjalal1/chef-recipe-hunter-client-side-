import React, { useEffect, useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';


const ChefDetails = () => {
    const chefData = useLoaderData()
    const { chef_name, chef_picture, likes, years_of_experience, number_of_recipes } = chefData;
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json()
        .then(data => setRecipes(data)))
    },[chefData])

    return (
        <div>
            <div className="hero bg-indigo-400">
                <div className="hero-content flex-col lg:flex-row-reverse text-[#f3ebeb]">
                    <img src={chef_picture} className="lg:w-[450px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chef_name}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex items-center text-2xl gap-24'>
                            <p>recipes {number_of_recipes}</p>
                            <p className='w-12 flex items-center gap-1'><span><FaRegThumbsUp className='w-8 h-7'></FaRegThumbsUp></span> {likes}</p>
                        </div>
                        <p className='my-3 text-2xl'>experience: {years_of_experience} years</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <div className="w-[90%] mx-auto bg-indigo-400 mt-8 py-5">
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
           
        </div>
    );
};

export default ChefDetails;
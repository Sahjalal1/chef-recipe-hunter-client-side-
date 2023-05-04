import React from 'react';

const PopularFoods = () => {
    return (
        <div className='w-[90%] mx-auto bg-indigo-700 my-8'>
            <div className='text-4xl font-semibold text-white pt-8 text-center'><h1>Our Popular Food Here</h1></div>
            <div className='w-[80%] grid lg:grid-cols-4 gap-5  mx-auto py-5'>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/premium-photo/chicken-dhum-biriyani-using-jeera-rice-spices-arranged-earthen-ware_527904-513.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='mt-3'>* Chicken Biryani</h1>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='my-4'>* kacchi Biryani *</h1>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-photo/grilled-fish-with-vegetable-salad-orange_114579-3656.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='mt-3'>* Fish Kabab *</h1>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37864.jpg?size=626&ext=jpg&ga=GA1.2.2019634279.1674132989&semt=sph" alt="" />
                    <h1 className='mt-3'>* Grill Chicken *</h1>
                </div>
            </div>
        </div>
    );
};

export default PopularFoods;
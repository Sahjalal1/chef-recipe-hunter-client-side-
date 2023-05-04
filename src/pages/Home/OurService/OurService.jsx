import React from 'react';

const OurService = () => {
    return (
        <div className='w-[90%] mx-auto bg-indigo-700 my-8'>
           <div className='text-4xl font-semibold text-white pt-8 text-center'><h1>Our Service</h1></div>
            <div className='w-[80%] grid lg:grid-cols-4 gap-5  mx-auto py-5'>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='mt-3'>* Free Delivery Cost</h1>
                    <p className='mb-4 mt-3'>* Wiil last for 3 months</p>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-vector/flat-design-healthy-food-twitch-background_23-2149154354.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='my-4'>* We Have the Best Foods/healthy Food in Bangladesh Here</h1>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/premium-photo/light-wooden-table-there-is-white-calculator-pen-bills-sheet-paper-black-paper-clip-with-text-crazy-price-business-concept_380694-6082.jpg?size=626&ext=jpg&ga=GA1.2.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='mt-3'>* Reasonabil Price</h1>
                    <p  className='mb-4 mt-3'>* Discount is There.</p>
                </div>
                <div className='card text-center font-semibold'>
                    <img className='w-[250px] h-[200px] rounded-lg mx-auto my-3' src="https://img.freepik.com/free-vector/cheerful-chef-with-delicious-cake_23-2147627858.jpg?size=626&ext=jpg&ga=GA1.1.2019634279.1674132989&semt=ais" alt="" />
                    <h1 className='mt-3'>* Experience Chef</h1>
                    <p  className='mb-4 mt-3'>* True Ward</p>
                </div>
            </div>
        </div>
    );
};

export default OurService;
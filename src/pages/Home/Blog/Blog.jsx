import React from 'react';
import Download from './Download';



const Blog = () => {
  return (
    <>
      <div className='card w-[95%] lg:w-[80%] grid lg:grid-cols-2 gap-6 bg-sky-400 mt-10 mb-6 p-4 py-4 lg:px-10 lg:py-5 mx-auto'>
        <div className='card px-8 py-5'>
          <h1 className='text-2xl font-bold'>1. Tell us the differences between uncontrolled and controlled components??</h1>
          <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>Ans: </span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
        </div>
        <div className='card px-8 py-5'>
          <h1 className='text-2xl font-bold leading-relaxed'>1. How to validate React props using PropTypes??</h1>
          <p className='mt-3'><span className='font-bold text-xl'>Ans: </span>1. PropTypes.any : The prop can be of any data type.</p>
          <p>2. PropTypes.bool : The prop should be a Boolean.</p>
          <p>3. PropTypes.bool : The prop should be a Boolean.</p>
          <p>4. PropTypes.string : The prop should be a string.</p>
          <p>5. PropTypes.func : The prop should be a function.</p>
          <p>6. PropTypes.array : The prop should be an array.
          </p>
        </div>
        <div className='card px-8 py-5'>
          <h1 className='text-2xl font-bold'>1. Tell us the difference between nodejs and express js.??</h1>
          <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>Ans: </span>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>

        </div>
        <div className='card px-8 py-5'>
          <h1 className='text-2xl font-bold'>1. What is a custom hook, and why will you create a custom hook???</h1>
          <p className='leading-relaxed mt-3'><span className='font-bold text-xl'>Ans: </span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

        </div>


      </div>
      <div className='mb-10 text-center'>
        <Download></Download>
      </div>
    </>
  );
};

export default Blog;
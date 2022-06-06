import React from 'react';
import art from '../../Images/1.jpg'

const Banner = () => {
    return (
        <div className="hero mt-28">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={art} className="lg:max-w-md rounded-lg shadow-2xl" />
                <div className='lg:mr-4 m-0'>
                    <h1 className="lg:text-5xl text-2xl font-bold">Your New Smile Starts Here</h1>
                    <p className="lg:py-6 py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
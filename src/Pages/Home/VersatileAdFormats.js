import React from 'react';
import art from '../../Images/1.jpg'

const VersatileAdFormats = () => {
    return (
        <div className='mt-28'>
            <div className="section-heading">
                <div className=' text-center mb-4'>
                    <h2 className='heading text-4xl uppercase text-secondary mb-8'>VERSATILE AD FORMATS</h2>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
                <div className="card lg:max-w-lg">
                    <button className='btn px-3 text-xl bg-gray-100 border-0 drop-shadow-lg mb-2 text-secondary focus-within:bg-primary focus-within:text-white hover:bg-primary hover:text-white  rounded-3xl   w-3/4 shadow-xl'>POP-UNDER</button>
                </div>
                <div className="card lg:max-w-lg">
                    <button className='btn px-3 text-xl bg-gray-100 border-0 drop-shadow-lg mb-2 text-secondary focus-within:bg-primary focus-within:text-white hover:bg-primary hover:text-white  rounded-3xl   w-3/4 shadow-xl'>BANNER AD</button>
                </div>
                <div className="card lg:max-w-lg">
                    <button className='btn px-3 text-xl bg-gray-100 border-0 drop-shadow-lg mb-2 text-secondary focus-within:bg-primary focus-within:text-white hover:bg-primary hover:text-white  rounded-3xl   w-3/4 shadow-xl'>NATIVE</button>
                </div>
                <div className="card lg:max-w-lg">
                    <button className='btn px-3 text-xl bg-gray-100 border-0 drop-shadow-lg mb-2 text-secondary focus-within:bg-primary focus-within:text-white hover:bg-primary hover:text-white  rounded-3xl  w-3/4 shadow-xl'>SKIM</button>
                </div>
            </div>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='lg:mr-10 m-0'>
                        <h1 className="text-2xl text-primary">POP-UNDER</h1>
                        <p className="lg:py-6 py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <img src={art} className="lg:max-w-md rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default VersatileAdFormats;
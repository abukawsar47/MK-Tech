import React from 'react';
import './AvailableForEveryone.css'

const AvailableForEveryone = () => {
    return (
        <div className='mt-28'>
            <div className="section-heading">
                <div className=' text-center mb-4'>
                    <h2 className='heading text-4xl uppercase text-secondary mb-2'>Available For Everyone</h2>
                    <h4 className='text-2xl'>Here will be a text</h4>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card lg:max-w-lg">
                    <figure className="px-10 pt-10  ">
                        <div className='p-16 drop-shadow-md rounded-full bg-base-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className='text-2xl font-bold mb-4'>Hello Title</h3>
                        <button className='btn px-3 text-xl text-white rounded-3xl btn-secondary  w-3/4 shadow-xl'>Hello 1</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg  ">
                    <figure className="px-10 pt-10  ">
                        <div className='p-16 drop-shadow-md rounded-full bg-base-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className='text-2xl font-bold mb-4'>Hello Title</h3>
                        <button className='btn px-3 text-xl text-white rounded-3xl btn-secondary  w-3/4 shadow-xl'>Hello 2</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg  ">
                    <figure className="px-10 pt-10  ">
                        <div className='p-16 drop-shadow-md rounded-full bg-base-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h3 className='text-2xl font-bold mb-4'>Hello Title</h3>
                        <button className='btn px-3 text-xl text-white rounded-3xl btn-secondary  w-3/4 shadow-xl'>Hello 3</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableForEveryone;
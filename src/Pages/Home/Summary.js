import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div className='mt-28 bg-secondary'>
            <div className="section-heading">
                <div className=' text-center mb-4'>
                    <h2 className='heading text-4xl uppercase text-white pt-10 mb-2'>Summary</h2>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card lg:max-w-lg">
                    <div className='summary'>
                        <h2 className='text-4xl font-bold mb-2 '>1 BN+</h2>
                        <h3 className='text-xl font-bold '>Daily Impressions</h3>
                    </div>
                </div>
                <div className="card lg:max-w-lg">
                    <div className='summary bg-white b-none'>
                        <h2 className='text-4xl font-bold mb-2  text-secondary'>$500K+</h2>
                        <h3 className='text-xl font-bold  text-secondary'>Paid</h3>
                    </div>
                </div>
                <div className="card lg:max-w-lg">
                    <div className='summary bg-primary b-none'>
                        <h2 className='text-4xl font-bold mb-2 '>8K+</h2>
                        <h3 className='text-xl font-bold '>Global Publishers
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
import React from 'react';
import AvailableForEveryone from './AvailableForEveryone';
import Banner from './Banner';
import Summary from './Summary';
import Testimonial from './Testimonial';
import VersatileAdFormats from './VersatileAdFormats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableForEveryone></AvailableForEveryone>
            <VersatileAdFormats></VersatileAdFormats>
            <Summary></Summary>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
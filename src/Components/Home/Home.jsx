import React from 'react';
import Banner from '../Banner/Banner';
import ProductSection from '../ProductSection/ProductSection';
import './Home.css'

const Home = () => {
    return (
        <div className='homeBody'>
            <Banner/>
            <ProductSection/>
        </div>
    );
};

export default Home;
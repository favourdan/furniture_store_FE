import React from 'react';
import HeaderComponent from './Header';
import ProductOverview from './ProductOverview';
import BestSelling from './Best-selling';
import TestimonialComponent from '../Testimonials';
import Features from './Features';





const HomePage = () =>{
    return( 
        <div>
            <HeaderComponent />
            <ProductOverview />
            < BestSelling />
            <TestimonialComponent />
            <Features />
        </div>

    );
}

export default HomePage;
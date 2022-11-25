import React from 'react';
import AdvertiseItem from './AdvertiseItems/AdvertiseItem';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Promotion from './Promotion/Promotion';
import Stat from './Stat/Stat';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <AdvertiseItem></AdvertiseItem>
            <Categories></Categories>
            <Testimonial></Testimonial>
            <Promotion></Promotion>
        </div>
    );
};

export default Home;